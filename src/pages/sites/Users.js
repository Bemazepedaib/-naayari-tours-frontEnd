import React from 'react'
import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin'
import Styles from '../../styles/Users.module.css'
import AdminSignup from '../elements/AdminSignup'
import SearchBar from '../elements/SearchBar'


function Users() {



  return (
    <div className={Styles.UsersMain}>
      <SidebarAdmin />
      <div className={Styles.User}>
        <SearchBar/>
        <AdminSignup />
      </div>
    </div>
  )
}

export default Users