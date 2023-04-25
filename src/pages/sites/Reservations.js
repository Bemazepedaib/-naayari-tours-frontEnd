import React, { useState, useRef } from 'react'
import { useQuery } from '@apollo/client';
import Router, { useRouter } from 'next/router';

import { ME } from '../querys/userQuerys';
import { GET_TRIP_PRICES } from '../querys/tripQuerys';

import { Slide } from "react-awesome-reveal";

import Styles from '../../styles/Reservations.module.css'

import HeaderTittle from '../elements/HeaderTittle';
import SelectComponent from '../elements/Select';
import CompanionComponent from '../elements/Companion';
import ModalReservation from '../elements/ModalReservation';
import Footer from './Footer';

function Reservations() {

    const router = useRouter()
    const { query: { selectedDate, selectedTrip } } = router;
    const { loading: userLoading, error: userError, data: userData } = useQuery(ME);
    const { loading: tripLoading, error: tripError, data: tripData } = useQuery(GET_TRIP_PRICES, { variables: { tripName: selectedTrip } });

    const [adultNumber, setAdultNumber] = useState(1);
    const [childNumber, setChildNumber] = useState(0);
    const [babyNumber, setBabyNumber] = useState(0);

    const [observaciones, setObservaciones] = useState("");

    let adult = useRef([]);
    let child = useRef([]);
    let baby = useRef([])

    let precioPasajero = tripData?.trip.tripInformation.price[0].priceAmount
    let precioBebe = tripData?.trip.tripInformation.price[1].priceAmount
    if (tripData?.trip.tripInformation.discount.available) precioPasajero -= tripData?.trip.tripInformation.discount.amount

    if (tripLoading) return (<div>Loading...</div>)
    if (tripError) return (<div>{tripError.message}</div>)

    if (userLoading) return (<div>Loading...</div>)
    if (userError) return (<div>{userError.message}</div>)

    const funcionType = (tipo, objeto) => {
        if (tipo.current === []) { tipo.current = objeto }
        else { tipo.current.push(objeto) }
    }

    const funcionPush = (nombre, telefono, tipo) => {
        const objeto = { companionName: nombre, companionType: tipo, companionCell: telefono }
        switch (tipo) {
            case "adult": if (nombre && telefono) funcionType(adult, objeto); break;
            case "child": if (nombre) funcionType(child, objeto); break;
            case "baby": if (nombre) funcionType(baby, objeto); break;
        }
    }

    const funcionSlice = (tipo, numero) => {
        switch (tipo) {
            case "adult": adult.current = adult.current.slice(0, numero - 1); break;
            case "child": child.current = child.current.slice(0, numero); break;
            case "baby": baby.current = baby.current.slice(0, numero); break;
        }
    }

    return (
        <div>
            <div className={Styles.mainContainer}>
                <div className={Styles.header}><HeaderTittle tittle={"RESERVACIÓN"}></HeaderTittle></div>
                <div className={Styles.contenedorFormulario}>
                    <div className={Styles.titulo}>Participantes</div>
                    <SelectComponent
                        textoLabel={"Adultos " + precioPasajero + "$"} dato={adultNumber}
                        cambiarDato={setAdultNumber} opciones={Array.from({ length: 9 }, (_, i) => i + 1)}
                        funcion={() => { funcionSlice("adult", adultNumber) }}
                    />
                    {adultNumber !== 1 ? [...Array(adultNumber - 1).keys()].map((key) => (
                        <Slide key={key} triggerOnce={true} direction={"down"}>
                            <CompanionComponent tipo={"adult"} funcion={funcionPush} />
                        </Slide>
                    )) : <div />}
                    <SelectComponent
                        textoLabel={"Niños " + precioPasajero + "$"} dato={childNumber}
                        cambiarDato={setChildNumber} opciones={[...Array(10).keys()]}
                        funcion={() => { funcionSlice("child", childNumber) }}
                    />
                    {childNumber !== 0 ? [...Array(childNumber).keys()].map((key) => (
                        <Slide key={key} triggerOnce={true} direction={"down"}>
                            <CompanionComponent tipo={"child"} funcion={funcionPush} />
                        </Slide>
                    )) : <div />}
                    <SelectComponent
                        textoLabel={"Bebés " + precioBebe + "$"} dato={babyNumber}
                        cambiarDato={setBabyNumber} opciones={[...Array(10).keys()]}
                        funcion={() => { funcionSlice("baby", babyNumber) }}
                    />
                    {babyNumber !== 0 ? [...Array(babyNumber).keys()].map((key) => (
                        <Slide key={key} triggerOnce={true} direction={"down"}>
                            <CompanionComponent tipo={"baby"} funcion={funcionPush} />
                        </Slide>
                    )) : <div />}
                    <div className={Styles.titulo}>Observaciones</div>
                    <textarea 
                        className={Styles.textArea} 
                        rows={5} 
                        placeholder='Si quieres comentarnos alguna situación especial, ponlo aquí...'
                        value={observaciones}
                        onChange={e => setObservaciones(e.target.value)}
                        onBlur={e => setObservaciones(e.target.value)}>
                    </textarea>
                </div>
                <div className={Styles.centerButton}>
                    <ModalReservation
                        datosCompanion={new Array(adult, child, baby)}
                        datosUsuario={new Array(userData, selectedDate, selectedTrip, observaciones)}
                        datosPrecio={new Array(
                            { type: "Adulto", number: adultNumber, price: precioPasajero },
                            { type: "Niño", number: childNumber, price: precioPasajero },
                            { type: "Bebé", number: babyNumber, price: precioBebe }
                        )}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Reservations