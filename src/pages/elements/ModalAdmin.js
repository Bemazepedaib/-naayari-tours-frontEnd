import { React, useState } from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Styles from '../../styles/elementStyles/ModalAdmin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import Image from 'next/image'
import { useMutation } from '@apollo/client';
import { UPDATE_USER_NAME_ADMIN, UPDATE_USER_CELL_ADMIN,UPDATE_USER_BIRTH_ADMIN } from '../mutations/userMutations';

function ModalAdmin({ema,message, value, setState }) {

    const [newValue,setNewValue]= useState();
    const [show, setShow] = useState(false);
    const [userName] = useMutation(UPDATE_USER_NAME_ADMIN);
    const [userCellAdmin] = useMutation(UPDATE_USER_CELL_ADMIN);
    const [userBirthAdmin] = useMutation(UPDATE_USER_BIRTH_ADMIN);

    const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

    const handleShow = () => {setShow(true);}

        //ONCHANGE FOR INPUT METHODS
        const onChange = (e) => {
            setNewValue(e.target.value)
        }
    //UPDATE THE NAME AND PHONE
    const changeData = async  () => {
        switch (message) {
            case "Cambia el nombre":
                try {
                    await userName({ variables: { newName: newValue, email:ema} });
                    handleClose();
                } catch (error) {
                    console.log(error)
                }
                break;
            case "Cambia el telefono":
                try {
                    await userCellAdmin({ variables: { newCell: newValue, email: ema } });
                    handleClose();
                } catch (error) {

                    console.log(error.message)
                }
                break;
            case "Cambia la fecha de nacimiento":
                try {
                    await userBirthAdmin({ variables: { newDate: newValue, email: ema } });
                    handleClose();
                } catch (error) {
                    console.log(error.message)
                }
                break;
        }
    }
    const handleClose = () => setShow(false);

    return (
        <>
        {                    
                    console.log(ema)}
            <i className={Styles.icon} onClick={handleShow}><FontAwesomeIcon icon={faPenToSquare} ></FontAwesomeIcon></i>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className={Styles.modalTitle}>
                        <Image className={Styles.image} src={image} width={100} height={100} alt="Naayari tours" />
                        {message}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className={Styles.modalBody}>
                    <input className={Styles.input} readOnly  
                        defaultValue={value} required></input>
                    <input className={Styles.input} placeholder={message} required value={newValue} onChange={onChange}></input>
                </Modal.Body>
                <Modal.Footer className={Styles.modalFooter}>
                    <Button className={Styles.btnSave} variant="btn btn-dark" onClick={changeData}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalAdmin;
