import React from 'react'
import Styles from '../styles/elementStyles/PersonalCard.module.css'
import Image from 'next/image';
function PersonalCard({personal}) {
    return (
        <div>
                <div className={Styles.orgCards}>
                    <div className={Styles.orgtextCard}>
                        <div className={Styles.orgImage}>
                            <Image className={Styles.personalImage}
                                width={500}
                                height={500}
                                alt='ProfileImage'
                                src={personal.pImage}
                            />
                        </div>
                        <div className={Styles.orgInfo}>
                            <h3 className={Styles.orgRoleTittle}>{personal.role}</h3>
                            <p className={Styles.orgRoleInfo}>{personal.roleInfo}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default PersonalCard
