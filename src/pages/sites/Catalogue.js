import React from "react";
import Styles from '../../styles/Catalogue.module.css'
import Image from "next/image";
import Link from 'next/link';
import Router from "next/router";
import DetailCard from "../elements/DetailCard";
import CataloguePrices from "../elements/CataloguePrices"


function Catalogue({ trip }) {

    const photo = trip.tripInformation.photo;
    var back = photo
    const disc = trip.tripInformation.discount.available;
    const link = "https://drive.google.com/uc?export=view&id=";
    var stars = "";
    var tok = 0;

console.log(trip)
    function clickViajes() {
        const name = trip.tripName;
        Router.push({
            pathname: 'elements/DetailCard',
            query: { name }
        }, 'elements/DetailCard')
    }
    { for (let index = 1; index <= trip.tripRating; index++) stars = stars + "⋆"; }
    return (
        <div>
            <section className={Styles.popularSectionContainer} onClick={clickViajes}>
                <div className={Styles.secContainer} >
                    <div className={Styles.mainContentGrid}>
                        <div className={Styles.singleDestination}>
                            <div className={Styles.destImage}>
                                <Image height={1000}
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
                                        {trip.tripInformation.description.slice(0,200)}...
                                    </p>

                                </div>
                            </div>
                            <div id={Styles.destFooter}>
                                <div className={Styles.destFooterContenedor}>
                                    <p className={Styles.lugar}>{trip.tripInformation.place}</p>
                                    <div className={Styles.StarsContainer}>
                                        <p className={Styles.starsNumber}>{trip.tripRating + ".0 "}</p>
                                        <p className={Styles.stars}>{stars}</p>
                                    </div>
                                </div>
                                <hr className={Styles.hr}></hr>
                                <div className={Styles.Prices}>
                                    <CataloguePrices trip={trip.tripInformation} />
                                </div>
                                <hr className={Styles.hr}></hr>
                                TAGS
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}


export default Catalogue;