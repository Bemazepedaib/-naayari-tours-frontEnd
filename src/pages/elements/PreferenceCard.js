import React, { useState } from 'react'
import Styles from '../../styles/elementStyles/PreferenceCard.module.css'
import Image from 'next/image'

function PreferenceF({cart,isOk,isNotOk}) {
    const [isSelected, changeSelected] = useState(false);
    function isTrue() {
        isNotOk(cart.preferenceType)
        changeSelected(false);
    }
    function isFalse() {
        isOk(cart.preferenceType)
        changeSelected(true);
    }
    return (
        <div>
            <div className={Styles.cardContainer}>
                <div className={Styles.card}>
                    <div className={Styles.front}>
                        <Image className = {Styles.images}src={"https://drive.google.com/uc?export=view&id=" + cart.preferenceIcon}
                         width={500} 
                         height={500}
                          alt="Cart Image" />
                        <p className={Styles.paragraph}>{cart.preferenceType}</p>
                    </div>
                    <div className={Styles.back}>
                            <h1>{cart.preferenceType}</h1>
                            <hr className={Styles.hr}></hr>
                            <p>{cart.preferenceDescription}</p>
                    </div>
                </div>
            </div>
            <div className={isSelected === false ? Styles.buttonWbords : Styles.buttonWbordsOk}
                onClick={isSelected === false ? isFalse : isTrue}>
                {isSelected === false && <p className={Styles.paragraph}>Agregar</p>}
                {isSelected === true && <p className={Styles.paragraph}>✓</p>}
            </div>
        </div>
    )
}

export default PreferenceF