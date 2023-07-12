import React, { useState } from 'react'
import Styles from '../styles/elementStyles/ModalReview.module.css'

import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

function ModalReview({ review }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const img = `https://drive.google.com/uc?export=view&id=${review.photo}`

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.buttonIcon}>
                <i className={Styles.icon} onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} ></FontAwesomeIcon></i>
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton bsPrefix={Styles.modalHeader}>
                    <Image src={image} width={70} height={70} alt="Naayari tours" />
                    <Modal.Title bsPrefix={Styles.modalTitle}>Manejo de reseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={Styles.reviewContainer}>
                        {review.user}
                        <div className={Styles.miniTitulo}>Foto:</div>
                        <Image src={img} width={300} height={300} alt="Reseña" />
                        {review.review}
                    </div>
                </Modal.Body>
                <Modal.Footer bsPrefix={Styles.modalFooter}>
                    <button className={Styles.btnDelete}>Eliminar reseña</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalReview
