import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_TRIP } from '../querys/tripQuerys';
import { useRouter } from 'next/router';
import CreateTripView from '../elements/CreateTripView';
const UpdatingTrip = () => {
    const router = useRouter()
    const { query: { tripNameData } } = router;    
    const { loading, error, data } = useQuery(GET_TRIP,{variables:{tripName: tripNameData}});
    return (
        <div>
            {!loading && !error && (
                <CreateTripView trip={data}></CreateTripView>
            )}
        </div>
    )
}

export default UpdatingTrip
