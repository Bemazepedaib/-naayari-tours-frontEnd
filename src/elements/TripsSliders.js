import React from 'react'
import TripSlider from './TripSlider';
import { ME } from '../backendOperations/querys/userQuerys';
import { GET_TRIPS } from '../backendOperations/querys/tripQuerys';
import { useQuery } from '@apollo/client';
import Preferences from 'naayari-tours/pages/Preferences';

const TripsSliders = () => {
    const { loading: meLoading, error: meError, data: meData } = useQuery(ME);
    const { loading: tripLoading, error: tripError, data: tripData } = useQuery(GET_TRIPS);
    const getGoodTrips = () => {
        tripData.map(trip => )
    }
    return !meLoading && !meError && !tripLoading && !tripError && (
        <div>
            <TripSlider title={"LUGARES RECOMENDADOS PARA TI"} />
            <TripSlider title={"LUGARES RECOMENDADOS PARA TI"} />
            <TripSlider title={"LUGARES RECOMENDADOS PARA TI"} />
        </div>
    )
}

export default TripsSliders
