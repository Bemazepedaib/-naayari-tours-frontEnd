import { React, useState } from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Styles from '../../styles/elementStyles/ModalAdmin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import Image from 'next/image'


function ModalAdmin({ type, val }) {

    const initialValue = {
        title: '',
        value: '',
        type: '',
    }
    const [show, setShow] = useState(false);
    const [info, setInfo] = useState(initialValue);


    const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

    const handleShow = () => {
        setInfo(initialValue)
        switch (type) {
            case "name":
                const value1 = {
                    title: 'Cambia el nombre',
                    value: val,
                    type: 'text',
                    message: 'Introduce el nuevo nombre'
                }
                setInfo(value1)
                break;
            case "cellphone":
                const value2 = {
                    title: 'Cambia el télefono',
                    value: val,
                    type: 'text',
                    message: 'Introduce el nuevo télefono'
                }
                setInfo(value2)
                break;
            case "birthDate":
                const value3 = {
                    title: 'Cambia la fecha de nacimiento',
                    value: val,
                    type: 'date',
                    message: 'Introduce la fecha de nacimiento'
                }
                setInfo(value3)
                break;
            case "email":
                const value4 = {
                    title: 'Cambia el email',
                    value: val,
                    type: 'text',
                    message: 'Introduce el email'
                }
                setInfo(value4)
                break;
            case "userLevel":
                const value5 = {
                    title: 'Cambia el Nivel',
                    value: val,
                    type: 'text',
                    message: 'Introduce el nivel'
                }
                setInfo(value5)
                break;
        }
        setShow(true);
    }
    const handleClose = () => setShow(false);

    return (
        <>
            <i className={Styles.icon} onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} ></FontAwesomeIcon></i>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={Styles.modalTitle}>
                        <Image className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                        {info.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={Styles.modalBody}>
                    <input className={Styles.input} readOnly type={info.type} placeholder={info.message}
                        defaultValue={info.value} required></input>
                    <input className={Styles.input} placeholder={info.message} required></input>
                </Modal.Body>
                <Modal.Footer className={Styles.modalFooter}>
                    <Button className={Styles.btnSave} variant="btn btn-dark" onClick={handleClose}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAdmin;
