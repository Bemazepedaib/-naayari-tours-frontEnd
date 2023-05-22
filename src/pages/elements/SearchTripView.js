import React from 'react'

//APOLLO SERVER
import { GET_PI_TRIPS } from '../querys/tripQuerys';
import { useQuery } from '@apollo/client';

//COMPONENTS
import SearchDataTrip from './SearchDataTrip'

const SearchTripView = ({newTrip}) => {
    const { loading, error, data } = useQuery(GET_PI_TRIPS);
    return (
        <div>
            {!loading && !error && (
                
                <SearchDataTrip newTrip={newTrip}  dataM={data.trips}></SearchDataTrip>
            )
            }
        </div >
    )
}

export default SearchTripView
