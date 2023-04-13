import React from 'react'
import { GET_TRIP } from '../querys/tripQuerys';

import Styles from '../../styles/Home.module.css';
import { useQuery } from '@apollo/client';
import Details from '../sites/Details'
import { useRouter } from 'next/router';

function DetailCard() {
    const router = useRouter()

    const { query:{name} } = router;
    

    var key = 0;
    const { loading, error, data } = useQuery(GET_TRIP,{variables:{tripName: name}});

    return (
        <div>
           
            {!loading && !error && (
                <div>
                 <Details trip={data}/>
                </div>
            )}
        </div>
    )
}

export default DetailCard
