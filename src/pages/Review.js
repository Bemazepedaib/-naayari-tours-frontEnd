import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styles from '../styles/Review.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import Modal from 'react-bootstrap/Modal';
import { useQuery } from '@apollo/client';
import { ME } from '../backendOperations/querys/userQuerys';
import { Form, Spinner } from 'react-bootstrap';

const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

const Review = ({ tripName }) => {

    const { loading, error, data } = useQuery(ME);

    const [file, setFile] = useState(null);
    const [fileAux, setFileAux] = useState(null)
    const [review, setReview] = useState("")
    const [rating, setRating] = useState(0)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [infoMessage, setInfoMessage] = useState("")
    const [infoState, setInfoState] = useState(null)
    const [counter, setCounter] = useState();

    useEffect(() => {
        counter == 0 ? window.location.reload(true) : ""
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    const handleFileChange = (e) => {
        setFileAux(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const handleImageUpload = async () => {
        const url = 'https://naayari-tours-backend.up.railway.app/uploadImage'
        const formData = new FormData();
        formData.append('fileData', fileAux);
        formData.append('tripName', tripName);
        formData.append('user', data.me.name);
        formData.append('rating', rating);
        formData.append('review', review);
        const config = { headers: { 'Content-Type': 'multipart/form-data; boundary=${data._boundary}`,' } }
        try {
            setFile(null)
            setInfoMessage(<Spinner />)
            const response = await axios.post(url, formData, config)
            setInfoMessage(response.data);
            setInfoState(true)
            setCounter(2);
            setFileAux(null)
        } catch (error) {
            setFile(null)
            setInfoMessage(<Spinner />)
            console.error('Error uploading file:', error.message);
            setInfoMessage(error.response.data)
            setInfoState(false)
            setCounter(2);
            setFileAux(null)
        }
    };

    return !loading && !error && (
        <div className={Styles.mainContainer}>
            <div className={Styles.titleContainer}>
                <hr className={Styles.linea} />
                ¿Que opinas de este viaje?
                <div className={Styles.buttonContainer}>
                    <div className={Styles.btnReview} onClick={handleShow}>
                        <div className={Styles.paragraph}>¡Déjanos tu opinion!</div>
                    </div>
                </div>
                <hr className={Styles.linea} />
            </div>
            <Modal show={show} onHide={handleClose} size="lg" backdrop="static" keyboard={false}>
                <Modal.Header closeButton bsPrefix={Styles.modalHeader}>
                    <Image className={Styles.imageVIP} src={image} width={70} height={70} alt="Naayari tours" />
                    <Modal.Title bsPrefix={Styles.modalTitle}>¡Déjanos tu opinion!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={Styles.inputContainer}>
                        <div className={infoState === true ? Styles.success : Styles.failure}>
                            {infoMessage}
                        </div>
                        {!file && <label htmlFor="inputImage" className={Styles.btnInputReview}>
                            <div className={Styles.paragraph} >Seleccionar imagen</div>
                        </label>}
                        <input id="inputImage" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
                        {file &&
                            <div className={Styles.reviewContainer}>
                                <div className={Styles.imageContainer}>
                                    <FontAwesomeIcon icon={faX} className={Styles.icon} onClick={() => { setFile(null) }} />
                                    <Image src={file} width={500} height={500} alt='Review image' />
                                </div>
                                <label>{`Calificación: ${rating}`}</label>
                                <Form.Range
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                    min={1}
                                    max={5}
                                />
                                <textarea
                                    cols="50" rows="8"
                                    placeholder='¡Dejanos tu opinion!'
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                    className={Styles}
                                />
                                <div className={Styles.buttonContainer}>
                                    <div className={Styles.btnInputReview} onClick={handleImageUpload}>
                                        <div className={Styles.paragraph} >Mandar reseña</div>
                                    </div>
                                </div>
                            </div>}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
};

export default Review;