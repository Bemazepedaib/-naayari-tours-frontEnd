import React from 'react'

import Styles from '../../styles/elementStyles/UpdateUser.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

function UpdateUser({ user }) {
  console.log(user)
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.info}>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Nombre de usuario:   </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.name}       
        <i className={Styles.icon}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></i></p>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Telefono:            </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.cellphone}  
        <i className={Styles.icon}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></i></p>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Correo:              </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.email}      
        <i className={Styles.icon}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></i></p>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Tipo de usuario:     </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.userType}   
        <i className={Styles.icon}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></i></p>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Fecha de nacimiento: </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.birthDate}  
        <i className={Styles.icon}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></i></p>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Nivel de usuario:    </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.userLevel}  
        <i className={Styles.icon}><FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon></i></p>
        <div>
          Contraseña nueva: <input></input>
        </div>
      </div>
      <div className={Styles.tags}>
        <p className={`${Styles.tagsInfo} ${Styles.infoSubtitle}`}> Preferencias </p>

      </div>
 

    </div>
  )
}

export default UpdateUser
