import React from 'react'
import Styles from '../../../styles/elementStyles/Princ.module.css';
import Lines from './LineChart';
import Bars from './BarChart';
import Pies from './PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendar, faVideoCamera, faThumbsUp, faUsd } from '@fortawesome/free-solid-svg-icons'

import { useQuery } from '@apollo/client';
import { ME } from '../../querys/userQuerys';
import { Spinner } from 'react-bootstrap';

function Princ() {

    const { loading: meLoading, error: meError, data: meData } = useQuery(ME);

    if (meLoading) return (<div className={Styles.error}><Spinner /></div>)
    if (meError) return (<div className={Styles.error}>Inicie sesión para continuar</div>)
    if (meData.me.userType !== "admin") return (<div className={Styles.error}>Necesitas permisos de administrador para acceder a este módulo</div>)

    return (
        <main className={Styles.mainAdmin}>
            <div className={Styles.mainContainerAdmin}>
                <div className={Styles.mainTitleAdmin}>
                    <div className={Styles.mainGreeting}>
                        <h1>Hello Naayari</h1>
                        <p>Welcome to you admin dashboard</p>
                    </div>
                </div>

                <div className={Styles.mainCardsAdmin}>
                    <div className={Styles.cardAdmin}>
                        <i className={Styles.textLightblue}><FontAwesomeIcon icon={faUser} /></i>
                        <div className={Styles.cardInner}>
                            <p className={`${Styles.textPrimaryP}`}>Number of suscribers</p>
                            <span className={`${Styles.fontBold} ${Styles.textTitle} ${Styles.spanNumbers}`}>578</span>
                        </div>
                    </div>

                    <div className={Styles.cardAdmin}>
                        <i className={Styles.textRed}><FontAwesomeIcon icon={faCalendar} /></i>
                        <div className={Styles.cardInner}>
                            <p className={Styles.textPrimaryP}> Times of Watching</p>
                            <span className={`${Styles.fontBold} ${Styles.textTitle} ${Styles.spanNumbers}`}> 2467</span>
                        </div>
                    </div>

                    <div className={Styles.cardAdmin}>
                        <i className={Styles.textYellow}><FontAwesomeIcon icon={faVideoCamera} /></i>
                        <div className={Styles.cardInner}>
                            <p className={Styles.textPrimaryP}>Number of Videos</p>
                            <span className={`${Styles.fontBold} ${Styles.textTitle} ${Styles.spanNumbers}`}>340</span>
                        </div>
                    </div>

                    <div className={Styles.cardAdmin}>
                        <i className={Styles.textGreen}><FontAwesomeIcon icon={faThumbsUp} /></i>
                        <div className={Styles.cardInner}>
                            <p className={Styles.textPrimaryP}>Number of Likes</p>
                            <span className={`${Styles.fontBold} ${Styles.textTitle} ${Styles.spanNumbers}`}>645</span>
                        </div>
                    </div>
                </div>

                <div className={Styles.charts}>
                    <div className={Styles.chartsLeft}>
                        <div className={Styles.chartsLeftTitle}>
                            <div>
                                <h1>Daily Reports</h1>
                                <p >Cupertino, California, USA</p>
                            </div>
                            <i><FontAwesomeIcon icon={faUsd} /></i>
                        </div>
                        <div className={Styles.chartPrins}>
                            <Lines 
                                title="Meses" 
                                mylabels ={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
                                mydata ={[0,56,20,36,80,40,30,-20,25,30,12,60]}
                            />
                            <Bars
                                title="Meses" 
                                mylabels ={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
                                mydata ={[0,56,20,36,80,40,30,-20,25,30,12,60]}
                            />
                            <Pies
                                title="Popularidad en Navidad"
                                mylabels ={["Carne","Jamón","Dulces","Turrón","Vino"]}
                                mydata ={[35,20,20,15,10]}
                            />
                        </div>
                    </div>

                    <div className={Styles.chartsRight}>
                        <div className={Styles.chartsRightTitle}>
                            <div>
                                <h1 className={Styles.CRh1}>Stats Reports</h1>
                                <p className={`${Styles.Stats} ${Styles.CRp}`}>Cupertino, California, USA</p>
                            </div>
                            <i><FontAwesomeIcon icon={faUsd} /></i>
                        </div>
                        <div className={Styles.chartsRightCards}>
                            <div className={Styles.PrinsCard1}>
                                <h1 className={Styles.crh1}>Income</h1>
                                <p className={Styles.PrinsIncome}>$75,300</p>
                            </div>
                            <div className={Styles.PrinsCard2}>
                                <h1 className={Styles.crh1}>Sales</h1>
                                <p className={Styles.PrinsSales}>$124,200</p>
                            </div>
                            <div className={Styles.PrinsCard3}>
                                <h1 className={Styles.crh1}>Users</h1>
                                <p className={Styles.PrinsUsers}>3900</p>
                            </div>
                            <div className={Styles.PrinsCard4}>
                                <h1 className={Styles.crh1}>Orders</h1>
                                <p className={Styles.PrinsOrders}>1881</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Princ;