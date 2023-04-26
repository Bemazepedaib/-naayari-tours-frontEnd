import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import Navbar from './Navbar';
import Styles from '../../styles/Me.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'next/image'

import { UPDATE_USER_NAME, UPDATE_USER_CELL, UPDATE_USER_PASSWORD } from '../mutations/userMutations';

import Router from 'next/router';

function Me() {
    const [userName] = useMutation(UPDATE_USER_NAME);
    const [userCell] = useMutation(UPDATE_USER_CELL);
    const [userPass] = useMutation(UPDATE_USER_PASSWORD);
    const onChange = (e) => {
        if(e.target.name === "value"){
            setUpdateValue(e.target.value)
        }else if(e.target.name === "confirmValue"){
            setConfirmValue(e.target.value)
        }else{
            setPassWord(e.target.value)
        }
    }
    const initialValue = {
        title: '',
        value: '',
        type: '',
    }
    const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'
    const [info, setInfo] = useState(initialValue);
    const [updateValue, setUpdateValue] = useState('');
    const [password, setPassWord] = useState("");
    const [confirmValue, setConfirmValue] = useState("");
    const handleClose = () => setShow(false);
    const [show, setShow] = useState(false);
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
        if(updateValue === confirmValue){
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
    const { loading, error, data } = useQuery(ME);

    if (error) { Router.push({ pathname: '/sites/Login' }) }
    if (loading) return (<div><Navbar />Loading...</div>)

    return <>{!loading && !error &&
        (
            <div>
                <Navbar></Navbar>
                <div className={Styles.mainContainer}>
                    <div className={Styles.titlesContainer}>
                        <h2 className={Styles.titleCount}>CUENTA</h2><hr />
                        <h3 className={Styles.titleChanges}>EDITA LOS DATOS PERSONALES DE TU CUENTA Y
                            CAMBIA LA CONTRASEÑA AQUÍ</h3>
                    </div>
                    <div className={Styles.dataMainContainer}>
                        <h2 className={Styles.titleData}>DATOS PERSONALES</h2><hr />
                        <h3 className={Styles.subtitleData}>CAMBIAR NOMBRE</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.name}
                            </p>
                            <button onClick={() => handleShow('name')} className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} /></button>
                        </div>
                        <h3 className={Styles.subtitleData}>CAMBIAR TÉLEFONO</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.cellphone}
                            </p>
                            <button onClick={() => handleShow('telefono')} className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} /></button>
                        </div>
                        <div className={Styles.btnContainer}>
                            <button className={Styles.btnChange} onClick={() => goPreferences()}>CAMBIAR LAS PREFERENCIAS</button>
                        </div>
                    </div>
                    <div className={Styles.passContainer}>
                        <form className={Styles.inputContainer} onSubmit={changePassword}>
                            <h2 className={Styles.titlePass}>CONTRASEÑA</h2>
                            <hr className={Styles.hr} />
                            <input className={Styles.input} value={password} onChange={onChange} 
                            type="password" placeholder='Introducir contraseña actual'>

                            </input>
                            <input className={Styles.input} value={updateValue} onChange={onChange} 
                            type="password" placeholder='Introducir nueva contraseña' name='value'>

                            </input>
                            <input className={Styles.input} value={confirmValue} onChange={onChange} 
                            type="password" placeholder='Introducir nueva contraseña de nuevo' name='confirmValue'>

                            </input>
                            <div className={Styles.btnContainer}>
                                <button type="submit" className={Styles.btnChange}>CAMBIAR LA CONTRASEÑA</button>
                            </div>
                        </form>
                    </div>
                </div>
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
            </div>
        )
    }</>;
}

export default Me