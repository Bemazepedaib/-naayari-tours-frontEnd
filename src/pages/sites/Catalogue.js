import React from "react";
import Styles from '../../styles/Catalogue.module.css'


function Catalogue({ trip }) {

    function clickViajes() {
        console.log(trip.tripName)
    }

    var tok = 0;
    const link = "https://drive.google.com/uc?export=view&id="
    var back = trip.tripInformation.photo
    var keyp = 0;
    var stars = "";
    var disc = trip.tripInformation.discount.available;
    var discAmount = trip.tripInformation.discount.amount;
    console.log(discAmount);
    {
        for (let index = 1; index <= trip.tripRating; index++) {
            stars = stars + "⋆";

        }

    }
    return (
        <div>
            <section className={Styles.popular - section - container} onClick={clickViajes}>
                <div className={Styles.secContainer} >
                    <div className={Styles.mainContent - grid}>
                        <div className={Styles.singleDestination}>
                            <div className={Styles.destImage}>
                                <Image className={Styles.img} src={link + back} alt="Imagen tour" />
                                <div className={Styles.overlayTitle}>
                                    {
                                        disc === true ?
                                            [<div key={tok++} className={Styles.card}><p>En descuento!!</p></div>] : ""
                                    }
                                    <h3 className={Styles.title}>{trip.tripName}</h3>
                                </div>
                                <div className={Styles.overlayInfo}>
                                    <h3 className={Styles.title}>{trip.tripName}</h3>
                                    <p className={Styles.catp}>
                                        {trip.tripInformation.description}
                                    </p>

                                </div>
                            </div>
                            <div id={Styles.destFooter}>
                                <div className={Styles.destFooter__contenedor}>
                                    <p className={Styles.lugar}>{trip.tripInformation.place}</p>
                                    <p className={Styles.tiempo}>Aproximadamente 8 hrs.</p>
                                    <div className={Styles.StarsContainer}>
                                        <p className={Styles.starsNumber}>{trip.tripRating + ".0 "}</p>
                                        <p className={Styles.stars}>{stars}</p>
                                    </div>
                                </div>
                                <hr className={Styles.hr}></hr>
                                <div className={Styles.precios}>
                                    {disc === true ? trip.tripInformation.price.map(p => (
                                        <p className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</p>
                                    )) : <p />
                                    }
                                </div>
                                <div className={Styles.descuentos - precios}>
                                    {disc === true ? trip.tripInformation.price.map(p => (
                                        <p className={Styles.catp} key={keyp++}>{p.priceType} ${Math.round(p.priceAmount - discAmount)}</p>
                                    )) : trip.tripInformation.price.map(p => (
                                        <p className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</p>
                                    ))}

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