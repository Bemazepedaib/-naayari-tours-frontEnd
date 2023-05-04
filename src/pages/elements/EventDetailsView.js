import React from 'react'

import Styles from '../../styles/elementStyles/EventDetailsView.module.css'

import HeaderTittle from './HeaderTittle';
import ModalEvent from './ModalEvent';

function EventDetailsView({ event }) {

    let key = 0;

    console.log(event)

    return (
        <div className={Styles.main}>
            <div className={Styles.titulo1}>{event.event.eventDate + " | " + event.event.eventTrip}</div>
            <div className={Styles.titulo2}>Usuarios</div>
            <div className={Styles.contenedorUsuarios}>
                {event.event.users.map(user => (
                    <div key={key++}>
                        <ModalEvent user={user} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventDetailsView;