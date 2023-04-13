import React from 'react'
import Styles from '../../../styles/elementStyles/SidebarAdmin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faPlaneDeparture, faPlane, faPlaneArrival, faUserPlus,faUser, faUserMinus, faPersonArrowUpFromLine, 
     faPersonArrowDownToLine, faTimes, faHome, faPowerOff } from '@fortawesome/free-solid-svg-icons'


function SidebarAdmin() {

    const lonk = "https://drive.google.com/uc?export=view&id=";
    const avatar = "1c0JUYO3Kta4vIAd3oTJfNwd4bXBKkzFJ";

    return (
        <div className={Styles.sidebar}  id={Styles.sidebarAdmin}>
            <div className={Styles.sidebarAdminTitle}>
                <div>
                    <h1 className={Styles.fTitle}>Naayari tours</h1>
                </div>
                <i className={Styles.fIcons}><FontAwesomeIcon icon={faTimes} /></i>
            </div>
            <div className={Styles.sidebarAdminMenu}>
                <div className={`${Styles.sidebarAdminLink} ${Styles.activeMenuLink}`}>
                    <i><FontAwesomeIcon icon={faHome} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Dashboard</a>
                </div>
                <div className={`${Styles.sidebarAdminLink} ${Styles.menu}`}>
                <i> <FontAwesomeIcon icon={faPlane} /></i>
                <h2 className={Styles.sidebarAdminSubtitle}>Viajes</h2>
                </div>
                <div className={`${Styles.sidebarAdminLink} ${Styles.menu}`}>
                <i><FontAwesomeIcon icon={faUser} /></i>
                <h2 className={Styles.sidebarAdminSubtitle}>Usuarios</h2>
                </div>
                <div className={`${Styles.sidebarAdminLink} ${Styles.menu}`}>
                <i><FontAwesomeIcon icon={faPersonArrowDownToLine} /></i>
                <h2 className={Styles.sidebarAdminSubtitle}>Org.  de Viajes </h2>
                </div>
                
                <div className={`${Styles.sidebarAdminLogout} ${Styles.sidebarAdminLink}`}>
                    <i><FontAwesomeIcon icon={faPowerOff} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Log out</a>
                </div>
            </div>
        </div>
    )
}
export default SidebarAdmin;