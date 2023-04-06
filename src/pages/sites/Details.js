import React from "react";
import Styles from '../../styles/Details.module.css'
import { useRouter } from "next/router";
import Image from "next/image";
import FormTripDate from "../elements/FormTripDate";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faTags } from '@fortawesome/free-solid-svg-icons'

const Detalles = ({trip}) => {

    console.log(trip)
    const link="https://drive.google.com/uc?export=view&id="
    const back=link+trip.trip.tripInformation.photo;
    var tirolesa = "1EAP23WphKNrZnEZz2kLm1g51DHaZ4PUg";
    var tiro = "1xdUNPdRPW-99dalM7wgirY-Ea6pP103P";
    var guia = "17YdPzvN4BuYbSpjA5wJxDWq2TyYbO23E";
    var balneario = "1k_iWaV2734lgOYvmh9CEm-o5B43rtdRw";



    return (
        <div className={Styles.principal} style={{backgroundImage:"url("+back+")"}}>
            <div className={Styles.gradient}>
                <title>Tour</title>
                <div className={Styles.container}>

                    <div className={Styles.info}>
                        <div className={Styles.tourTitle}>{trip.trip.name}</div>
                        <div className={Styles.tourDetail}>
                            <div className={Styles.tourInfo}>
                                <label className={Styles.labelTitle}>Fecha 
                                <i className={Styles.icons}><FontAwesomeIcon icon={faCalendarDays}/></i></label>
                                <span className={Styles.span}>Marzo 18 Marzo</span>
                            </div>
                            <div className={Styles.tourInfo}>
                                <label className={Styles.labelTitle}>Tiempo Aproximado 
                                <i className={Styles.icons}><FontAwesomeIcon icon={faClock}/></i></label>
                                <span className={Styles.span}>10 horas</span>
                            </div>
                            <div className={Styles.tourInfo}>
                                <label className={Styles.labelTitle}>Categorias 
                                <i className={Styles.icons}><FontAwesomeIcon icon={faTags}/></i></label>
                                <span className={Styles.span}>Agua / Extremo / Naturaleza</span>
                            </div>
                        </div>
                        <FormTripDate props={trip.trip.tripInformation.date}/>
                        <div className={Styles.tourDescription}>
                            {trip.trip.tripInformation.description}
                        </div>
                        <div className={Styles.tourActivities}>
                            <div className={Styles.header}>Actividades</div>
                            <div className={Styles.list}>
                                <div className={Styles.activities}>
                                <Image height={1000}
                                    width={1000} className={Styles.img} src={link + tirolesa} alt="" />
                                    <label className={Styles.label}>Tirolesa</label>
                                </div>
                                <div className={Styles.activities}>
                                <Image height={1000}
                                    width={1000} className={Styles.img} src={link + tiro} alt="" />
                                    <label className={Styles.label}>Tiro al blanco</label>
                                </div>
                                <div className={Styles.activities}>
                                <Image height={1000}
                                    width={1000} className={Styles.img} src={link + guia} alt="" />
                                    <label className={Styles.label}>Guias especializados</label>
                                </div>
                                <div className={Styles.activities}>
                                <Image height={1000}
                                    width={1000} className={Styles.img} src={link + balneario} alt="" />
                                    <label className={Styles.label}>Balneario</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalles;