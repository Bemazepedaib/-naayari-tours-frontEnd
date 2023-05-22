import React from 'react'

import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin'
import EventsView from '../elements/EventsView'
import Styles from '../../styles/Events.module.css'
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../querys/eventQuerys';

function Events() {

    const { loading: eventLoading, error: eventError, data: eventData } = useQuery(GET_EVENTS)

    return (!eventLoading && !eventError &&
        <div className={Styles.mainContainer}>
            <SidebarAdmin />
            <EventsView eventData={eventData}/>
        </div>
    )
}

export default Events