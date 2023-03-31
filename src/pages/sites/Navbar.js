import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Styles from '../../styles/Navbar.module.css'
import Link from 'next/link'
import { useRef } from "react";

import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			Styles.responsiveNav
		);
	};

    return (
        <div className={Styles.navbarHeader}>
            <Link className={Styles.link} href="/sites/Footer">
                <Image src="https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0"
                    width={100}
                    height={100}
                    alt="Naayari Tours"
            />
            </Link>
            <nav className={Styles.navbar} ref={navRef}>
                <Link className={Styles.link} href="/sites/Footer">Home</Link>
                <Link className={Styles.link} href="/sites/Footer">My work</Link>
                <Link className={Styles.link} href="/sites/Footer">Blog</Link>
                <Link className={Styles.link} href="/sites/Preferences">Preferences</Link>
                <Link className={Styles.link} href="/sites/Login">Login</Link>
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
