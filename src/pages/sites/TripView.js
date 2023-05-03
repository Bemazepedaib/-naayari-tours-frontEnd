import React from 'react'
//CSS
import Styles from '../../styles/TripView.module.css'
//COMPONENTS
import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin'
import CreateTripView from '../elements/CreateTripView'

const TripView = () => {
    return (
        <div className={Styles.tripsMain}>
            <SidebarAdmin />
            <div className={Styles.trip}>
            <CreateTripView/>
            </div>
        </div>
    )
}

export default TripView
