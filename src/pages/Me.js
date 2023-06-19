//IMPORTS
import React, { useState } from 'react';
import Router from 'next/router';

//QUERYS AND MUTATIONS
import { useQuery, useMutation } from '@apollo/client';
import { ME } from '../backendOperations/querys/userQuerys';
import { UPDATE_USER_PASSWORD } from '../backendOperations/mutations/userMutations';

//COMPONENTS
import Navbar from './Navbar';
import Footer from './Footer';
import ModalMe from '../elements/ModalMe';
//CSS
import Styles from '../styles/Me.module.css'

function Me() {
    //MUTATIONS AND QUERYS
    const [userPass] = useMutation(UPDATE_USER_PASSWORD);
    const { loading, error, data } = useQuery(ME);


    //STATE HOOKS
    const [password, setPassWord] = useState("");
    const [updateValue, setUpdateValue] = useState("");
    const [confirmValue, setConfirmValue] = useState("");
    const [myMessage, setmyMessage] = useState('');
    const [myErrorStyle, setmyErrorStyle] = useState();

    const [newName, setNewName] = useState("");
    const [newCell, setNewCell] = useState("")

    //FUNCTIONS
    //ROUTE FOR GO TO PREFERENCES
    const goPreferences = () => {
        Router.push({ pathname: '/MePreferences' })
    }
    //FOR UPDATE PASSWORD
    const onChange = (e) => {
        if (e.target.name === "password") {
            setPassWord(e.target.value);
        } else if (e.target.name === "updateValue") {
            setUpdateValue(e.target.value);
        } else {
            setConfirmValue(e.target.value);
        }
    }
    //UPDATE PASSWORD
    const changePassword = async (e) => {
        e.preventDefault();

        if (updateValue === "" || confirmValue === "" || password === "") {
            setmyMessage("Porfavor llene todos los campos");
            setmyErrorStyle(Styles.errorMessage);
        } else if (updateValue === confirmValue) {
            if (updateValue < 6) {
                setmyMessage("Porfavor Elija una contraseña de almenos 6 digitos");
                setmyErrorStyle(Styles.errorMessage);
                setUpdateValue("");
                setConfirmValue("");
            } else {
                try {
                    setmyMessage(await userPass({ variables: { newPassword: updateValue, password: password } }));
                    setPassWord("")
                    setUpdateValue("");
                    setConfirmValue("");
                    setmyMessage("Contraseña Actualizada");
                    setmyErrorStyle(Styles.sucessMessage);
                } catch (error) {
                    setmyMessage(error.message)
                    setmyErrorStyle(Styles.errorMessage);
                }
            }
        } else {
            setmyMessage("Porfavor confirma la contraseña de manera correcta");
            setUpdateValue("");
            setConfirmValue("")
            setmyErrorStyle(Styles.errorMessage);
        }
    }
    if (error) { Router.push({ pathname: '/Login' }) }
    if (loading) return (<div><Navbar />Loading...</div>)

    return <>{!loading && !error &&
        (
            <div>
                <Navbar />
                <div className={Styles.mainContainer}>
                    {/*USER LEVEL.*/}
                    <div className={Styles.circleLvl}>
                        <span className={Styles.numberLvl}>{data.me.userLevel}</span>
                        <span className={Styles.numberLvlDesc}>NIVEL</span>
                    </div>
                    {/*THIS DIV IS FOR THE TITLE, ACCOUNT*/}
                    <div className={Styles.accountCointainer}>
                        <h1 className={Styles.titleAccount}>DETALLES DE CUENTA</h1>
                        <hr />
                        <h2 className={Styles.titleChanges}>EDITA LOS DATOS PERSONALES DE TU CUENTA Y
                            CAMBIA TU CONTRASEÑA AQUÍ</h2>
                    </div>
                    {/*PERSONAL DATA HERE.*/}
                    <div className={Styles.dataMainContainer}>
                        <h2 className={Styles.titleData}>DATOS PERSONALES</h2>
                        <hr />

                        {/*INFO THAT NOT CHANGE HERE.*/}
                        <div className={Styles.persoInfo}>
                            <div className={Styles.persoInfoContainer}>
                                <div>
                                    <h3 className={Styles.persoInfoSub}>SEXO</h3>
                                </div>
                                <div>
                                    <div className={Styles.persoInfoData}>
                                        <span>{(data.me.sex === "male" ? "Hombre" : data.me.sex === "female" ? "Mujer" : "Otro")}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.persoInfoContainer}>
                                <div>
                                    <h3 className={Styles.persoInfoSub}>EMAIL</h3>
                                </div>
                                <div>
                                    <div className={Styles.persoInfoData}>
                                        <span className={Styles.data}>{data.me.email}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.persoInfoContainer}>
                                <div>
                                    <h3 className={Styles.persoInfoSub}>FECHA DE NACIMIENTO</h3>
                                </div>
                                <div>
                                    <div className={Styles.persoInfoData}>
                                        <span className={Styles.data}>{data.me.birthDate}</span>
                                    </div>
                                </div>
                            </div>
                            <div className={Styles.persoInfoContainer}>
                                <div>
                                    <h3 className={Styles.persoInfoSub}>¿MEMBRESIA ACTIVA?</h3>
                                </div>
                                <div>
                                    <div className={Styles.persoInfoData}>
                                        <span>{data.me.membership ? 'Activa' : 'Inactiva'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.everyDataSubContainer}>
                            {/*NAME DATA HERE.*/}
                            <div className={Styles.dataParentContainer}>
                                <div>
                                    <h3 className={Styles.subtitleData}>NOMBRE ACTUAL</h3>
                                </div>
                                <div className={Styles.dataSubContainer}>
                                    <div>
                                        <div className={Styles.dataContainer}>
                                            <span className={Styles.data}>{newName === "" ? data.me.name : newName}</span>
                                        </div>
                                    </div>
                                    <ModalMe className={Styles.btnEdit} title={'Cambia tu nombre'}
                                        message={'Introduce tu nuevo nombre'} setState={setNewName} />
                                </div>
                            </div>
                            {/*PHONE DATA HERE.*/}
                            <div className={Styles.dataParentContainer}>
                                <div>
                                    <h3 className={Styles.subtitleData}>TÉLEFONO ACTUAL</h3>
                                </div>
                                <div className={Styles.dataSubContainer}>
                                    <div>
                                        <div className={Styles.dataContainer}>
                                            <span className={Styles.data}>{newCell === "" ? data.me.cellphone : newCell}</span>
                                        </div>
                                    </div>
                                    <ModalMe className={Styles.btnEdit} title={'Cambia tu Teléfono'}
                                        message={'Introduce tu nuevo número de teléfono'} setState={setNewCell} />
                                </div>
                            </div>
                        </div>
                        {/*PREFERENCES DATA HERE.*/}
                        <div className={Styles.dataPreferenceContainer}>
                            <h3 className={Styles.subtitleData}>PREFERENCIAS</h3>
                            <div className={Styles.dataPreferenceSubContainer}>
                                {data.me.preferences.map(preferences => (
                                    <span key={preferences.preferenceType}>&bull; {preferences.preferenceType}</span>
                                ))}
                            </div>
                            <button className={Styles.btnChange} onClick={() => goPreferences()}>CAMBIAR LAS PREFERENCIAS</button>
                        </div>
                    </div>
                    {/*CUOPONS.*/}
                    <div className={Styles.couponsContainer}>
                        <h2 className={Styles.titleCoupons}>CUPONES</h2>
                        <hr />
                        <div className={Styles.couponSubContainer}>
                            {data.me.coupons.map(coupons => (
                                !coupons.couponApplied ? null
                                    : <div key={coupons.couponType + coupons.couponDate} className={Styles.couponsCard}>
                                        <span>Nombre: {coupons.couponType}</span>
                                        <span>Descripción: {coupons.couponDescription}</span>
                                        <span>Fecha: {coupons.couponDate}</span>
                                        <span>Descuento: ${coupons.couponAmount}</span>
                                        <span>{coupons.couponApplied}</span>
                                    </div>
                            ))}
                        </div>
                    </div>
                    {/*CHANGE PASSWORD DATA HERE.*/}
                    <div className={Styles.passContainer}>
                        <h2 className={Styles.titlePass}>CONTRASEÑA</h2>
                        <hr />
                        <form className={Styles.inputContainer} onSubmit={changePassword}>
                            <input className={Styles.input} value={password} onChange={onChange}
                                type="password" placeholder='Introducir contraseña actual' 
                                autoComplete = "on" name='password'>

                            </input>
                            <input className={Styles.input} value={updateValue} onChange={onChange}
                                type="password" placeholder='Introducir nueva contraseña'
                                autoComplete = "on" name='updateValue'>

                            </input>
                            <input className={Styles.input} value={confirmValue} onChange={onChange}
                                type="password" placeholder='Introducir nueva contraseña de nuevo'
                                autoComplete = "on" name='confirmValue'>
                            </input>
                            <button type="submit" className={Styles.btnChange}>CAMBIAR LA CONTRASEÑA</button>
                        </form>
                        <div className={myErrorStyle}>{myMessage}</div>
                    </div>
                </div>
                <Footer />
            </div >
        )
    }</>;
}

export default Me