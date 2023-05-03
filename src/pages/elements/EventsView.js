import React from 'react'
import Router from "next/router";

import Styles from '../../styles/elementStyles/EventsView.module.css'
import HeaderTittle from './HeaderTittle';

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

    let i=0;

    const clickEvent = (eventTrip, eventDate) => {
        Router.push({ pathname: '/elements/EventDetails', query: { eventTrip, eventDate } })
    }

    return (!eventLoading && !eventError &&
        <div className={Styles.main}>
            <HeaderTittle tittle={"Organización de eventos activos"} />
            <div className={Styles.contenedorEvents}>
            {eventData.events.map(event => (
                <div className={Styles.contenedorEvent} key={i++} onClick={() => { clickEvent(event.eventTrip, event.eventDate) }}>
                    {event.eventTrip} | {event.eventDate}
                    <br></br>
                    {event.eventType === "Public" ? "Público" : "Privado"}
                    <br></br>
                    {event.eventStatus ? "Activo" : "Inactivo"}
                </div>
            ))}
            </div>
        </div>
    )
}

export default EventsView;