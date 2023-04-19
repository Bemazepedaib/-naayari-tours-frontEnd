import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'
import Styles from '../../styles/elementStyles/ModalReservation.module.css'

import React, { useState } from 'react'

function ModalReservation({ datos }) {

    const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

    const [show, setShow] = useState(false, null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log("modal")
    console.log(datos)

    return (
        <>
            <Button bsPrefix={Styles.btn} onClick={handleShow} >
                Haz tu reservación
            </Button>

            <Modal show={show} onHide={handleClose} centered size="lg" backdrop="static" keyboard={false}>
                <Modal.Header bsPrefix={Styles.modalHeader} closeButton>
                    <Image src={image} width={70} height={70} alt="Naayari tours" />
                    <Modal.Title>Confirma tus datos</Modal.Title>
                </Modal.Header>
                <Modal.Body bsPrefix={Styles.modalBody}>Tus datos son: {datos}</Modal.Body>
                <Modal.Footer bsPrefix={Styles.centerButton}>
                    <Button bsPrefix={Styles.modalButton} onClick={handleClose}>
                        Confirmar datos
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalReservation