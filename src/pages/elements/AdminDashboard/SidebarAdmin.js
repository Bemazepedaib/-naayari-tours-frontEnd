import React from 'react'
import Styles from '../../../styles/elementStyles/SidebarAdmin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faUser, faPersonArrowDownToLine, faTimes, faHome, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

function SidebarAdmin() {
    return (
        <div className={Styles.sidebar} id={Styles.sidebarAdmin}>
            <div className={Styles.sidebarAdminTitle}>
                <div>
                    <h1 className={Styles.fTitle}>Naayari tours</h1>
                </div>
                <i className={Styles.fIcons}><FontAwesomeIcon icon={faTimes} /></i>
            </div>
            <div className={Styles.sidebarAdminMenu}>
                <div className={`${Styles.sidebarAdminLink} ${Styles.menu}`}>
                    <i><FontAwesomeIcon icon={faHome} /></i>
                    <Link className={Styles.link} href="/sites/Dashboard"><h2 href='#' className={Styles.sidebarAdminSubtitle}>Dashboard</h2></Link>
                </div>
                <div className={`${Styles.sidebarAdminLink} ${Styles.menu}`}>
                    <i> <FontAwesomeIcon icon={faPlane} /></i>
                    <Link className={Styles.link} href="/sites/TripView"><h2 className={Styles.sidebarAdminSubtitle}>Viajes</h2></Link>
                </div>
                <div className={`${Styles.sidebarAdminLink} ${Styles.menu}`}>
                    <i><FontAwesomeIcon icon={faUser} /></i>
                    <Link className={Styles.link} href="/sites/Users"><h2 className={Styles.sidebarAdminSubtitle}>Usuarios</h2></Link>
                </div>
                <div className={`${Styles.sidebarAdminLink} ${Styles.menu}`}>
                    <i><FontAwesomeIcon icon={faPersonArrowDownToLine} /></i>
                    <Link className={Styles.link} href="/sites/Events"><h2 className={Styles.sidebarAdminSubtitle}>Org. de Viajes</h2></Link>
                </div>

                <div className={`${Styles.sidebarAdminLogout} ${Styles.sidebarAdminLink}`}>
                    <i><FontAwesomeIcon icon={faPowerOff} /></i>
                    <Link className={Styles.sidebarAdmina} href="/" > <h6 onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload(true)
                    }}>Cerrar Sesión</h6></Link>
                </div>
            </div>
        </div>
    )
}
export default SidebarAdmin;