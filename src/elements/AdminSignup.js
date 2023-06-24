import { React, useState, useEffect } from 'react'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../backendOperations/mutations/userMutations';
import InputComponent from './Input';
import Styles from '../styles/AdminSignup.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import HeaderTittle from './HeaderTittle';

import SearchData from './SearchData';

function AdminSignup() {

    const [newU, setNewU] = useState([{ name: "", cellphone: "", email: "" }]);
    const [guide, SetGuide] = useState(false)
    const [guideDescription, SetGuideDescription] = useState({ value: "", valid: true })
    const [guidePhoto, SetGuidePhoto] = useState({ value: "", valid: true })



    const getFecha = (fecha) => {
        return new Date(fecha).toISOString().split("T")[0].split("-").reverse().join("/")
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const fecha = getFecha(date.value)
            if (name.valid && cell.valid && mail.valid && pass.valid && pass2.valid && date.valid && terminos) {
                if (guide) {
                    if (guideDescription.valid && guidePhoto.valid) {
                        console.log(" desc: " + guideDescription.value)
                        console.log(" photo: " + guidePhoto.value.split("/")[5])
                        setValidForm(true)
                        await addUser({
                            variables: {
                                name: name.value,
                                cellphone: cell.value,
                                birthDate: fecha,
                                email: mail.value,
                                password: pass.value,
                                sex: sex,
                                reference: adv,
                                userType: type,
                                userLevel: "0",
                                membership: false,
                                guideDescription: guideDescription.value,
                                guidePhoto: guidePhoto.value.split("/")[5]
                            }
                        })
                        setNewU({ name: name.value, cellphone: cell.value, email: mail.value })

                        setName({ value: "", valid: true });
                        setCell({ value: "", valid: true });
                        setMail({ value: "", valid: true });
                        setPass({ value: "", valid: true });
                        setPass2({ value: "", valid: true });
                        setDate({ value: "", valid: true });
                        SetGuide(false);
                        SetGuidePhoto({ value: "", valid: true });
                        SetGuideDescription({ value: "", valid: true });
                        setSex("male");
                        setAdv("a friend");
                        setType("client");
                        setTerminos(false);
                    } else {
                        throw new Error("Llene correctamente todos los campos del guía")
                    }
                } else {

                    setValidForm(true)
                    await addUser({
                        variables: {
                            name: name.value,
                            cellphone: cell.value,
                            birthDate: fecha,
                            email: mail.value,
                            password: pass.value,
                            sex: sex,
                            reference: adv,
                            userType: type,
                            userLevel: "0",
                            membership: false,
                        }
                    })
                    setNewU({ name: name.value, cellphone: cell.value, email: mail.value })

                    setName({ value: "", valid: true });
                    setCell({ value: "", valid: true });
                    setMail({ value: "", valid: true });
                    setPass({ value: "", valid: true });
                    setPass2({ value: "", valid: true });
                    setDate({ value: "", valid: true });
                    setSex("male");
                    setAdv("a friend");
                    setType("client");
                    setTerminos(false);
                }
            } else {
                throw new Error("Llene correctamente todos los campos")
            }
        } catch (error) {
            setMyError(error.message);
            setValidForm(false);
            return;
        }
    }

    const [name, setName] = useState({ value: "", valid: true });
    const [cell, setCell] = useState({ value: "", valid: true });
    const [mail, setMail] = useState({ value: "", valid: true });
    const [pass, setPass] = useState({ value: "", valid: true });
    const [pass2, setPass2] = useState({ value: "", valid: true });
    const [date, setDate] = useState({ value: "", valid: true });
    const [sex, setSex] = useState("male");
    const [adv, setAdv] = useState("a friend");
    const [type, setType] = useState("client");

    const [myError, setMyError] = useState("");
    const [terminos, setTerminos] = useState(false);
    const [validForm, setValidForm] = useState(null);
    const [token, setToken] = useState()

    const [addUser] = useMutation(ADD_USER);


    const expresiones = {
        link: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validarFecha = () => {
        if (date.value !== '') {
            const fecha = new Date(date.value).toISOString().split("T")[0].split("-").reverse()
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


    const handleOnChange = () => {
        type === "guide" ? SetGuide(true) : SetGuide(false)
        SetGuideDescription({ value: "", valid: true });
        SetGuidePhoto({ value: "", valid: true });

    }

    return (
        <>
            <div className={Styles.contenedor}>
                <HeaderTittle tittle={"Crear nuevo usuario"}></HeaderTittle>
                <form action="" onSubmit={onSubmit} className={Styles.formulario} autoComplete="off" >
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
                    <div className={Styles.grupoInput}>
                        <label htmlFor='Sexo'>SEXO</label>
                        <select
                            value={sex}
                            onBlur={e => { setSex(e.target.value); }}
                            onChange={e => { setSex(e.target.value); }}
                            className={Styles.textInput}
                        >
                            <option value="male">Hombre</option>
                            <option value="female">Mujer</option>
                            <option value="other">Otro</option>
                        </select>
                    </div>
                    <div className={Styles.grupoInput}>
                        <label htmlFor='Publicidad'>¿CÓMO NOS CONOCE?</label>
                        <select
                            value={adv}
                            onBlur={e => { setAdv(e.target.value); }}
                            onChange={e => { setAdv(e.target.value); }}
                            className={Styles.textInput}
                        >
                            <option value="a friend">Un amigo o conocido</option>
                            <option value="an ad">Un anuncio</option>
                            <option value="facebook">Facebook</option>
                            <option value="none">Ninguno de los anteriores</option>
                        </select>
                    </div>
                    <div className={Styles.grupoInput}>
                        <label htmlFor='UserType'>TIPO DE USUARIO</label>
                        <select
                            value={type}
                            onBlur={e => { setType(e.target.value); handleOnChange() }}
                            onChange={e => { setType(e.target.value); handleOnChange() }}
                            className={Styles.textInput}
                        >
                            <option value="client">Cliente</option>
                            <option value="guide">Guía</option>
                        </select>
                    </div>
                    {type === "guide" ?
                        <div>
                            <InputComponent
                                estado={guideDescription}
                                cambiarEstado={SetGuideDescription}
                                tipo="text"
                                label="Descripcion del guia"
                                placeholder="Introduzca una descripción breve"
                                name="guideDescription"
                                errorMsg="Introduce solo letras"
                                regExp={expresiones.nombre}
                            />
                        </div>
                        : ""}
                    {type === "guide" ?
                        <div>
                            <InputComponent
                                estado={guidePhoto}
                                cambiarEstado={SetGuidePhoto}
                                tipo="text"
                                label="Fotografia del guia"
                                placeholder="https://drive.google.com/file/d/14gE1m9trO_XCBbPC8jBy1vvQpVGnak3A/view?usp=share_link"
                                name="guide"
                                errorMsg="Incluya una dirección de url valida"
                                regExp={expresiones.link}
                            />
                        </div>
                        : ""}

                    <div className={Styles.grupoTerminos}>
                        <label className={Styles.text}>
                            <input
                                type="checkbox"
                                name="terminos"
                                id="terminos"
                                checked={terminos}
                                onChange={onChangeTerminos}
                                className={Styles.checkBox}
                            />
                            Acepto los Términos y Condiciones
                        </label>
                    </div>
                    <div className={Styles.grupoBoton}>
                        {validForm === false && <div className={Styles.msgError}>
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            &nbsp; {myError}
                        </div>}
                        <button type="submit" className={Styles.primaryBtn}>Crear cuenta</button>
                    </div>
                </form>

            </div>
            <SearchData newU={newU} />
        </>
    )
}

export default AdminSignup
