import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import Navbar from './Navbar';
import Styles from '../../styles/Me.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
function Me() {
    function change() {

    }
    const { loading, error, data } = useQuery(ME);

    if (error) return (<div><Navbar />{error.message}</div>)
    if (loading) return (<div><Navbar />Loading...</div>)
    if (error) return (<div><Navbar /><div className={Styles.errorMe}>{error.message}</div></div>)
    if (loading) return (<div><Navbar />Loading...</div>)

    return <>{!loading && !error &&
        (
            <div>
                <Navbar></Navbar>
                <div className={Styles.mainContainer}>
                    <div className={Styles.titlesContainer}>
                        <h1 className={Styles.titleCount}>Cuenta</h1><hr />
                        <h2 className={Styles.titleChanges}>Edita la configuración de tu cuenta
                            y cambia la contraseña aquí.</h2>
                        {console.log(data.me.name)}
                    </div>
                    <div className={Styles.dataMainContainer}>
                        <h2 className={Styles.titleData}>Datos personales</h2><hr />
                        <h3 className={Styles.subtitleData}>Cambiar Nombre</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.name}
                            </p>
                            <button className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} onClick={change} /></button>
                        </div>
                        <h3 className={Styles.subtitleData}>Cambiar Télefono</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.cellphone}
                            </p>
                            <button className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} onClick={change} /></button>
                        </div>
                        <h3 className={Styles.subtitleData}>Fecha de nacimiento</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.birthDate}
                            </p>
                            <button className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} onClick={change} /></button>
                        </div>
                        <div className={Styles.btnContainer}>
                            <button className={Styles.btnChange}>Cambiar las preferencias</button>
                        </div>
                    </div>
                    <div className={Styles.passContainer}>
                        <h2 className={Styles.titlePass}>Contraseña</h2><hr />
                        <form className={Styles.inputContainer}>
                            <input className={Styles.input} type="password" placeholder='Introducir contraseña actual'></input>
                            <input className={Styles.input} type="password" placeholder='Introducir nueva contraseña'></input>
                            <input className={Styles.input} type="password" placeholder='Introducir nueva contraseña de nuevo'></input>
                            <div className={Styles.btnContainer}>
                                <button className={Styles.btnChange}>Cambiar La Contraseña</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }</>;
}

export default Me