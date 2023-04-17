import React from 'react'

import Styles from '../../styles/elementStyles/UpdateUser.module.css'

function UpdateUser({ user }) {
  console.log(user)
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.info}>
        <p> Nombre de usuario: {user.user.name} </p>
        <p> Tipo de usuario: {user.user.userType}</p>
        <p> Telefono: {user.user.cellphone} </p>
        <p> Correo: {user.user.email} </p>
        <p> Fecha de nacimiento: {user.user.birthDate}</p>
        <p> Nivel de usuario: {user.user.userLevel}</p>
        <div>
        Contraseña nueva: <input></input>
      </div>
      </div>
      <div className={Styles.tags}>
      <h3 className={Styles.tagsInfo}>Categorias</h3>
      </div>
      <div className={Styles.reviews}>
        <h3 className={Styles.reviewsInfo}>Reviews</h3>

      </div>

    </div>
  )
}

export default UpdateUser
