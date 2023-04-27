//IMPORTS
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';

//QUERYS AND MUTATIONS
import { useQuery, useMutation } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import { UPDATE_USER_NAME, UPDATE_USER_CELL, UPDATE_USER_PASSWORD } from '../mutations/userMutations';

//COMPONENTS
import Navbar from './Navbar';
import Footer from './Footer';
//CSS
import Styles from '../../styles/Me.module.css'

function Me() {
    //MUTATIONS
    const [userName] = useMutation(UPDATE_USER_NAME);
    const [userCell] = useMutation(UPDATE_USER_CELL);
    const [userPass] = useMutation(UPDATE_USER_PASSWORD);
    const { loading, error, data } = useQuery(ME);
    console.log(data)
    //UTIL STUFF
    const image = 'https://drive.google.com/uc?export=view&id=1788oTZ-Mfs-oYI8SyymPibHNa7HtQvJ3'
    const initialValue = {
        title: '',
        value: '',
        type: '',
    }

    //STATE HOOKS
    const [updateValue, setUpdateValue] = useState('');
    const [password, setPassWord] = useState("");
    const [confirmValue, setConfirmValue] = useState("");
    const [info, setInfo] = useState(initialValue);
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);

    //FUNCTIONS
    const onChange = (e) => {
        if (e.target.name === "value") {
            setUpdateValue(e.target.value)
        } else if (e.target.name === "confirmValue") {
            setConfirmValue(e.target.value)
        } else {
            setPassWord(e.target.value)
        }
    }
    const goPreferences = () => {
        Router.push({ pathname: '../elements/MePreferences' })
    }
    const changeData = async () => {
        handleClose()
        switch (info.data) {
            case "name":
                await userName({ variables: { newName: updateValue, password: password } })
                break;
            case "telefono":
                await userCell({ variables: { newCell: updateValue, password: password } })
                break;
        }
    }
    const changePassword = async (e) => {
        e.preventDefault();
        console.log(updateValue)
        console.log(confirmValue)
        if (updateValue === confirmValue) {
            await userPass({ variables: { newPassword: updateValue, password: password } });
        }
    }
    const handleShow = (pressedButton) => {
        setInfo(initialValue)
        switch (pressedButton) {
            case "name":
                const value1 = {
                    title: 'Cambia tu nombre',
                    value: data.me.name,
                    type: 'text',
                    message: 'Introduce tu nuevo nombre',
                    data: 'name'
                }
                setInfo(value1)
                setUpdateValue(data.me.name + "")
                break;
            case "telefono":
                const value2 = {
                    title: 'Cambia tu télefono',
                    value: data.me.cellphone,
                    type: 'text',
                    message: 'Introduce tu nuevo télefono',
                    data: 'telefono'
                }
                setInfo(value2)
                setUpdateValue(data.me.cellphone)
                break;
        }
        setShow(true);
    }
    if (error) { Router.push({ pathname: '/sites/Login' }) }
    if (loading) return (<div><Navbar />Loading...</div>)

    return <>{!loading && !error &&
        (
            <div>
                {console.log(data.me)}
                <Navbar></Navbar>
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
                        {/*TOP IMAGE HERE.*/}
                        <div className={Styles.topImage}>
                            <Image src={image} width={200} height={220} alt="Naayari tours" />
                        </div>
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
                                            <span className={Styles.data}>{data.me.name}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => handleShow('name')} className={Styles.btnEdit}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                    </div>
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
                                            <span className={Styles.data}>{data.me.cellphone}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button onClick={() => handleShow('telefono')} className={Styles.btnEdit}>
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*PREFERENCES DATA HERE.*/}
                        <div className={Styles.dataPreferenceContainer}>
                            <h3 className={Styles.subtitleData}>PREFERENCIAS</h3>
                            <div className={Styles.dataPreferenceSubContainer}>
                                {data.me.preferences.map(preferences => (
                                    <span>&bull; {preferences.preferenceType}</span>
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
                                coupons.couponApplied ? <div></div>
                                    : <div className={Styles.couponsCard}>
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
                                type="password" placeholder='Introducir contraseña actual'>

                            </input>
                            <input className={Styles.input} value={updateValue} onChange={onChange}
                                type="password" placeholder='Introducir nueva contraseña' name='value'>

                            </input>
                            <input className={Styles.input} value={confirmValue} onChange={onChange}
                                type="password" placeholder='Introducir nueva contraseña de nuevo' name='confirmValue'>

                            </input>
                            <button type="submit" className={Styles.btnChange}>CAMBIAR LA CONTRASEÑA</button>
                        </form>
                    </div>
                </div>
                <Footer />
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className={Styles.modalTitle}>
                            <Image className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                            {info.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={Styles.modalBody}>
                        <input className={Styles.input} type={info.type} placeholder={info.message}
                            value={updateValue} name='value'
                            onChange={onChange} required>
                        </input>
                        <input className={Styles.input} type="password"
                            placeholder='Introduce tu contraseña' value={password}
                            onChange={onChange} required>
                        </input>
                    </Modal.Body>
                    <Modal.Footer className={Styles.modalFooter}>
                        <Button className={Styles.btnSave} variant="btn btn-dark" onClick={() => changeData()}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }</>;
}

export default Me