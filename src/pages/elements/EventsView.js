import React, { useState } from 'react'
import Router from "next/router";

import Styles from '../../styles/elementStyles/EventsView.module.css'

import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import { Spinner } from 'react-bootstrap';
import { GET_EVENTS } from '../querys/eventQuerys';

function EventsView() {

    const { loading: meLoading, error: meError, data: meData } = useQuery(ME);
    const { loading: eventLoading, error: eventError, data: eventData } = useQuery(GET_EVENTS)

    if (meLoading) return (<div className={Styles.error}><Spinner /></div>)
    if (meError) return (<div className={Styles.error}>Inicie sesión para continuar</div>)
    if (meData.me.userType !== "admin") return (<div className={Styles.error}>Necesitas permisos de administrador para acceder a este módulo</div>)

    let i = 0;

    const clickEvent = (eventTrip, eventDate) => {
        Router.push({ pathname: '/elements/EventDetails', query: { eventTrip, eventDate } })
    }

    const pushDate = () => {

    }

    return (!eventLoading && !eventError &&
        <div className={Styles.main}>
            <div className={Styles.titulo1}>Viajes activos</div>
            <div className={Styles.contenedorEvents}>
                {eventData.events.map(event => (
                    event.eventStatus ?
                        <div className={Styles.contenedorEvent} key={i++}>
                            <div className={Styles.miniFlex}><div className={Styles.textHid}>Viaje:&nbsp;</div> {event.eventTrip}</div>
                            <div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div> {event.eventDate}</div>
                            <div className={Styles.miniFlex}><div className={Styles.textHid}>Tipo de viaje:&nbsp;</div> {event.eventType === "Public" ? "Público" : "VIP"}</div>
                            <button className={Styles.btn} onClick={() => { clickEvent(event.eventTrip, event.eventDate) }} >Ver más</button>
                        </div>
                        : null
                ))}
            </div>
            {/* <div className={Styles.titulo1}>Viajes pasados</div>
            <div className={Styles.contenedorEvents}>
                {eventData.events.map(event => (
                    event.eventStatus ? null :
                        <div className={Styles.contenedorEvent} key={i++}>
                            <div>Viaje: {event.eventTrip}</div>
                            <div>Fecha: {event.eventDate}</div>
                            <div>{event.eventType === "Public" ? "Público" : "Privado"}</div>
                            <button className={Styles.btn} onClick={() => { clickEvent(event.eventTrip, event.eventDate) }} >Ver más</button>
                        </div>
                ))}
            </div> */}
        </div>
    )
}

export default EventsView;