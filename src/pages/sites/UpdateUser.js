import Styles from "../../styles/elementStyles/UpdateUser.module.css"
import { useState, React } from 'react'
import ModalAdmin from "../elements/ModalAdmin"

function UpdateUser({ user }) {

  let k = 0
  const [newName, setNewName] = useState(user.user.name);
  const [newPhone, setNewPhone] = useState(user.user.cellphone);
  const [newDate, setNewDate] = useState(user.user.birthDate);



  return (
    
    <div className={Styles.mainContainer}>
      {console.log(user)}
      <div className={Styles.info}>
        <section  className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Nombre de usuario:   </p>
        <p className={`${Styles.infoP} ${Styles.update}`} >{newName}
          <ModalAdmin  ema={user.user.email} message="Cambia el nombre"  value={newName} setNewName={setNewName}/></p>
        </section>
        <section className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Telefono:            </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{newPhone}
          <ModalAdmin ema={user.user.email} message="Cambia el telefono"  value={newPhone} setNewPhone={setNewPhone} /></p>
        </section>
        <section className={Styles.sectionUser}>
        <p className={` ${Styles.infoSubtitle}`}> Correo:              </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.email} </p>
        </section>
        <section className={Styles.sectionUser}>
        <p className={`${Styles.infoSubtitle}`}> Tipo de usuario:     </p>
        <p className={`${Styles.update}`}>{user.user.userType}</p>
        </section>
        <section className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Fecha de nacimiento: </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{newDate}
          <ModalAdmin  ema={user.user.email} message="Cambia la fecha de nacimiento"  value={newDate} setNewDate={setNewDate} /></p>
        </section>
        <section className={Styles.sectionUser}>
        <p className={` ${Styles.infoSubtitle}`}> Nivel de usuario:    </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.userLevel}</p>
        </section>
        <section className={Styles.section}>
        <div className={`  ${Styles.password}`}>
        <p className={` ${Styles.infoSubtitle}`}> Contraseña: </p>
        <p  className={`${Styles.infoP} ${Styles.update}`}> •••••••••• 
        <ModalAdmin ema={user.user.email} message="Cambia la contraseña" value="••••••••••" />  </p>
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
