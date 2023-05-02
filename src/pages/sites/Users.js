import React from 'react'
import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin'
import Styles from '../../styles/Users.module.css'
import AdminSignup from '../elements/AdminSignup'
import SearchData from '../elements/SearchData'
import NavbarAdmin from '../elements/AdminDashboard/NavbarAdmin'

function Users() {

  return (
    <div className={Styles.UsersMain}>
      <SidebarAdmin />
      <div className={Styles.User}>
        <AdminSignup />
        <SearchData />
      </div>
    </div>
  )
}

export default Users