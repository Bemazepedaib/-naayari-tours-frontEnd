import React from 'react'
//CSS
import Styles from '../../styles/TripView.module.css'
//COMPONENTS
import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin'
import CreateTripView from '../elements/CreateTripView'
import SearchTripView from '../elements/SearchTripView'
const TripView = () => {
    return (
        <div className={Styles.tripsMain}>
            <SidebarAdmin />
            <div className={Styles.trip}>
            <CreateTripView/>
            <SearchTripView/>
            </div>
        </div>
    )
}

export default TripView
