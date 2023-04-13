import React from 'react'

function UpdateUser( {user} ) {
  console.log(user)
  return (
    <div>
      <div>
        <p> Tipo de usuario: {user.user.userType}</p>
        <p> Nombre de usuario: {user.user.name} </p>
        <p> Telefono: {user.user.cellphone} </p>
        <p> Correo: {user.user.email} </p>
        <p> Fecha de nacimiento: {user.user.birthDate}</p>
        <p> Nivel de usuario: {user.user.userLevel}</p>
      </div>
      <div>
        Contraseña nueva: <input></input>
      </div>

    </div>
  )
}

export default UpdateUser
