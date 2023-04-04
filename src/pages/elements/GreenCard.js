import React from 'react'
import Styles from '../../styles/elementStyles/GreenCard.module.css'
import Slide from 'react-reveal/Slide';
import Image from 'next/image';

function GreenCard({ tittle, text }) {
    return (
        <div className={Styles.card}>
            <h3 className={Styles.tittle}>{tittle}</h3><hr/>
            <p className={Styles.text}>{text}</p>
        </div>
    )
}

export default GreenCard
