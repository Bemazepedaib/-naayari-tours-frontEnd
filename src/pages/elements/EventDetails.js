import React from 'react'

import { GET_EVENT } from '../querys/eventQuerys';
import { useQuery } from '@apollo/client';

import { useRouter } from 'next/router';
import EventDetailsView from './EventDetailsView';

function EventDetails() {
    const { query: { eventTrip, eventDate } } = useRouter();

    const { loading, error, data } = useQuery(GET_EVENT,{variables:{ eventTrip, eventDate }});

    return (
        <div>
            {!loading && !error && (
                <div><EventDetailsView event={data}/></div>
            )}
        </div>
    )
}

export default EventDetails;