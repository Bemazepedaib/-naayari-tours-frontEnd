import React from 'react'
import Styles from '../../styles/Catalogue.module.css'

function CataloguePrices({ trip }) {
    const disc = trip.discount.available;
    const discAmount = trip.discount.amount;
    var keyp = 0;
    //(disc)
    return (
        <div>
            <div className={Styles.precios}>
                {disc ? trip.price.slice(0, 1).map(p => (
                    <p className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</p>
                )) : <p />
                }
            </div>
            <div className={Styles.descuentosPrecios}>
                {disc  ? trip.price.map(p => (
                    p[0] ? <p className={Styles.catp} key={keyp++}>{p.priceType} ${Math.round(p.priceAmount - discAmount)}</p>
                    : <p className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</p>
                    
                )) : trip.price.map(p => (
                    <p className={Styles.catp} key={keyp++}>{p.priceType} ${p.priceAmount}</p>
                ))}


            </div>
        </div>
    )
}

export default CataloguePrices
