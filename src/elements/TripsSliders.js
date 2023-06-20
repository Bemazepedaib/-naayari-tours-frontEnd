import React from 'react'
import TripSlider from './TripSlider';
import { ME } from '../backendOperations/querys/userQuerys';
import { GET_TRIPS } from '../backendOperations/querys/tripQuerys';
import { useQuery } from '@apollo/client';

const TripsSliders = () => {
    const { loading: meLoading, error: meError, data: meData } = useQuery(ME);
    const { loading: tripLoading, error: tripError, data: tripData } = useQuery(GET_TRIPS);
    const getGoodTrips = () => {
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
    };
    return !meLoading && !meError && !tripLoading && !tripError && (
        <div>
            <TripSlider title={"LUGARES RECOMENDADOS PARA TI"} preferences={getGoodTrips()} />
            <TripSlider title={"TOP VIAJES DE NAYARI TOURS"} preferences={getGoodTrips()}/>
            <TripSlider title={"LUGARES RECOMENDADOS PARA TI"} preferences={getGoodTrips()}/>
        </div>
    )
}

export default TripsSliders
