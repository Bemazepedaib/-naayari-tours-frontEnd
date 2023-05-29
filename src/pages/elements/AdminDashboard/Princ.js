import React from 'react'
import Styles from '../../../styles/elementStyles/Princ.module.css';
import Lines from './LineChart';
import Bars from './BarChart';
import Pies from './PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPlane, faCompass, faInbox, faUsd } from '@fortawesome/free-solid-svg-icons'

import { Spinner } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { GET_USERS, ME } from '../../querys/userQuerys';
import { GET_TRIPS } from 'naayari-tours/pages/querys/tripQuerys';
import { GET_EVENTS } from 'naayari-tours/pages/querys/eventQuerys';
import { useState } from 'react';

function Princ() {

    const { loading: meLoading, error: meError, data: meData } = useQuery(ME);
    const { loading: usersLoading, error: usersError, data: usersData } = useQuery(GET_USERS)
    const { loading: tripsLoading, error: tripsError, data: tripsData } = useQuery(GET_TRIPS)
    const { loading: eventLoading, error: eventError, data: eventData } = useQuery(GET_EVENTS)

    let users = 0;
    const trips = tripsData?.trips.length;
    const events = eventData?.events.length;
    let reservations = 0;
    let usersLevels = [0, 0, 0, 0]
    let usersReference = [0, 0, 0, 0]
    let tripsWithReservations = []
    let tripsRating = []
    let tripsOfTheMonth = []

    const fechaHoy = new Date(Date.now()).toISOString().split("T")[0].split("-").reverse()
    const [month, setMonth] = useState(fechaHoy[1])
    const [year, setYear] = useState(fechaHoy[2])

    const months =
        [
            { value: "01", text: "Enero" },
            { value: "02", text: "Febrero" },
            { value: "03", text: "Marzo" },
            { value: "04", text: "Abril" },
            { value: "05", text: "Mayo" },
            { value: "06", text: "Junio" },
            { value: "07", text: "Julio" },
            { value: "08", text: "Agosto" },
            { value: "09", text: "Septiembre" },
            { value: "10", text: "Octubre" },
            { value: "11", text: "Noviembre" },
            { value: "12", text: "Diciembre" }
        ]

    const years = 
    [
        { value: "2022", text: "2022"},
        { value: "2023", text: "2023"},
        { value: "2024", text: "2024"},
        { value: "2025", text: "2025"},
        { value: "2026", text: "2026"},
    ]

    const fillUsers = () => {
        usersData.users.map(user => {
            if (user.userType !== 'client') return
            users++
        })
    }

    const fillReservations = () => {
        eventData.events.map(event => {
            reservations += event.users.length
        })
    }

    const fillUsersReference = () => {
        usersData.users.map(user => {
            if (user.userType === 'client') {
                switch (user.reference) {
                    case 'a friend':
                        usersReference[0] += 1;
                        break;
                    case 'an ad':
                        usersReference[1] += 1;
                        break;
                    case 'facebook':
                        usersReference[2] += 1;
                        break;
                    case 'none':
                        usersReference[3] += 1;
                        break;
                }
            }
        })
        usersReference.sort((a, b) => { return b - a; })
    }

    const fillUsersLevel = () => {
        usersData.users.map(user => {
            if (user.userType === 'client') {
                switch (user.userLevel) {
                    case '0':
                        usersLevels[0] += 1;
                        break;
                    case '1':
                        usersLevels[1] += 1;
                        break;
                    case '2':
                        usersLevels[2] += 1;
                        break;
                    case '3':
                        usersLevels[3] += 1;
                        break;
                }
            }
        })
        usersLevels.sort((a, b) => { return b - a; })
    }

    const fillTripsWithReservations = () => {
        eventData.events.map(event => {
            const i = tripsWithReservations.findIndex(item => item.tripName === event.eventTrip)
            if (i > -1) {
                tripsWithReservations[i].tripReservations += event.users.length;
            } else {
                tripsWithReservations.push({
                    tripName: event.eventTrip,
                    tripReservations: event.users.length
                })
            }
        })
        tripsWithReservations.sort((a, b) => { return b.tripReservations - a.tripReservations; })
    }

    const fillTripsOfTheMonth = () => {
        eventData.events.map(event => {
            const fechaViaje = event.eventDate.split("/")
            if (fechaViaje[1] === month && fechaViaje[2] === year) {
                const i = tripsOfTheMonth.findIndex(item => item.tripName === event.eventTrip)
                if (i > -1) {
                    tripsOfTheMonth[i].tripReservations += event.users.length;
                } else {
                    tripsOfTheMonth.push({
                        tripName: event.eventTrip,
                        tripReservations: event.users.length
                    })
                }
            }
        })
        tripsOfTheMonth.sort((a, b) => { return b.tripReservations - a.tripReservations; })
    }

    const fillTripsRating = () => {
        tripsRating = tripsData.trips.map(({ __typename, tripInformation, tripStatus, ...rest }) => { return rest })
        tripsRating.sort((a, b) => { return b.tripRating - a.tripRating; })
    }

    if (meLoading || usersLoading) return (<div className={Styles.error}><Spinner /></div>)
    if (meError || usersError) return (<div className={Styles.error}>Inicie sesión para continuar</div>)
    if (meData.me.userType !== "admin") return (<div className={Styles.error}>Necesitas permisos de administrador para acceder a este módulo</div>)

    return (!meLoading && !usersLoading && !tripsLoading && !eventLoading && !meError && !usersError && !tripsError && !eventError &&
        <main className={Styles.mainAdmin}>
            {fillUsersLevel()}
            {fillUsersReference()}
            {fillTripsWithReservations()}
            {fillTripsRating()}
            {fillTripsOfTheMonth()}
            <div className={Styles.mainContainerAdmin}>
                <div className={Styles.mainTitleAdmin}>
                    <div className={Styles.mainGreeting}>
                        Bienvenido Naayari
                    </div>
                </div>
                <div className={Styles.mainCardsAdmin}>
                    <div className={Styles.cardAdmin}>
                        <div className={Styles.cardInner}>
                            <FontAwesomeIcon icon={faUser} className={Styles.textLightblue} />
                            <div className={Styles.textPrimaryP}>Naayaros</div>
                            <div className={Styles.numbers}>{fillUsers()} {users}</div>
                        </div>
                    </div>
                    <div className={Styles.cardAdmin}>
                        <div className={Styles.cardInner}>
                            <FontAwesomeIcon icon={faPlane} className={Styles.textRed} />
                            <div className={Styles.textPrimaryP}>Destinos</div>
                            <div className={Styles.numbers}>{trips}</div>
                        </div>
                    </div>
                    <div className={Styles.cardAdmin}>
                        <div className={Styles.cardInner}>
                            <FontAwesomeIcon icon={faCompass} className={Styles.textYellow} />
                            <div className={Styles.textPrimaryP}>Viajes realizados</div>
                            <div className={Styles.numbers}>{events}</div>
                        </div>
                    </div>
                    <div className={Styles.cardAdmin}>
                        <div className={Styles.cardInner}>
                            <FontAwesomeIcon icon={faInbox} className={Styles.textGreen} />
                            <div className={Styles.textPrimaryP}>Reservaciones</div>
                            <div className={Styles.numbers}>{fillReservations()} {reservations}</div>
                        </div>
                    </div>
                </div>
                <div className={Styles.charts}>
                    <div className={Styles.chart}>
                        <div className={Styles.chartsTitle}>Nivel de usuarios</div>
                        <Pies
                            mylabels={['Básicos', 'Novatos', 'Experimentados', 'Veteranos']}
                            mydata={usersLevels}
                            label={"Naayaros"}
                        />
                    </div>
                    <div className={Styles.chart}>
                        <div className={Styles.chartsTitle}>¿Cómo nos conoce?</div>
                        <Pies
                            mylabels={['Conocidos', 'Anuncios', 'Facebook', 'Ninguno']}
                            mydata={usersReference}
                            label={"Cantidad"}
                        />
                    </div>
                    <div className={Styles.chart}>
                        <div className={Styles.chartsTitle}>Viajes con más reservaciones</div>
                        <Pies
                            mylabels={tripsWithReservations.slice(0, 5).map(trip => { return trip.tripName })}
                            mydata={tripsWithReservations.slice(0, 5).map(trip => { return trip.tripReservations })}
                            label={"Reservaciones"}
                        />
                    </div>
                    <div className={Styles.chart}>
                        <div className={Styles.chartsTitle}>Viajes con mejor calificación</div>
                        <Pies
                            mylabels={tripsRating.slice(0, 5).map(trip => { return trip.tripName })}
                            mydata={tripsRating.slice(0, 5).map(trip => { return trip.tripRating })}
                            label={"Calificación"}
                        />
                    </div>
                    <div className={Styles.chart}>
                        <div className={Styles.chartsTitle}>Viajes del mes</div>
                        <Pies
                            mylabels={tripsOfTheMonth.slice(0, 5).map(trip => { return trip.tripName })}
                            mydata={tripsOfTheMonth.slice(0, 5).map(trip => { return trip.tripReservations })}
                            label={"Reservaciones"}
                        />
                        <select
                            value={month}
                            onChange={e => { setMonth(e.target.value) }}
                            onBlur={e => { setMonth(e.target.value) }}
                            className={Styles.comboBox}
                        >
                            {months.map(month => (
                                <option key={month.value} value={month.value}> {month.text} </option>
                            ))}
                        </select>
                        <select
                            value={year}
                            onChange={e => { setYear(e.target.value) }}
                            onBlur={e => { setYear(e.target.value) }}
                            className={Styles.comboBox}
                        >
                            {years.map(year => (
                                <option key={year.value} value={year.value}> {year.text} </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Princ;