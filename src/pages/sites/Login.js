import Link from 'next/link';
import Styles from "../../styles/Login.module.css";

import React, { useState, useEffect } from "react"
import { useMutation } from '@apollo/client';
import { LOGIN } from '../mutations/userMutations';

import InputComponent from '../elements/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Footer from './Footer';
import Router, { useRouter } from 'next/router';

function Login() {

    const terminos = ""
    const privacidad = ""
    const forgotPass = ""

    const [myError, setMyError] = useState("");

    const [mail, setMail] = useState({ value: "", valid: true });
    const [pass, setPass] = useState({ value: "", valid: true });
    const [validLog, setValidLog] = useState(null);
    const [token, setToken] = useState()

    const [login] = useMutation(LOGIN)

    const { query: { place, selectedDate, selectedTrip } } = useRouter();

    useEffect(() => {
        if (token) {
            if (place) {
                if (place === "reservations") {
                    setValidLog(true);
                    Router.push({ pathname: '/sites/Reservations', query: { selectedDate, selectedTrip } }, '/sites/Reservations')
                }
            } else {
                if (token[0] === "admin") {
                    setValidLog(true);
                    Router.push({ pathname: '/sites/Dashboard' })
                } else if (token[1] === "") {
                    setValidLog(true);
                    Router.push({ pathname: '/sites/Preferences'})
                } else {
                    setValidLog(true);
                    Router.push({ pathname: '/sites/Me' })
                }
            }
            localStorage.setItem('token', token[2]);
        }
    }, [token])

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            if (localStorage.getItem('token')) localStorage.removeItem('token')
            setToken((await login({ variables: { email: mail.value, password: pass.value } })).data.login.split("%"))
        } catch (error) {
            setMyError(error.message);
            setValidLog(false)
            return;
        }
    }

    return (
        <div>
            <Navbar />
            <div className={Styles.container}>
                <div className={Styles.wrapper}>
                    <div className={Styles.left}>
                        <div className={Styles.showcase}>
                            <div>
                                <h1 className={Styles.showcaseText}>
                                    <strong>¡Viajar es Cultura!</strong>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.right}>
                        <div className={Styles.signin}>
                            <form className={Styles.formulario} onSubmit={onSubmit}>
                                <InputComponent
                                    estado={mail}
                                    cambiarEstado={setMail}
                                    tipo="text"
                                    label="Correo electrónico"
                                    placeholder="Correo electrónico"
                                    name="correo"
                                />
                                <InputComponent
                                    estado={pass}
                                    cambiarEstado={setPass}
                                    tipo="password"
                                    label="Contraseña"
                                    placeholder="Contraseña"
                                    name="pass"
                                    auto="on"
                                />
                                <div className={Styles.grupoBoton}>
                                    {validLog === false && <div className={Styles.msgError}>
                                        <FontAwesomeIcon icon={faTriangleExclamation} />
                                        &nbsp; {myError}
                                    </div>}
                                    <button type="submit" className={Styles.primaryBtn}>Iniciar sesión</button>
                                </div>
                            </form>
                            <div className={Styles.links}>
                                <a href={forgotPass}>¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className={Styles.or}>
                                <hr className={Styles.bar} />
                                <span>Ó</span>
                                <hr className={Styles.bar} />
                            </div>
                            <Link href={{ pathname: '/sites/Signup' }} className={Styles.secondaryBtn}>Crear una cuenta</Link>
                            <footer className={Styles.mainFooter}>
                                <div>
                                    <a href={terminos}>Terminos de uso</a> | <a href={privacidad}>Politica de Privacidad</a>
                                </div>
                                <p>Copyright &copy; 2023, Naayari Tours All Rights Reserved</p>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;