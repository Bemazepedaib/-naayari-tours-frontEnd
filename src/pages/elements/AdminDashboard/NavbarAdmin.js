import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faClock } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import Styles from '../../../styles/elementStyles/NavbarAdmin.module.css'

function NavbarAdmin() {

    const lonk = "https://drive.google.com/uc?export=view&id=";
    const avatar = "1c0JUYO3Kta4vIAd3oTJfNwd4bXBKkzFJ";

    return (
        <div className={Styles.navbarAdminContent}>
            <nav className={Styles.navbarAdmin}>
                <div className={Styles.navIconAdmin} >
                </div>
                <div className={Styles.navbarAdminLeft}>
                    <a href="#" className={Styles.a}>Suscribers</a>
                    <a href="#" className={Styles.a}>Video Management</a>
                    <a href="#" className={`${Styles.activeLink} ${Styles.a}`}>Admin</a>
                </div>
                <div className={Styles.navbarAdminRight}>
                    <a className={Styles.a}>
                        <i aria-hidden="true"><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                    </a>
                    <a className={Styles.a}>
                        <i aria-hidden="true"> <FontAwesomeIcon icon={faClock} /></i>
                    </a>
                    <a className={Styles.a}>
                        <img className={Styles.avatar} src={lonk + avatar} alt="avatar" />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin;
