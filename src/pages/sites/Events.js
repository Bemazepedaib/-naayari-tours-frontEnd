import React from 'react'

import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin'
import EventsView from '../elements/EventsView'
import Styles from '../../styles/Events.module.css'

function Events() {
    return (
        <div className={Styles.mainContainer}>
            <SidebarAdmin />
            <EventsView />
        </div>
    )
}

export default Events