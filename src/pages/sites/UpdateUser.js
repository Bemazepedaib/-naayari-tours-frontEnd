import Styles from "../../styles/elementStyles/UpdateUser.module.css"
import { useState, React } from 'react'
import ModalAdmin from "../elements/ModalAdmin"
import HeaderTittle from "../elements/HeaderTittle"
import { Button } from 'react-bootstrap'
import { useMutation } from '@apollo/client';
import { UPDATE_USER_NAME_ADMIN, UPDATE_USER_CELL_ADMIN,UPDATE_USER_BIRTH_ADMIN,UPDATE_USER_PASSWORD_ADMIN } from '../mutations/userMutations';


function UpdateUser({ user }) {

  let k = 0

  const [userName] = useMutation(UPDATE_USER_NAME_ADMIN);
  const [userCellAdmin] = useMutation(UPDATE_USER_CELL_ADMIN);
  const [userBirthAdmin] = useMutation(UPDATE_USER_BIRTH_ADMIN);
  const [userPassAdmin] = useMutation(UPDATE_USER_PASSWORD_ADMIN);

  const [newName, setNewName] = useState(user.user.name);
  const [newPhone, setNewPhone] = useState(user.user.cellphone);
  const [newDate, setNewDate] = useState(user.user.birthDate);
  const [newPass, setNewPass] = useState("");
  const ema=user.user.email


  const changeData = async  () => {
            try {
                const newN=(await userName({ variables: { newName: newName, email:ema} })).data.updateUserName.split("%");
                setNewName(newN[1])
            } catch (error) {
                console.log(error)
            }
            try {
                const newP=(await userCellAdmin({ variables: { newCell: newPhone, email: ema } })).data.updateUserCell.split("%");
                setNewPhone(newP[1]);
            } catch (error) {

                console.log(error.message)
            }

            try {
                const newD = (await userBirthAdmin({ variables: { newDate: newDate, email: ema } })).data.updateUserBirth.split("%");
                setNewDate(newD[1])
            } catch (error) {
                console.log(error.message)
            }

            try {
                await userPassAdmin({ variables: { newPassword: newPass, email: ema } });

            } catch (error) {
                console.log(error.message)
            }
            window.location.href = "/sites/Users";
}
const expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


  return (
    
    <div className={Styles.mainContainer}>
     <HeaderTittle tittle={"Actualizar Usuario"}></HeaderTittle>
      <div className={Styles.info}>
        <section  className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Nombre de usuario:   </p>
        <p className={`${Styles.infoP} ${Styles.update}`} >{newName}
          <ModalAdmin   
            message="Cambia el nombre"  
            value={newName} 
            setNew={setNewName} 
            exp={expresiones.nombre}
            err="El nombre solo debe incluir letras"/></p>
        </section>
        <section className={Styles.section}>
        <p className={` ${Styles.infoSubtitle}`}> Telefono:            </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{newPhone}
          <ModalAdmin 
            ema={user.user.email} 
            message="Cambia el telefono"  
            value={newPhone} 
            setNew={setNewPhone} 
            exp={expresiones.telefono}
            err="Ingrese un número telefonico correcto"
            /></p>
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
          <ModalAdmin  
            ema={user.user.email} 
            message="Cambia la fecha de nacimiento"  
            value={newDate} 
            setNew={setNewDate}
            err="Elija una fecha válida"
            /></p>
        </section>
        <section className={Styles.sectionUser}>
        <p className={` ${Styles.infoSubtitle}`}> Nivel de usuario:    </p>
        <p className={`${Styles.infoP} ${Styles.update}`}>{user.user.userLevel}</p>
        </section>
        <section className={Styles.section}>
        <div className={`  ${Styles.password}`}>
        <p className={` ${Styles.infoSubtitle}`}> Contraseña: </p>
        <p  className={`${Styles.infoP} ${Styles.update}`}> •••••••••• 
        <ModalAdmin 
          ema={user.user.email} 
          message="Cambia la contraseña" 
          value="••••••••••" 
          setNew={setNewPass} 
          exp={expresiones.password}
          err="La contraseña debe ser segura"
          />  </p>
        </div>
        </section>
      </div>
      <Button variant="btn btn-dark" onClick={changeData}>Guardar Cambios</Button>
      <div className={Styles.tags}>
        <p className={`${Styles.tagsInfo} ${Styles.infoSubtitle}`}> Preferencias </p>
        <div className={Styles.pref}>
        {user.user.preferences.map(pr => (
          <p key={k++} className={Styles.preference}>{pr.preferenceType}</p>
          ))}
        </div>
      </div>

    </div>
  )
}

export default UpdateUser
