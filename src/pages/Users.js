import React from 'react'
import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin'
import Styles from '../styles/Users.module.css'
import AdminSignup from '../elements/AdminSignup'
import SearchData from '../elements/SearchData'

import { useQuery } from '@apollo/client';
import { ME } from '../backendOperations/querys/userQuerys';
import { Spinner } from 'react-bootstrap';

function Users() {

  const { loading: meLoading, error: meError, data: meData } = useQuery(ME);

  if (meLoading) return (
    <div className={Styles.UsersMain}>
      <SidebarAdmin />
      <div className={Styles.error}>
        <Spinner />
      </div>
    </div>
  )
  if (meError) return (
    <div className={Styles.UsersMain}>
      <SidebarAdmin />
      <div className={Styles.error}>
        Inicie sesión para continuar
      </div>
    </div>
  )
  if (meData.me.userType !== "admin") return (
    <div className={Styles.UsersMain}>
      <SidebarAdmin />
      <div className={Styles.error}>
        Necesitas permisos de administrador para acceder a este módulo
      </div>
    </div>
  )

  return (
    <div className={Styles.UsersMain}>
      <SidebarAdmin />
      <div className={Styles.User}>
        <AdminSignup />
      </div>
    </div>
  )
}

export default Users