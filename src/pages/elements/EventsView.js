import React, { useState } from "react";
import Router from "next/router";

import Styles from "../../styles/elementStyles/EventsView.module.css";

import { useQuery } from "@apollo/client";
import { ME } from "../querys/userQuerys";
import { Spinner } from "react-bootstrap";

function EventsView(eventData) {
	const { loading: meLoading, error: meError, data: meData } = useQuery(ME);
	const [activeEvents, setActiveEvents] = useState(eventData.eventData.events.filter((event) => event.eventStatus === "active"));
	const [closedEvents, setClosedEvents] = useState(eventData.eventData.events.filter((event) => event.eventStatus === "closed"));
	const [inactiveEvents, setInactiveEvents] = useState(eventData.eventData.events.filter((event) => event.eventStatus === "inactive"));

	const [input1, setInput1] = useState("");
	const [input2, setInput2] = useState("");
	const [input3, setInput3] = useState("");

	const [visible1, setVisible1] = useState({ prev: 0, next: 9 })
	const [visible2, setVisible2] = useState({ prev: 0, next: 9 })
	const [visible3, setVisible3] = useState({ prev: 0, next: 9 })

	const verMas1 = () => {
		if (visible1.prev + 9 > activeEvents.length) return
		setVisible1({ prev: visible1.next, next: visible1.next + 9 })
	}
	const verMenos1 = () => {
		if (visible1.prev - 9 < 0) return
		setVisible1({ prev: visible1.prev - 9, next: visible1.prev })
	}
	const verMas2 = () => {
		if (visible2.prev + 9 > closedEvents.length) return
		setVisible2({ prev: visible2.next, next: visible2.next + 9 })
	}
	const verMenos2 = () => {
		if (visible2.prev - 9 < 0) return
		setVisible2({ prev: visible2.prev - 9, next: visible2.prev })
	}
	const verMas3 = () => {
		if (visible3.prev + 9 > inactiveEvents.length) return
		setVisible3({ prev: visible3.next, next: visible3.next + 9 })
	}
	const verMenos3 = () => {
		if (visible3.prev - 9 < 0) return
		setVisible3({ prev: visible3.prev - 9, next: visible3.prev })
	}

	if (meLoading) return (<div className={Styles.error}><Spinner /></div>);
	if (meError) return <div className={Styles.error}>Inicie sesión para continuar</div>;
	if (meData.me.userType !== "admin") return (<div className={Styles.error}>Necesitas permisos de administrador para acceder a este módulo</div>);

	let i = 0;

	const clickEvent = (eventTrip, eventDate) => { Router.push({ pathname: "/elements/EventDetails", query: { eventTrip, eventDate } }) }

	const handlechange = (e) => {
		e.preventDefault();
		switch (e.target.name) {
			case "activeEvents":
				setInput1(e.target.value);
				searchBar(e.target.value, eventData.eventData.events.filter((event) => event.eventStatus === "active"), setActiveEvents);
				break;
			case "closedEvents":
				setInput2(e.target.value);
				searchBar(e.target.value, eventData.eventData.events.filter((event) => event.eventStatus === "closed"), setClosedEvents);
				break;
			case "inactiveEvents":
				setInput3(e.target.value);
				searchBar(e.target.value, eventData.eventData.events.filter((event) => event.eventStatus === "inactive"), setInactiveEvents);
				break;
		}
	};

	const searchBar = (termino, hook, setHook) => {
		let searchResult = hook.filter((element) => {
			if (element.eventTrip.toString().toLowerCase().includes(termino.toLowerCase()) ||
				element.eventDate.toString().toLowerCase().includes(termino.toLowerCase()))
				return element;
		});
		setHook(searchResult);
	};

	return (!meLoading && !meError && (
		<div className={Styles.main}>
			<div className={Styles.titulo1}>Viajes activos</div>
			<input
				className={Styles.input}
				placeholder="Ingrese datos del evento a buscar"
				value={input1}
				onChange={handlechange}
				name={"activeEvents"}
				key={"activeEvents"}
			></input>
			<div className={Styles.contenedorEvents} key={i++}>
				{activeEvents?.slice(visible1.prev, visible1.next).map((event) => (
					<div className={Styles.contenedorEvent} key={event.eventTrip + event.eventDate}>
						<div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp;</div>{event.eventTrip}</div>
						<div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div>{event.eventDate}</div>
						<div className={Styles.miniFlex}><div className={Styles.textHid}>Tipo de viaje:&nbsp;</div>{event.eventType === "Public" ? "Público" : "VIP"}</div>
						<button className={Styles.btn} onClick={() => { clickEvent(event.eventTrip, event.eventDate); }}>Ver más</button>
					</div>
				))}
			</div>
			<div className={Styles.botones}>
				{visible1.prev !== 0 ? <button className={Styles.btn} onClick={() => verMenos1()}>Anterior</button> : null}
				{visible1.next < activeEvents.length ? <button className={Styles.btn} onClick={() => verMas1()}>Siguiente</button> : null}
			</div>
			<div className={Styles.titulo1}>Viajes cerrados</div>
			<input
				className={Styles.input}
				placeholder="Ingrese datos del evento a buscar"
				value={input2}
				onChange={handlechange}
				name={"closedEvents"}
				key={"closedEvents"}
			></input>
			<div className={Styles.contenedorEvents} key={i++}>
				{closedEvents?.slice(visible2.prev, visible2.next).map((event) => (
					<div className={Styles.contenedorEvent} key={event.eventTrip + event.eventDate}>
						<div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp;</div>{event.eventTrip}</div>
						<div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div>{event.eventDate}</div>
						<div className={Styles.miniFlex}><div className={Styles.textHid}>Tipo de viaje:&nbsp;</div>{event.eventType === "Public" ? "Público" : "VIP"}</div>
						<button className={Styles.btn} onClick={() => { clickEvent(event.eventTrip, event.eventDate); }}>Ver más</button>
					</div>
				))}
			</div>
			<div className={Styles.botones}>
				{visible2.prev !== 0 ? <button className={Styles.input} onClick={() => verMenos2()}>Anterior</button> : null}
				{visible2.next < closedEvents.length ? <button className={Styles.input} onClick={() => verMas2()}>Siguiente</button> : null}
			</div>
			<div className={Styles.titulo1}>Viajes inactivos</div>
			<input
				className={Styles.input}
				placeholder="Ingrese datos del evento a buscar"
				value={input3}
				onChange={handlechange}
				name={"inactiveEvents"}
				key={"inactiveEvents"}
			></input>
			<div className={Styles.contenedorEvents} key={i++}>
				{inactiveEvents?.slice(visible3.prev, visible3.next).map((event) => (
					<div className={Styles.contenedorEvent} key={event.eventTrip + event.eventDate}>
						<div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp;</div>{event.eventTrip}</div>
						<div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div>{event.eventDate}</div>
						<div className={Styles.miniFlex}><div className={Styles.textHid}>Tipo de viaje:&nbsp;</div>{event.eventType === "Public" ? "Público" : "VIP"}</div>
						<button className={Styles.btn} onClick={() => { clickEvent(event.eventTrip, event.eventDate); }}>Ver más</button>
					</div>
				))}
			</div>
			<div className={Styles.botones}>
				{visible3.prev !== 0 ? <button className={Styles.input} onClick={() => verMenos3()}>Anterior</button> : null}
				{visible3.next < inactiveEvents.length ? <button className={Styles.input} onClick={() => verMas3()}>Siguiente</button> : null}
			</div>
		</div>
	)
	);
}

export default EventsView;
