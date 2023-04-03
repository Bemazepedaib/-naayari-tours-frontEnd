import React from "react";
import Styles from '../../styles/Catalogue.module.css'
import Image from "next/image";
import Link from 'next/link';
import Router from "next/router";


function Catalogue({ trip }) {

    
const name =trip.tripName;
const photo=trip.tripInformation.photo;
const desc= trip.tripInformation.description;
var back = photo
const disc = trip.tripInformation.discount.available;
const discAmount = trip.tripInformation.discount.amount;
const link = "https://drive.google.com/uc?export=view&id=";
var keyp = 0;
var stars = "";
var tok = 0;

console.log(discAmount);

    function clickViajes() {
        Router.push({
            pathname: '/sites/Details',
            query: {
                    name,
                    photo,
                    desc
            }
        })

    }


    {
        for (let index = 1; index <= trip.tripRating; index++) {
            stars = stars + "⋆";
        }

    }
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
                                        {trip.tripInformation.description}
                                    </p>

                                </div>
                            </div>
                            <div id={Styles.destFooter}>
                                <div className={Styles.destFooterContenedor}>
                                    <p className={Styles.lugar}>{trip.tripInformation.place}</p>
                                    <p className={Styles.tiempo}>Aproximadamente 8 hrs.</p>
                                    <div className={Styles.StarsContainer}>
                                        <p className={Styles.starsNumber}>{trip.tripRating + ".0 "}</p>
                                        <p className={Styles.stars}>{stars}</p>
                                    </div>
                                </div>
                                <hr className={Styles.hr}></hr>
                                <div className={Styles.Prices}>
                                    <div className={Styles.precios}>
                                        {disc === true ? trip.tripInformation.price.map(p => (
                                            <p className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</p>
                                        )) : <p />
                                        }
                                    </div>
                                    <div className={Styles.descuentosPrecios}>
                                        {disc === true ? trip.tripInformation.price.map(p => (
                                            <p className={Styles.catp} key={keyp++}>{p.priceType} ${Math.round(p.priceAmount - discAmount)}</p>
                                        )) : trip.tripInformation.price.map(p => (
                                            <p className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</p>
                                        ))}

                                    </div>
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