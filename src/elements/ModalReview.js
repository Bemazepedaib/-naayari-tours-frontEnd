import React, { useState, useEffect } from 'react'
import Styles from '../styles/elementStyles/ModalReview.module.css'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DELETE_REVIEW } from '../backendOperations/mutations/tripMutations'
import { useMutation } from '@apollo/client';
import { Spinner } from 'react-bootstrap';

const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

function ModalReview({ tripName, review }) {

    const [deleteReview] = useMutation(DELETE_REVIEW)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [subShow, setSubShow] = useState(false)
    const handleSubClose = () => setSubShow(false);
    const handleSubShow = () => setSubShow(true);
    const [counter, setCounter] = useState();
    const [message, setMessage] = useState("¿Eliminar la reseña?")

    useEffect(() => {
        counter == 0 ? window.location.reload(true) : ""
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const handleDelete = async () => {
        setMessage(<Spinner/>)
        try {
            const mutationResponse = await deleteReview({
                variables: {
                    tripName: tripName,
                    tripReview: review
                }
            })
            setMessage(mutationResponse.data.deleteReview)
            setCounter(2);
        } catch (err) {
            setMessage(err.message)
            setCounter(2);
        }
    }

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.buttonIcon}>
                <i className={Styles.icon} onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} ></FontAwesomeIcon></i>
            </div>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton bsPrefix={Styles.modalHeader}>
                    <img src={image} width={70} height={70} alt="Naayari tours" priority={true} />
                    <Modal.Title bsPrefix={Styles.modalTitle}>Manejo de reseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={Styles.reviewContainer}>
                        {review.user}
                        <div className={Styles.miniTitulo}>Foto:</div>
                        <img src={'https://drive.google.com/uc?export=view&id=' + review.photo} width={300} height={300} alt="Reseña" />
                        {review.review}
                    </div>
                </Modal.Body>
                <Modal.Footer bsPrefix={Styles.modalFooter}>
                    <button className={Styles.btnDelete} onClick={handleSubShow}>Eliminar reseña</button>
                    <Modal show={subShow} size='sm' centered backdrop="static" keyboard={false}>
                        <Modal.Header bsPrefix={Styles.modalHeader}>
                            <img src={image} className={Styles.image} width={70} height={70} alt="Naayari tours" />
                        </Modal.Header>
                        <Modal.Body bsPrefix={Styles.modalBody}>{message}</Modal.Body>
                        <Modal.Footer bsPrefix={Styles.modalFooter}>
                            <Button bsPrefix={Styles.btnDelete} onClick={handleSubClose}>
                                Cancelar
                            </Button>
                            <Button bsPrefix={Styles.btnConfirm} onClick={handleDelete}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalReview
