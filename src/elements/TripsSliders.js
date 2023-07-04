import React from 'react'
import TripSlider from './TripSlider';
import { Spinner } from 'react-bootstrap';
import { ME } from '../backendOperations/querys/userQuerys';
import { GET_TRIPS } from '../backendOperations/querys/tripQuerys';
import { useQuery } from '@apollo/client';

const TripsSliders = () => {
    const { loading: meLoading, error: meError, data: meData } = useQuery(ME);
    const { loading: tripLoading, error: tripError, data: tripData } = useQuery(GET_TRIPS);
    const getRecomendedPlaces = () => {
        let arr1 = []
        for (let i = 0; i < tripData.trips.length; i++) {
            const trip = tripData.trips[i];
            if (trip.tripStatus === false) continue;

            let coincidenceFound = false;
            for (const activity of trip.tripInformation.activities) {

                const preferenceMatch = meData.me.preferences.some(preference => preference.preferenceType === activity.activityName);

                if (preferenceMatch) {
                    coincidenceFound = true;
                    break;
                }
            }
            if (coincidenceFound) {
                arr1.push(trip);
            }
        }
        return arr1
    }
    const getTopTrips = () => {
        let aux = tripData.trips.slice();
        for (let i = 0; i < aux.length; i++) {
            for (let j = 0; j < aux.length - 1 - i; j++) {
                if (aux[j].tripRating < aux[j + 1].tripRating) {
                    [aux[j], aux[j + 1]] = [aux[j + 1], aux[j]];
                }
            }
        }
        return aux.slice(0, 4)
    }

    if (meLoading || tripLoading) return (
        <div>
            <Spinner />
            <Spinner />
        </div>
    )
    if (meError || tripError) return (
        <div></div>
    )

    return !meLoading && !meError && !tripLoading && !tripError && (
        <div>
            <TripSlider title={"LUGARES RECOMENDADOS PARA TI"} preferences={getRecomendedPlaces()} />
            <TripSlider title={"TOP VIAJES DE NAAYARI TOURS"} preferences={getTopTrips()} />
        </div>
    )
}

export default TripsSliders
