import React from 'react'
import Styles from '../../styles/elementStyles/PersonalCard.module.css'
import Image from 'next/image';
function PersonalCard({ pImage, role, roleInfo }) {
    return (
        <div>
                <div className={Styles.orgCards}>
                    <div className={Styles.orgtextCard}>
                        <div className={Styles.orgImage}>
                            <Image className={Styles.personalImage}
                                width={500}
                                height={500}
                                src={pImage}
                            />
                        </div>
                        <div className={Styles.orgInfo}>
                            <h3 className={Styles.orgRoleTittle}>{role}</h3>
                            <p className={Styles.orgRoleInfo}>{roleInfo}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PersonalCard
