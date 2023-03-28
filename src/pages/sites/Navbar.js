import React from 'react'
import Styles from '../../styles/Navbar.module.css'
import naayariLogo from 'https://drive.google.com/file/d/1788oTZ-Mfs-oYI8SyymPibHNa7HtQvJ3/view?usp=share_link';

function Navbar() {
    return (
        <div>
            <div className={Styles.body}>
                <div className={Styles.container}>
                    <section className={Styles.color1}>
                        <img src={imgLogo} alt="" />
                        <nav className='cleffect1'>
                            <div className={Styles.navicon}>
                                <div></div>
                            </div>
                            <a href="index.html">Reservación</a>
                            <a href="index.html">Mocovid</a>
                            <a href="index.html">Viajes</a>
                            <a href="index.html">Contactos</a>
                            <a href="index.html">ETESECHU</a>
                            <a href="index.html">Acerca de nosotros</a>
                            <a href="index.html">Iniciar sesión</a>
                        </nav>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Navbar
