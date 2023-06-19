import React from 'react'
import { GET_TRIPS } from '../backendOperations/querys/tripQuerys';

import Styles from '../styles/Home.module.css';
import { useQuery } from '@apollo/client';
import Catalogue from '../pages/Catalogue'

function CatalogueCards() {


    var key = 0;
    const { loading, error, data } = useQuery(GET_TRIPS);

    return (
        <div>
            {!loading && !error && (
                <div>
                    <div id={Styles.catalogue}>{data.trips.map(trip => (
                        trip.tripStatus ?
                        <Catalogue key={key++} trip={trip}/> :""
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CatalogueCards
