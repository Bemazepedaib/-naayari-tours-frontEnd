import React from 'react'
import Styles from '../../styles/elementStyles/HeaderTittle.module.css'
function HeaderTittle({tittle}) {
    return (
        <div>
            <div className={Styles.headerSection}>
                <div className={Styles.headerContainer}>
                    <h2 className={Styles.headerTittle}>{tittle}</h2>
                </div>
            </div>
        </div>
    )
}

export default HeaderTittle
