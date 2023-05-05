import React from 'react'

//APOLLO SERVER
import { GET_PI_TRIPS } from '../querys/tripQuerys';
import { useQuery } from '@apollo/client';

//COMPONENTS
import SearchDataTrip from './SearchDataTrip'

const SearchTripView = () => {
    const { loading, error, data } = useQuery(GET_PI_TRIPS);
    return (
        <div>
            {!loading && !error && (
                
                <SearchDataTrip data={data.trips}></SearchDataTrip>
            )
            }
        </div >
    )
}

export default SearchTripView
