import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useMutation } from '@apollo/client';
import Styles from '../../styles/elementStyles/ModalTrips.module.css'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { DELETE_TRIP } from '../mutations/tripMutations';
const ModalTrips = ({ tripInfo,deletrip}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShow1(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleCloseConfirm = async () => { 
        const nombreViaje = tripInfo.tripName
        await deleteTrip({ variables: {  tripName: nombreViaje }});
        deletrip(nombreViaje);
        setShow1(false);}
    const handleShow1 = () => {setShow1(true); setShow(false);}
    const [deleteTrip] = useMutation(DELETE_TRIP);
    const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'
    return (
        <div>
            <i className={Styles.icon} onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} ></FontAwesomeIcon></i>
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
                    <button className={Styles.btnDelete} onClick={handleShow1 }>Eliminar</button>
                    <button className={Styles.btnUpdate} onClick={handleClose}>Actualizar</button>
                </Modal.Footer>
            </Modal>
            <Modal show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                    <Modal.Title className={Styles.modalTitle}>
                        <Image className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                        CONFIRMAR ELIMINACIÓN
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={Styles.modalBody}>
                    ¡ESTE VIAJE YA NO SE PODRA RECUPERAR!
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
