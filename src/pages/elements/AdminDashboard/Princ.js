import React from 'react'
import Styles from '../../../styles/elementStyles/Princ.module.css';
import Lines from './LineChart';
import Bars from './BarChart';
import Pies from './PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faPlane, faCompass, faInbox, faUsd } from '@fortawesome/free-solid-svg-icons'

import { useQuery } from '@apollo/client';
import { ME } from '../../querys/userQuerys';
import { Spinner } from 'react-bootstrap';

function Princ() {

    const { loading: meLoading, error: meError, data: meData } = useQuery(ME);

    const users = 578;
    const trips = 2467;
    const events = 340;
    const reservations = 645;

    if (meLoading) return (<div className={Styles.error}><Spinner /></div>)
    if (meError) return (<div className={Styles.error}>Inicie sesión para continuar</div>)
    if (meData.me.userType !== "admin") return (<div className={Styles.error}>Necesitas permisos de administrador para acceder a este módulo</div>)

    return (
        <main className={Styles.mainAdmin}>
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
                            <div className={Styles.numbers}>578</div>
                        </div>
                    </div>
                    <div className={Styles.cardAdmin}>
                        <div className={Styles.cardInner}>
                            <FontAwesomeIcon icon={faPlane} className={Styles.textRed} />
                            <div className={Styles.textPrimaryP}>Viajes</div>
                            <div className={Styles.numbers}> 2467</div>
                        </div>
                    </div>
                    <div className={Styles.cardAdmin}>
                        <div className={Styles.cardInner}>
                            <FontAwesomeIcon icon={faCompass} className={Styles.textYellow} />
                            <div className={Styles.textPrimaryP}>Viajes realizados</div>
                            <div className={Styles.numbers}>340</div>
                        </div>
                    </div>
                    <div className={Styles.cardAdmin}>
                        <div className={Styles.cardInner}>
                            <FontAwesomeIcon icon={faInbox} className={Styles.textGreen} />
                            <div className={Styles.textPrimaryP}>Reservaciones</div>
                            <div className={Styles.numbers}>645</div>
                        </div>
                    </div>
                </div>
                <div className={Styles.charts}>
                    <div className={Styles.chartsTitle}>Estadísticas mensuales</div>
                    <div className={Styles.chartPrins}>
                        <Lines
                            title="Meses"
                            mylabels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
                            mydata={[0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60]}
                        />
                        <Bars
                            title="Meses"
                            mylabels={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
                            mydata={[0, 56, 20, 36, 80, 40, 30, -20, 25, 30, 12, 60]}
                        />
                        <Pies
                            title="Popularidad en Navidad"
                            mylabels={["Carne", "Jamón", "Dulces", "Turrón", "Vino"]}
                            mydata={[35, 20, 20, 15, 10]}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Princ;