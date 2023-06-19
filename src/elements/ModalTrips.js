//IMPORTS
import React, { useState } from 'react';
import Styles from '../styles/elementStyles/ModalTrips.module.css'
import Router from 'next/router';

//MUTATIONS
import { useMutation } from '@apollo/client';
import { UPDATE_TRIP_STATUS } from '../backendOperations/mutations/tripMutations';

//COMPONENTS
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'

//ICONS
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const ModalTrips = ({ tripInfo,updateTrip}) => {
    //MODAL NUMBER 1
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false);}
    const updateInfo = () => {
        const tripNameData = tripInfo.tripName 
    Router.push({
        pathname: '../elements/UpdatingTrip',
        query: { tripNameData }
    })
    setShow(false);}
    const handleShow = () => setShow(true);
    //MODAL NUMBER 2
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleCloseConfirm = async () => { 
        const tripName = tripInfo.tripName
        const status = !tripInfo.tripStatus 
        await updateTripStatus({ variables: {  tripName: tripName,tripStatus: status }})
        updateTrip(tripName,status)
        setShow1(false)
    }
    const handleShow1 = () => {setShow1(true); setShow(false);}
    //MUTATION USE
    const [updateTripStatus] = useMutation(UPDATE_TRIP_STATUS);
    //NAAYARI TOURS IMAGE
    const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'
    return (
        <div>
            {/*BUTTON TO OPEN MODAL 1*/}
            <div className={Styles.buttonIcon}>
            <i className={Styles.icon} onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} ></FontAwesomeIcon></i>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={Styles.modalTitle}>
                        <Image className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                        ¿QUE ACCIÓN QUIERES HACER?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={Styles.modalBody}>El viaje seleccionado es: {tripInfo.tripName}<br />
                    En el lugar: {tripInfo.tripInformation.place}<br />
                    Precio: ${tripInfo.tripInformation.price[0].priceAmount}<br />
                    Descuento: {tripInfo.tripInformation.discount.available ? "Sí" : "No"}
                </Modal.Body>
                <Modal.Footer className={Styles.modalFooter}>
                    <button className={Styles.btnDelete} onClick={handleShow1}>Cambiar estado</button>
                    <button className={Styles.btnUpdate} onClick={updateInfo}>Actualizar</button>
                </Modal.Footer>
            </Modal>
            {/*MODAL 2*/}
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title className={Styles.modalTitle}>
                        <Image className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                        CONFIRMAR CAMBIO
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={Styles.modalBody}>
                    ¡ESTE VIAJE CAMBIARA DE ESTADO!
                </Modal.Body>
                <Modal.Footer className={Styles.modalFooter}>
                    <button className={Styles.btnCancel} onClick={handleClose1}>NO</button>
                    <button className={Styles.btnConfirm} onClick={handleCloseConfirm}>SÍ</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalTrips
