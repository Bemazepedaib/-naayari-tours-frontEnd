
import { useState, React } from 'react'
import Styles from '../../styles/elementStyles/UpdateUser.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import InputComponent from '../elements/Input'
import ModalAdmin from "../elements/ModalAdmin"

function UpdateUser({ user }) {


  const [pass, setPass] = useState({ value: "", valid: true });

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }


  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.info}>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Nombre de usuario:   </p>
        <p className={`${Styles.infoP} ${Styles.update}`} >{user.user.name}
          <ModalAdmin type="name" val={user.user.name} /></p>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Telefono:            </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.cellphone}
          <ModalAdmin type="cellphone" val={user.user.cellphone} /></p>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Correo:              </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.email}
          <ModalAdmin type="email" val={user.user.email} /></p>
        <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Tipo de usuario:     </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.userType}</p>
          <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Fecha de nacimiento: </p>
          <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.birthDate}
            <ModalAdmin type="birthDate" val={user.user.birthDate} /></p>
          <p className={`${Styles.infoP} ${Styles.infoSubtitle}`}> Nivel de usuario:    </p>
          <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.userLevel}
            <ModalAdmin type="userLevel" val={user.user.userLevel} /></p>
          <div className={Styles.password}>
            <InputComponent
              estado={pass}
              cambiarEstado={setPass}
              label="Contraseña"
              placeholder="Contraseña"
              name="pass"
              errorMsg="La contraseña debe ser segura"
              regExp={expresiones.password}
              auto="on"
            />
          </div>
      </div>
      <div className={Styles.tags}>
        <p className={`${Styles.tagsInfo} ${Styles.infoSubtitle}`}> Preferencias </p>

      </div>
    </div>

  )
}

export default UpdateUser
