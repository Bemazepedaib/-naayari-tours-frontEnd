import React, { useState } from 'react'
import Router from "next/router";

import Styles from '../../styles/elementStyles/EventsView.module.css'

import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import { Spinner } from 'react-bootstrap';

function EventsView(eventData) {

    const { loading: meLoading, error: meError, data: meData } = useQuery(ME);

    const [activeEvents, setActiveEvents] = useState(eventData.eventData.events.filter(event => event.eventStatus === 'active'))
    const [closedEvents, setClosedEvents] = useState(eventData.eventData.events.filter(event => event.eventStatus === 'closed'))
    const [inactiveEvents, setInactiveEvents] = useState(eventData.eventData.events.filter(event => event.eventStatus === 'inactive'))

    const [input1, setInput1] = useState("")
    const [input2, setInput2] = useState("")
    const [input3, setInput3] = useState("")

    const datos = [activeEvents, closedEvents, inactiveEvents]
    const inputs = [
        { hook: input1, setHook: setInput1 },
        { hook: input2, setHook: setInput2 },
        { hook: input3, setHook: setInput3 },
    ]
    const nombres = [
        { titulo: 'Viajes activos', hook: 'activeEvents' },
        { titulo: 'Viajes cerrados', hook: 'closedEvents' },
        { titulo: 'Viajes inactivos', hook: 'inactiveEvents' }
    ]

    if (meLoading) return (<div className={Styles.error}><Spinner /></div>)
    if (meError) return (<div className={Styles.error}>Inicie sesión para continuar</div>)
    if (meData.me.userType !== "admin") return (<div className={Styles.error}>Necesitas permisos de administrador para acceder a este módulo</div>)

    let i = 0;

    const clickEvent = (eventTrip, eventDate) => {
        Router.push({ pathname: '/elements/EventDetails', query: { eventTrip, eventDate } })
    }

    const handlechange = (e) => {
        e.preventDefault()
        switch (e.target.name) {
            case 'activeEvents':
                setInput1(e.target.value)
                searchBar(e.target.value, eventData.eventData.events.filter(event => event.eventStatus === 'active'), setActiveEvents);
                break;
            case 'closedEvents':
                setInput2(e.target.value)
                searchBar(e.target.value, eventData.eventData.events.filter(event => event.eventStatus === 'closed'), setClosedEvents);
                break;
            case 'inactiveEvents':
                setInput3(e.target.value)
                searchBar(e.target.value, eventData.eventData.events.filter(event => event.eventStatus === 'inactive'), setInactiveEvents);
                break;
        }
    }

    const searchBar = (termino, hook, setHook) => {
        let searchResult = hook.filter((element) => {
            if (element.eventTrip.toString().toLowerCase().includes(termino.toLowerCase())
                || element.eventDate.toString().toLowerCase().includes(termino.toLowerCase()))
                return element
        })
        setHook(searchResult)
    }

    return (!meLoading && !meError &&
        <div className={Styles.main}>
            <div className={Styles.titulo1}>Viajes activos</div>
            <input
                className={Styles.input}
                placeholder='Ingrese datos del evento a buscar'
                value={input1}
                onChange={handlechange}
                name={'activeEvents'}
                key={'activeEvents'}
            ></input>
            <div className={Styles.contenedorEvents} key={i++}>
                {activeEvents?.map(event => (
                    <div className={Styles.contenedorEvent} key={event.eventTrip + event.eventDate}>
                        <div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp;</div> {event.eventTrip}</div>
                        <div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div> {event.eventDate}</div>
                        <div className={Styles.miniFlex}><div className={Styles.textHid}>Tipo de viaje:&nbsp;</div> {event.eventType === "Public" ? "Público" : "VIP"}</div>
                        <button className={Styles.btn} onClick={() => { clickEvent(event.eventTrip, event.eventDate) }} >Ver más</button>
                    </div>
                ))}
            </div>
            <div className={Styles.titulo1}>Viajes cerrados</div>
            <input
                className={Styles.input}
                placeholder='Ingrese datos del evento a buscar'
                value={input2}
                onChange={handlechange}
                name={'closedEvents'}
                key={'closedEvents'}
            ></input>
            <div className={Styles.contenedorEvents} key={i++}>
                {closedEvents?.map(event => (
                    <div className={Styles.contenedorEvent} key={event.eventTrip + event.eventDate}>
                        <div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp;</div> {event.eventTrip}</div>
                        <div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div> {event.eventDate}</div>
                        <div className={Styles.miniFlex}><div className={Styles.textHid}>Tipo de viaje:&nbsp;</div> {event.eventType === "Public" ? "Público" : "VIP"}</div>
                        <button className={Styles.btn} onClick={() => { clickEvent(event.eventTrip, event.eventDate) }} >Ver más</button>
                    </div>
                ))}
            </div>
            <div className={Styles.titulo1}>Viajes inactivos</div>
            <input
                className={Styles.input}
                placeholder='Ingrese datos del evento a buscar'
                value={input3}
                onChange={handlechange}
                name={'inactiveEvents'}
                key={'inactiveEvents'}
            ></input>
            <div className={Styles.contenedorEvents} key={i++}>
                {inactiveEvents?.map(event => (
                    <div className={Styles.contenedorEvent} key={event.eventTrip + event.eventDate}>
                        <div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp;</div> {event.eventTrip}</div>
                        <div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div> {event.eventDate}</div>
                        <div className={Styles.miniFlex}><div className={Styles.textHid}>Tipo de viaje:&nbsp;</div> {event.eventType === "Public" ? "Público" : "VIP"}</div>
                        <button className={Styles.btn} onClick={() => { clickEvent(event.eventTrip, event.eventDate) }} >Ver más</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventsView;