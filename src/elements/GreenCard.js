import React from 'react'
import Styles from '../styles/elementStyles/GreenCard.module.css'

function GreenCard({card}) {
    return (
    <div>
        <div className={Styles.card}>
            <h3 className={Styles.tittle}>{card.tittle}</h3><hr/>
            <p className={Styles.text}>{card.text}</p>
        </div>
    </div>
    )
}

export default GreenCard
