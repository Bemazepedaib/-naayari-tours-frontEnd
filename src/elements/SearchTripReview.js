import React from 'react'

//APOLLO SERVER
import { GET_REVIEW_TRIPS } from '../backendOperations/querys/tripQuerys';
import { useQuery } from '@apollo/client';

//COMPONENTS
import SearchDataReview from './SearchDataReview'

const SearchTripReview = (tripName) => {
    const { loading, error, data } = useQuery(GET_REVIEW_TRIPS, { variables: tripName });
    return !loading && !error && (
        <div>
            <SearchDataReview dataReview={data.trip}></SearchDataReview>
        </div>
    )
}

export default SearchTripReview