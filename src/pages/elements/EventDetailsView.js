import React from 'react'

import Styles from '../../styles/elementStyles/EventDetailsView.module.css'

import HeaderTittle from './HeaderTittle';

function EventDetailsView({ event }) {
    return (
        <div className={Styles.main}>
            <HeaderTittle tittle={"Organización de eventos activos"} />
            {event.event.users.map(user => (
                <div>{user.userEmail}</div>
            ))}
        </div>
    )
}

export default EventDetailsView;