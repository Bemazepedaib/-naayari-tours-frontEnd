import React from 'react'

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

    return (!eventLoading && !eventError &&
        <div className={Styles.main}>
            <HeaderTittle tittle={"Organización de eventos activos"} />
            <div className={Styles.contenedorEvents}>
            {eventData.events.map(event => (
                <div className={Styles.contenedorEvent}>{event.eventTrip}</div>
            ))}
            </div>
        </div>
    )
}

export default EventsView;