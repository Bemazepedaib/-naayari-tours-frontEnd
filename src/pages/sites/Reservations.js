import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import { GET_TRIP_PRICES } from '../querys/tripQuerys';
import { useRouter } from 'next/router';
import Styles from '../../styles/Reservations.module.css'

function Reservations() {

    const router = useRouter()
    const {query: {date, selTrip}} = router;
    const { loadingUser, errorUser, dataUser } = useQuery(ME);
    const { loadingTrip, errorTrip, dataTrip } = useQuery(GET_TRIP_PRICES, {variables:{selTrip}}) 
    const [adultNumber, setAdultNumber] = useState(0);
    const [childNumber, setChildNumber] = useState(0);
    const [babyNumber, setBabyNumber] = useState(0);

    if (errorUser) return (<div>{errorUser.message}</div>)
    if (loadingUser) return (<div>Loading...</div>)
    if (errorTrip) return (<div>{errorTrip.message}</div>)
    if (loadingTrip) return (<div>Loading...</div>)

    console.log(selTrip)
    console.log("Data trip " + dataTrip)

    return (
        <div className={Styles.container}>
            <div>
                {/* Reservación para: {selTrip} En la fecha de: {date} Para el usuario: {dataUser.me.name} */}
                {/* Precios: {price[0]} Descuentos: {discount[0]} */}
            </div>
        </div>
    )
}

export default Reservations