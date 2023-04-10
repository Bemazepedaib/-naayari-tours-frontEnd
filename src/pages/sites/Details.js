import React from "react";
import Styles from '../../styles/Details.module.css'
import { useRouter } from "next/router";
import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faTags } from '@fortawesome/free-solid-svg-icons'
import FormTripDate from "../elements/FormTripDate";
import Gallery from "../elements/Gallery";
import DetailActivities from "../elements/DetailActivities";

const Detalles = ({ trip }) => {

    console.log(trip)
    const link = "https://drive.google.com/uc?export=view&id="
    const back = link + trip.trip.tripInformation.photo;




    return (
        <div>
            <div className={Styles.principal} style={{ backgroundImage: "url(" + back + ")" }}>
                <div className={Styles.gradient}>
                    <title>Tour</title>
                    <div className={Styles.container}>

                        <div className={Styles.info}>
                            <div className={Styles.tourTitle}>{trip.trip.name}</div>
                            <div className={Styles.tourDetail}>
                                <div className={Styles.tourInfo}>
                                    <label className={Styles.labelTitle}>Fecha
                                        <i className={Styles.icons}><FontAwesomeIcon icon={faCalendarDays} /></i></label>
                                    <span className={Styles.span}>Marzo 18 Marzo</span>
                                </div>
                                <div className={Styles.tourInfo}>
                                    <label className={Styles.labelTitle}>Tiempo Aproximado
                                        <i className={Styles.icons}><FontAwesomeIcon icon={faClock} /></i></label>
                                    <span className={Styles.span}>10 horas</span>
                                </div>
                                <div className={Styles.tourInfo}>
                                    <label className={Styles.labelTitle}>Categorias
                                        <i className={Styles.icons}><FontAwesomeIcon icon={faTags} /></i></label>
                                    <span className={Styles.span}>Agua / Extremo / Naturaleza</span>
                                </div>
                            </div>
                            <FormTripDate props={trip.trip.tripInformation.date}/>
                            <div className={Styles.tourDescription}>
                                {trip.trip.tripInformation.description}
                            </div>
                            <div className={Styles.tourActivities}>
                                <div className={Styles.header}>Actividades</div>
                                <div >
                                    <DetailActivities act={trip.trip.tripInformation.activities}></DetailActivities>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Gallery/>
            </div>
        </div>
    )
}

export default Detalles;