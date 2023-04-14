import React, { useState } from 'react'
import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import { GET_TRIP_PRICES } from '../querys/tripQuerys';
import { useRouter } from 'next/router';
import Styles from '../../styles/Reservations.module.css'

import HeaderTittle from '../elements/HeaderTittle';
import SelectComponent from '../elements/Select';
import CompanionComponent from '../elements/Companion';

function Reservations() {

    const router = useRouter()
    const { query: { selectedDate, selectedTrip } } = router;
    const [adultNumber, setAdultNumber] = useState(1);
    const [childNumber, setChildNumber] = useState(0);
    const [babyNumber, setBabyNumber] = useState(0);
    const [total, setTotal] = useState(0);
    const adulto = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const niño = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const bebe = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const [acompa, setAcompa] = useState("");

    const { loading: userLoading, error: userError, data: userData } = useQuery(ME);
    const { loading: tripLoading, error: tripError, data: tripData } = useQuery(GET_TRIP_PRICES, { variables: { tripName: selectedTrip } });
    if (userLoading) return (<div>Loading...</div>)
    if (userError) return (<div>{userError.message}</div>)
    if (tripLoading) return (<div>Loading...</div>)
    if (tripError) return (<div>{tripError.message}</div>)
    let precioAdulto = tripData.trip.tripInformation.price[0].priceAmount
    let precioNinio = tripData.trip.tripInformation.price[1].priceAmount
    let precioBebe = tripData.trip.tripInformation.price[2].priceAmount
    if (tripData.trip.tripInformation.discount.available) precioAdulto -= tripData.trip.tripInformation.discount.amount

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.header}><HeaderTittle tittle={"RESERVACIÓN"}></HeaderTittle></div>
            <div className={Styles.contenedorFormulario}>
                <div className={Styles.titulo}>Participantes</div>
                <SelectComponent
                    textoLabel={"Adultos " + precioAdulto + "$"} dato={adultNumber}
                    cambiarDato={setAdultNumber} opciones={adulto}
                />
                {console.log(adultNumber)}
                {adultNumber !== 1 ? [...Array(adultNumber).keys()].map((key) => (
                    <CompanionComponent
                        key={key}
                        dato={acompa}
                        cambiarDato={setAcompa}
                        tipo={"adult"}
                    />
                )) : <div/> }
                {console.log(new Array(adultNumber))}
                <SelectComponent
                    textoLabel={"Niños " + precioNinio + "$"} dato={childNumber}
                    cambiarDato={setChildNumber} opciones={niño}
                />
                <SelectComponent
                    textoLabel={"Bebés " + precioBebe + "$"} dato={babyNumber}
                    cambiarDato={setBabyNumber} opciones={bebe}
                />
                <div className={Styles.titulo}>Observaciones</div>
                <textarea
                    className={Styles.textArea}
                    rows={5}
                ></textarea>
            </div>
            <div className={Styles.contenedorDatos}>
                <div className={Styles.titulo}>
                    Usuario que reserva: <div className={Styles.dato}>{userData.me.name}</div>
                    Fecha que se reserva: <div className={Styles.dato}>{selectedDate}</div>
                    Viaje que se reserva: <div className={Styles.dato}>{selectedTrip}</div>
                    Total: <div className={Styles.dato}>${total}</div>
                </div>
            </div>
        </div>
    )
}

export default Reservations