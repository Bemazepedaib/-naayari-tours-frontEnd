import React from 'react'
import Styles from '../styles/Catalogue.module.css'

function CataloguePrices({ trip }) {
    const disc = trip && trip.discount.available;
    const discAmount = trip && trip.discount.amount;
    var keyp = 0;
    return (
        <div>
            <div className={Styles.precios}>
                {disc ? trip.price?.slice(0, 1).map(p => (
                    <div className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</div>
                )) : <div />
                }
            </div>
            <div className={Styles.descuentosPrecios}>
                {disc ? trip.price?.map(p => (
                    p.priceType == "Adulto" ? <div className={Styles.catp} key={keyp++}>{p.priceType} ${Math.round(p.priceAmount - discAmount)}</div>
                        : <div className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</div>

                )) : trip.price?.map(p => (
                    <div className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</div>
                ))}


            </div>
        </div>
    )
}

export default CataloguePrices
