import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import { useRef } from "react";

import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			Styles.responsiveNav
		);
	};

    return (
        <div className={Styles.navbarHeader}>
            <Link  href="/">
                <Image src={image}
                    width={100}
                    height={100}
                    alt="Naayari Tours"
            />
            </Link>
            <nav className={Styles.navbar} ref={navRef}>
                <Link className={Styles.link} href="/">Inicio</Link>
                <Link className={Styles.link} href="/sites/AboutUs">Acerca de Nosotros</Link>
                <Link className={Styles.link} href="/sites/FAQ">Preguntas Frecuentes</Link>
                <Link className={Styles.link} href="#Footer" scroll={false} >Contacto</Link>
                <Link href="/sites/Login"><button className={Styles.btnLogin}>Iniciar Sesión</button></Link>
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
