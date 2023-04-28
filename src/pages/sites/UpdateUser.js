
import { useState, React } from 'react'
import Styles from '../../styles/elementStyles/UpdateUser.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import InputComponent from '../elements/Input'
import ModalAdmin from "../elements/ModalAdmin"

function UpdateUser({ user }) {

  let k = 0
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
        <section  className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Nombre de usuario:   </p>
        <p className={`${Styles.infoP} ${Styles.update}`} >{user.user.name}
          <ModalAdmin type="name" val={user.user.name} /></p>
        </section>
        <section className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Telefono:            </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.cellphone}
          <ModalAdmin type="cellphone" val={user.user.cellphone} /></p>
        </section>
        <section className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Correo:              </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.email}
          <ModalAdmin type="email" val={user.user.email} /></p>
        </section>
        <section className={Styles.sectionUser}>
        <p className={`${Styles.infoSubtitle}`}> Tipo de usuario:     </p>
        <p className={`${Styles.update}`}>{user.user.userType}</p>
        </section>
        <section className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Fecha de nacimiento: </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.birthDate}
          <ModalAdmin type="birthDate" val={user.user.birthDate} /></p>
        </section>
        <section className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Nivel de usuario:    </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.userLevel}
          <ModalAdmin type="userLevel" val={user.user.userLevel} /></p>
        </section>
        <section className={Styles.section}>
        <div className={`  ${Styles.password}`}>
        <p className={` ${Styles.infoSubtitle}`}> Contraseña: </p>
        <p  className={`${Styles.infoP} ${Styles.update}`}> •••••••••• 
        <ModalAdmin type="password" val="••••••••••" />  </p>
        </div>
        </section>
      </div>
      <div className={Styles.tags}>
        <p className={`${Styles.tagsInfo} ${Styles.infoSubtitle}`}> Preferencias </p>
        <div className={Styles.pref}>
        {user.user.preferences.map(pr => (
          <p key={k++} className={Styles.preference}>{pr.preferenceType}</p>
          ))}
        </div>
      </div>
      <div className={Styles.trips}>
        <label>Viajes realizados</label>

      </div>
    </div>

  )
}

export default UpdateUser
