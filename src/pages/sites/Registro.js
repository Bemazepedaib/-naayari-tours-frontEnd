import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Registro.module.css';
import InputComponent from '../elements/Input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import { useMutation, useQuery } from '@apollo/client';
import { ADD_USER } from '../mutations/userMutations';
import { GET_USERS } from '../querys/userQuerys';

function Registro() {

    const logoNaayari = "https://drive.google.com/uc?export=view&id=1N_BZ6IgIMASpQ3FCw2ZpS-jV3HKU2dNI"

    const [name, setName] = useState({ value: "", valid: true });
    const [cell, setCell] = useState({ value: "", valid: true });
    const [mail, setMail] = useState({ value: "", valid: true });
    const [pass, setPass] = useState({ value: "", valid: true });
    const [pass2, setPass2] = useState({ value: "", valid: true });
    const [date, setDate] = useState({ value: "", valid: true });
    const [sex, setSex] = useState("male");
    const [adv, setAdv] = useState("a friend");
    const [terminos, setTerminos] = useState(false);
    const [validForm, setValidForm] = useState(null);
    const [addUser] = useMutation(ADD_USER);
    const { loading, error, data } = useQuery(GET_USERS)

    const expresiones = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validarFecha = () => {
        if (date.value !== '') {
            const fecha = date.value.split("-")
            const fechaHoy = new Date(Date.now()).toISOString().split("T")[0].split("-")
            if (fechaHoy[0] - fecha[0] > 18) {
                setDate((prevState) => { return { ...prevState, valid: true } })
            } else {
                setDate((prevState) => { return { ...prevState, valid: false } })
            }
        }
    }

    const validarPassword2 = () => {
        if (pass.value.length > 0) {
            if (pass.value !== pass2.value) {
                setPass2((prevState) => { return { ...prevState, valid: false } })
            } else {
                setPass2((prevState) => { return { ...prevState, valid: true } })
            }
        }
    }

    const onChangeTerminos = (e) => {
        setTerminos(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (name.valid && cell.valid && mail.valid && pass.valid && pass2.valid && date.valid && terminos &&
            name.value && cell.value && mail.value && pass.value && pass2.value && date.value) {
            setValidForm(true)
            addUser({
                variables: {
                    name: name.value,
                    cellphone: cell.value,
                    birthDate: date.value,
                    email: mail.value,
                    password: pass.value,
                    sex: sex,
                    reference: adv,
                    userType: "client",
                    userLevel: "0",
                    membership: false,
                    verified: false
                }
            })
            setName({ value: "", valid: true });
            setCell({ value: "", valid: true });
            setMail({ value: "", valid: true });
            setPass({ value: "", valid: true });
            setPass2({ value: "", valid: true });
            setDate({ value: "", valid: true });
            setSex("male");
            setAdv("a friend");
            setTerminos(false);
        } else {
            setValidForm(false);
        }
    }

    return <>{!loading && !error &&
        (
            <div className={styles.contenedor}>
                <Image src={logoNaayari} alt="" width={200} height={200} className={styles.logo} />
                <form action="" onSubmit={onSubmit} className={styles.formulario} autoComplete="off" >
                    <InputComponent
                        estado={name}
                        cambiarEstado={setName}
                        tipo="text"
                        label="Nombre Completo"
                        placeholder="Nombre Completo"
                        name="nombre"
                        errorMsg="El nombre solo debe incluir letras"
                        regExp={expresiones.nombre}
                    />
                    <InputComponent
                        estado={cell}
                        cambiarEstado={setCell}
                        tipo="text"
                        label="Número de Celular"
                        placeholder="Número de Celular"
                        name="celular"
                        errorMsg="El Número de celular solo debe incluir dígitos"
                        regExp={expresiones.telefono}
                    />
                    <InputComponent
                        estado={mail}
                        cambiarEstado={setMail}
                        tipo="text"
                        label="Correo electrónico"
                        placeholder="Correo electrónico"
                        name="correo"
                        errorMsg="El correo debe ser válido"
                        regExp={expresiones.correo}
                    />
                    <InputComponent
                        estado={pass}
                        cambiarEstado={setPass}
                        tipo="password"
                        label="Contraseña"
                        placeholder="Contraseña"
                        name="pass"
                        errorMsg="La contraseña debe ser segura"
                        regExp={expresiones.password}
                        auto="on"
                    />
                    <InputComponent
                        estado={pass2}
                        cambiarEstado={setPass2}
                        tipo="password"
                        label="Repite Contraseña"
                        placeholder="Repite Contraseña"
                        name="pass2"
                        errorMsg="Las contraseñas deben coincidir"
                        funcion={validarPassword2}
                        auto="on"
                    />
                    <InputComponent
                        estado={date}
                        cambiarEstado={setDate}
                        tipo="date"
                        label="Fecha de nacimiento"
                        placeholder="Fecha de nacimiento"
                        name="dateNac"
                        errorMsg="Elija una fecha válida"
                        funcion={validarFecha}
                    />
                    <div className={styles.grupoInput}>
                        <label htmlFor='Sexo'>Sexo</label>
                        <select
                            value={sex}
                            onBlur={e => { setSex(e.target.value); }}
                            onChange={e => { setSex(e.target.value); }}
                            className={styles.textInput}
                        >
                            <option value="male">Hombre</option>
                            <option value="female">Mujer</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                    <div className={styles.grupoInput}>
                        <label htmlFor='Publicidad'>¿Cómo nos conoce?</label>
                        <select
                            value={adv}
                            onBlur={e => { setAdv(e.target.value); }}
                            onChange={e => { setAdv(e.target.value); }}
                            className={styles.textInput}
                        >
                            <option value="a friend">Un amigo o conocido</option>
                            <option value="an ad">Un anuncio</option>
                            <option value="facebook">Facebook</option>
                            <option value="none">Ninguno de los anteriores</option>
                        </select>
                    </div>
                    <div className={styles.grupoTerminos}>
                        <label className={styles.text}>
                            <input
                                type="checkbox"
                                name="terminos"
                                id="terminos"
                                checked={terminos}
                                onChange={onChangeTerminos}
                                className={styles.checkBox}
                            />
                            Acepto los Términos y Condiciones
                        </label>
                    </div>
                    <div className={styles.grupoBoton}>
                        {validForm === false && <div className={styles.msgError}>
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            Porfavor rellene correctamente el formulario
                        </div>}
                        <button type="submit" className={styles.primaryBtn}>Crear cuenta</button>
                        {validForm === true && <div className={styles.msgExito}>¡Formulario enviado exitósamente!</div>}
                    </div>
                </form>
            </div>
        )
    }</>;
}

export default Registro;