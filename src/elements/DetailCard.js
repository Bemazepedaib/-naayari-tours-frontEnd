import React from 'react'

import { GET_TRIP } from '../backendOperations/querys/tripQuerys';
import { useQuery } from '@apollo/client';

import { useRouter } from 'next/router';

import Details from '../pages/sites/Details'

function DetailCard() {
    const router = useRouter();

    const { query:{name} } = router;
    
    const { loading, error, data } = useQuery(GET_TRIP,{variables:{tripName: name}});

    return (
        <div> 
            {!loading && !error && (
                <div><Details trip={data}/></div>
            )}
        </div>
    )
}

export default DetailCard