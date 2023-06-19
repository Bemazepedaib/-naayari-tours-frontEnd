import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { useRef } from "react";

import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

function CheckForToken() {

    const [login, setLogin] = useState()
    useEffect(() => {
        setLogin(localStorage.getItem("token"))
    }, [])

    return [login, setLogin]
}

function Navbar() {

    const [login, setLogin] = CheckForToken()

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            Styles.responsiveNav
        );
    };

    useEffect(() => {
        if (localStorage.getItem("token") !== null) {
            setLogin("token")
        } else {
            setLogin("not token")
        }
    }, [])

    return (
        <div className={Styles.navbarHeader}>
            <Link href="/">
                <Image src={image}
                    width={55}
                    height={55}
                    alt="Naayari Tours"
                />
            </Link>
            <nav className={Styles.navbar} ref={navRef}>
                <div className={Styles.Links}>
                    <Link className={Styles.link} href="/">Inicio</Link>
                    <Link className={Styles.link} href="/AboutUs">Acerca de Nosotros</Link>
                    <Link className={Styles.link} href="/FAQ">Preguntas Frecuentes</Link>
                    <Link className={Styles.link} href="#Footer" scroll={false} onClick={showNavbar}>Contacto</Link>
                    {login === "token" ? <Link className={Styles.link} href="/Me">Mi perfil</Link> : <div />}
                </div>
                <div className={Styles.buttons}>
                    {login === "token" ? <Link href=""><button className={Styles.btnLogin} onClick={() => {
                        localStorage.removeItem('token');
                        window.location.reload(true)
                    }}>Cerrar Sesión</button></Link> :
                        <Link href="/Login"><button className={Styles.btnLogin}>Iniciar Sesión</button></Link>
                    }
                </div>
                <button
                    className={`${Styles.navBtn} ${Styles.navCBtn}`}
                    onClick={showNavbar}>
                    <FontAwesomeIcon icon={faX} />
                </button>
            </nav>
            <button
                className={Styles.navBtn}
                onClick={showNavbar}>
                <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    )
}

export default Navbar
