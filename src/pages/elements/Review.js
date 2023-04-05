import React from 'react'
import Styles from '../../styles/elementStyles/Review.module.css'
function Review() {
    return (
        <div className={Styles.revi}>
            <div className={Styles.reviewContainer}>
                <div className={Styles.reviewLeft}>
                    <h2 className={Styles.author}>Rodrigo Castiello Gonzalez Gonzalez</h2>
                    <div className={Styles.stars}>⋆⋆⋆⋆⋆</div>
                    <div className={Styles.date}>20 de Febrero 2023</div>
                </div>
                <div className={Styles.reviewRight}>
                    <h2 className={Styles.reviewTittle}>Excelente laptop a excelente precio</h2>
                    <hr className={Styles.hline} />
                    <p className={Styles.reviewParagraph}>La laptop ha funcionado excelente y el hecho que se le puedan
                        expandir tanto la ram como el almacenamiento le da mucho tiempo de vida adicional.
                        Es muy compacta, práctica y ligerita muy rápida. La recomiendo mucho para uso diario y Office.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review
