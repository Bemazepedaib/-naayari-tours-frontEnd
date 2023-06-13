import React from 'react'

import { GET_EVENT } from '../../backendOperations/querys/eventQuerys';
import { useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';

import { useRouter } from 'next/router';
import EventDetailsView from './EventDetailsView';
import SidebarAdmin from './AdminDashboard/SidebarAdmin';

import Styles from '../../styles/elementStyles/EventDetails.module.css'

function EventDetails() {
    const { query: { eventTrip, eventDate } } = useRouter();

    const { loading: eventLoading, error: eventError, data: eventData } = useQuery(GET_EVENT, { variables: { eventTrip, eventDate } });

    if (eventLoading) return (
        <div className={Styles.main}>
            <SidebarAdmin />
            <div className={Styles.error}>
                <Spinner />
            </div>
        </div>
    )
    if (eventError) return (
        <div className={Styles.main}>
            <SidebarAdmin />
            <div className={Styles.error}>
                ¡Algo ha salido mal, intente más tarde!
            </div>
        </div>
    )

    return (!eventLoading && !eventError &&
        <div className={Styles.main}>
            <SidebarAdmin />
            <EventDetailsView event={eventData} />
        </div>
    )
}

export default EventDetails;