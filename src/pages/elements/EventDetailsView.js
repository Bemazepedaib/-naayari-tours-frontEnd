import React from 'react'

import Styles from '../../styles/elementStyles/EventDetailsView.module.css'

import ModalEvent from './ModalEvent';

function EventDetailsView({ event }) {

    let key = 0;

    console.log(event)

    return (
        <div className={Styles.main}>
            <div className={Styles.titulo1}>{event.event.eventDate + " | " + event.event.eventTrip}</div>
            <div className={Styles.titulo2}>Datos del viaje</div>
            <div className={Styles.contenedorDatos}>
                <div> Tipo de viaje: {event.event.eventType === "Public" ? "Público" : "VIP"}</div>
                <div> Estado del viaje: {event.event.eventStatus === "active" ? "Activo" : event.event.eventSatus === "closed" ? "Cerrado" : "Inactivo"}</div>
            </div>
            <div className={Styles.titulo2}>Reservaciones</div>
            <div className={Styles.contenedorUsuarios}>
                {event.event.users.length > 0 ? event.event.users.map(user => (
                    <div key={key++}>
                        <ModalEvent user={user} />
                    </div>
                )) : <div className={Styles.noReservation}>Aún no hay reservaciones</div>}
            </div>
        </div>
    )
}

export default EventDetailsView;