import React from "react";
import Styles from '../../styles/Details.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock, faTags } from '@fortawesome/free-solid-svg-icons'
import FormTripDate from "../elements/FormTripDate";
import Gallery from "../elements/Gallery";
import DetailActivities from "../elements/DetailActivities";

const Detalles = ({ trip }) => {

    const link = "https://drive.google.com/uc?export=view&id="
    const back = link + trip.trip.tripInformation.photo;

    return (
        <div>
            <div className={Styles.principal} style={{ backgroundImage: "url(" + back + ")" }}>
                <div className={Styles.gradient}>
                    <title>Tour</title>
                    <div className={Styles.container}>
                        <div className={Styles.info}>
                            <div className={Styles.tourTitle}>{trip.trip.tripName}</div>
                            <div className={Styles.tourDetail}>

                                <div className={Styles.tourInfo}>
                                    <label className={Styles.labelTitle}>Tiempo Aproximado
                                        <i className={Styles.icons}><FontAwesomeIcon icon={faClock} /></i></label>
                                    <span className={Styles.span}>{trip.trip.tripInformation.duration}</span>
                                </div>
                                <div className={Styles.tourInfo}>
                                    <label className={Styles.labelTitle}>Categorias
                                        <i className={Styles.icons}><FontAwesomeIcon icon={faTags} /></i></label>
                                        <div className={Styles.tourActivities}>
                                            <DetailActivities act={trip.trip.tripInformation.activities}></DetailActivities>
                                        </div>
                                </div>
                            </div>
                            <FormTripDate 
                                dates={trip.trip.tripInformation.date} 
                                selectedTrip={trip.trip.tripName}
                                />
                            <div className={Styles.tourDescription}>
                                {trip.trip.tripInformation.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Gallery tripReviews = {trip.trip.tripReview}/>
            </div>
        </div>
    )
}

export default Detalles;