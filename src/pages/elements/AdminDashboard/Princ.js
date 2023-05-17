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
        console.log(usersLevels)
    }

    if (meLoading || usersLoading) return (<div className={Styles.error}><Spinner /></div>)
    if (meError || usersError) return (<div className={Styles.error}>Inicie sesión para continuar</div>)
    if (meData.me.userType !== "admin") return (<div className={Styles.error}>Necesitas permisos de administrador para acceder a este módulo</div>)

    return (!meLoading && !usersLoading && !tripsLoading && !eventLoading && !meError && !usersError && !tripsError && !eventError &&
        <main className={Styles.mainAdmin}>
            {fillUsersLevel()}
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
                            <div className={Styles.textPrimaryP}>Viajes</div>
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
                    <div className={Styles.chartsTitle}>Estadísticas mensuales</div>
                    <Bars
                        title="Nivel de usuarios"
                        mylabels={['Naayaros Básicos', 'Naayaros Novatos', 'Naayaros Experimentados', 'Naayaros Veteranos']}
                        mydata={usersLevels}
                        max={users + 1}
                        label={"Naayaros"}
                    />
                    {/* <Lines
                            title="Meses"
                            mylabels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
                            mydata={[0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60]}
                        />

                        <Pies
                            title="Popularidad en Navidad"
                            mylabels={["Carne", "Jamón", "Dulces", "Turrón", "Vino"]}
                            mydata={[35, 20, 20, 15, 10]}
                        /> */}

                </div>
            </div>
        </main>
    )
}

export default Princ;