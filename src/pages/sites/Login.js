import Link from 'next/link';
import Image from 'next/image';
import styles from "../../styles/Login.module.css";

import React, { useEffect } from "react"
import { useMutation } from '@apollo/client';
import { LOGIN } from '../mutations/userMutations';

import InputComponent from '../elements/Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import Footer from './Footer';
import Router from 'next/router';

function Login() {

    const logoNaayari = "https://drive.google.com/uc?export=view&id=1N_BZ6IgIMASpQ3FCw2ZpS-jV3HKU2dNI"

    const terminos = ""
    const privacidad = ""
    const forgotPass = ""

    const [myError, setMyError] = React.useState("");

    const [mail, setMail] = React.useState({ value: "", valid: true });
    const [pass, setPass] = React.useState({ value: "", valid: true });
    const [validLog, setValidLog] = React.useState(null);
    const [token, setToken] = React.useState({})

    const [login] = useMutation(LOGIN)

    useEffect(() => {
        if (token[0] === "admin") {
            setValidLog(true);
            Router.push({ pathname:'/sites/Dashboard' })
        } else if (token[1] === "") {
            setValidLog(true);
            Router.push({ pathname:'/sites/Preferences' })
        } else {
            setValidLog(true);
            Router.push({ pathname:'/sites/Me' })
        }
        localStorage.setItem('token', token[2]);
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
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.left}>
                        <div className={styles.showcase}>
                            <div>
                                <h1 className={styles.showcaseText}>
                                    <strong>¡Viajar es Cultura!</strong>
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <Image src={logoNaayari} width={200} height={200} className={styles.logo} priority={true} alt="" />
                        <div className={styles.signin}>
                            <form className={styles.formulario} onSubmit={onSubmit}>
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
                                <div className={styles.grupoBoton}>
                                    {validLog === false && <div className={styles.msgError}>
                                        <FontAwesomeIcon icon={faTriangleExclamation} />
                                        &nbsp; {myError}
                                    </div>}
                                    <button type="submit" className={styles.primaryBtn}><label>Iniciar sesión</label></button>
                                </div>
                            </form>
                            <div className={styles.links}>
                                <a href={forgotPass}>¿Olvidaste tu contraseña?</a>
                            </div>
                            <div className={styles.or}>
                                <hr className={styles.bar} />
                                <span>Ó</span>
                                <hr className={styles.bar} />
                            </div>
                            <Link href={{ pathname: '/sites/Registro' }} className={styles.secondaryBtn}>Crear una cuenta</Link>
                            <footer className={styles.mainFooter}>
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