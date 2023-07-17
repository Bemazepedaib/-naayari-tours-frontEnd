import React from "react";
import Styles from '../styles/Catalogue.module.css'
import Router from "next/router";
import CataloguePrices from "../elements/CataloguePrices"


function Catalogue({ trip }) {
    const photo = trip && trip.tripInformation.photo;
    var back = photo
    const disc = trip && trip.tripInformation.discount.available;
    const link = "https://drive.google.com/uc?export=view&id=";
    var stars = "";
    var tok = 0;

    function clickViajes() {
        const name = trip && trip.tripName;
        Router.push({
            pathname: '/DetailCard',
            query: { name }
        })
    }
    if (trip) { for (let index = 1; index <= Math.round(trip.tripRating); index++) stars = stars + "⋆"; }
    return trip && (
        <section className={Styles.popularSectionContainer} onClick={clickViajes}>
            <div className={Styles.secContainer} >
                <div className={Styles.mainContentGrid}>
                    <div className={Styles.singleDestination}>
                        <div className={Styles.destImage}>
                            <img height={1000}
                                width={1000} className={Styles.img} src={link + back} alt="Imagen tour" />
                            <div className={Styles.overlayTitle}>
                                {
                                    disc === true ?
                                        [<div key={tok++} className={Styles.card}><p className={Styles.p}>En descuento!!</p></div>] : ""
                                }
                                <h3 className={Styles.title}>{trip.tripName}</h3>
                            </div>
                            <div className={Styles.overlayInfo}>
                                <h3 className={Styles.title}>{trip.tripName}</h3>
                                <p className={Styles.catpd}>
                                    {trip.tripInformation.description.slice(0, 200)}...
                                </p>

                            </div>
                        </div>
                        <div className={Styles.destFooter}>
                            <div className={Styles.destFooterContenedor}>
                                <div className={Styles.lugar}>{trip.tripInformation.place}</div>
                                <div className={Styles.StarsContainer}>
                                    <div className={Styles.starsNumber}>{trip && trip.tripRating.toFixed(1)}</div>
                                    <div className={Styles.stars}>{stars}</div>
                                </div>
                            </div>
                            <hr className={Styles.hr}></hr>
                            <div className={Styles.Prices}>
                                <CataloguePrices trip={trip.tripInformation} />
                            </div>
                            <hr className={Styles.hr}></hr>
                            <div className={Styles.contActivities}>{trip.tripInformation.activities.map(t => (<p key={t.activityName} className={Styles.activity}>{t.activityName}</p>))}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Catalogue;