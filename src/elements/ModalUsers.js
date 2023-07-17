//IMPORTS
import React, { useState } from 'react';
import Styles from '../styles/elementStyles/ModalTrips.module.css'
import Router from 'next/router';

//MUTATIONS
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../backendOperations/mutations/userMutations';

//COMPONENTS
import Modal from 'react-bootstrap/Modal';

//ICONS
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ModalUsers = ({userData,fun}) => {
    //MODAL NUMBER 1
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //MODAL NUMBER 2
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    //MUTATION
    
    const [deleteUser] = useMutation(DELETE_USER); 
    const [error,setError] = useState();



    const handleCloseConfirm = async () => { 
        try {
            await deleteUser({ variables: { email:userData.email} });
            
        } catch (error) {
            setError(error);
        } finally{
            if(!error){
            fun(userData.email)
            setShow1(false); setShow(false);
            }
        }
    }
    const handleShow1 = () => {setShow1(true); setShow(false);}
    
    //NAAYARI TOURS IMAGE
    const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

    const email=userData.email;

    function updateUser() {
        Router.push({
            pathname: '/User',
            query: { email }
        })
    } 

    return (
        <div>
            {/*BUTTON TO OPEN MODAL 1*/}
            <div className={Styles.buttonIcon}>
            <i className={Styles.icon} onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} ></FontAwesomeIcon></i>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={Styles.modalTitle}>
                        <img className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                        ¿QUE ACCIÓN QUIERES HACER?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={Styles.modalBody}>El usuario seleccionado es: {userData.name}<br />
                    Con correo electronico:{userData.email}
                </Modal.Body>
                <Modal.Footer className={Styles.modalFooter}>
                    <button className={Styles.btnDelete} onClick={handleShow1 }>Eliminar</button>
                    <button className={Styles.btnUpdate} onClick={updateUser}>Actualizar</button>
                </Modal.Footer>
            </Modal>
            {/*MODAL 2*/}
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title className={Styles.modalTitle}>
                        <img className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                        CONFIRMAR CAMBIO
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={Styles.modalBody}>
                    ¡ESTE USUARIO SE ELIMINARÁ DEL SISTEMA!
                </Modal.Body>
                <Modal.Footer className={Styles.modalFooter}>
                    <button className={Styles.btnCancel} onClick={handleClose1}>NO</button>
                    <button className={Styles.btnConfirm} onClick={handleCloseConfirm}>SÍ</button>
                    <p>{error}</p>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalUsers
