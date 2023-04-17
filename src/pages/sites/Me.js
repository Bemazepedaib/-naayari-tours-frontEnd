import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import Navbar from './Navbar';
import Styles from '../../styles/Me.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
function Me() {
    function change(){

    }
    const { loading, error, data } = useQuery(ME);

    if (error) return (<div><Navbar />{error.message}</div>)
    if (loading) return (<div><Navbar />Loading...</div>)

    return <>{!loading && !error &&
        (
            <div>
                <Navbar></Navbar>
                <div className={Styles.mainContainer}>
                    <div className={Styles.titlesContainer}>
                        <h1 className={Styles.titleCount}>Cuenta</h1>
                        <h2 className={Styles.titleChanges}>Edita la configuración de tu cuenta 
                        y cambia la contraseña aquí.</h2>
                        {console.log(data.me.name)}
                    </div>
                    <div className={Styles.emailContainer}>
                        <h2 className={Styles.titleEmail}>correo Electrónico</h2><hr/>
                        <div className={Styles.emailDataContainer}>
                            <p className={Styles.emailData}>
                               <b>{data.me.email}</b>
                            </p>
                            <button className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} onClick={change} /></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }</>;
}

export default Me