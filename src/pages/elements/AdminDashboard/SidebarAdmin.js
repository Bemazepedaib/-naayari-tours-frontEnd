import React from 'react'
import Styles from '../../../styles/elementStyles/SidebarAdmin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faPlaneDeparture, faPlane, faPlaneArrival, faUserPlus,faUser, faUserMinus, faPersonArrowUpFromLine, 
     faPersonArrowDownToLine, faTimes, faHome,faMoneyBills, faBriefcase, faPowerOff } from '@fortawesome/free-solid-svg-icons'


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
                    <a href='#' className={Styles.idebarAdmina}>Dashboard</a>
                </div>
                <h2 className={Styles.sidebarAdminSubtitle}>Viajes</h2>
                <div className={Styles.sidebarAdminLink}>
                    <i><FontAwesomeIcon icon={faPlaneDeparture} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Crear Viaje</a>
                </div>
                <div className={Styles.sidebarAdminLink}>
                    <i><FontAwesomeIcon icon={faPlane} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Actualizar Viaje</a>
                </div>
                <div className={Styles.sidebarAdminLink}>
                    <i><FontAwesomeIcon icon={faPlaneArrival} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Eliminar Viaje</a>
                </div>

                <h2 className={Styles.sidebarAdminSubtitle}>Usuarios</h2>
                <div className={Styles.sidebarAdminLink}>
                    <i><FontAwesomeIcon icon={faUserPlus} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Crear Usuarios</a>
                </div>
                <div className={Styles.sidebarAdminLink}>
                    <i><FontAwesomeIcon icon={faUser} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Actualizar Usuarios</a>
                </div>
                <div className={Styles.sidebarAdminLink}>
                    <i><FontAwesomeIcon icon={faUserMinus} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Eliminar Usuarios</a>
                </div>
                <h2 className={Styles.sidebarAdminSubtitle}>Org.  de Viajes </h2>
                <div className={Styles.sidebarAdminLink}>
                    <i><FontAwesomeIcon icon={faPersonArrowUpFromLine} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Dar de Alta</a>
                </div>
                <div className={Styles.sidebarAdminLink}>
                    <i><FontAwesomeIcon icon={faPersonArrowDownToLine} /></i>
                    <a href='#' className={Styles.sidebarAdmina}>Dar de Baja</a>
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