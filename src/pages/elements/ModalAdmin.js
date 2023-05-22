import { React, useEffect, useState } from 'react'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import Styles from '../../styles/elementStyles/ModalAdmin.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import Image from 'next/image'
import InputComponent from './Input'

function ModalAdmin({message, value,setNew,err,exp }) {



    const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

    const handleShow = () => {setShow(true);}

    const [newValue,setNewValue]= useState("");
    const [show, setShow] = useState(false);
    const [error, setError] = useState("");
    
    const [date, setDate] = useState({ value: "", valid: true });


    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


        //ONCHANGE FOR INPUT METHODS
        const onChange = (e) => {
            setNewValue(e.target.value)
        }
    //UPDATE THE NAME AND PHONE
    const changeData = async  () => {
        switch (message) {
            case "Cambia el nombre":
                try {
                    setNew(newValue)
                    setNewValue("")
                    handleClose()
                } catch (error) {
                    console.log(error)
                }
                break;
            case "Cambia el telefono":
                try {
                    setNew(newValue);
                    setNewValue("")
                    handleClose()
                } catch (error) {
                    console.log(error.message)
                }
                break;
            case "Cambia la fecha de nacimiento":
                try {
                   setNew(date.value)
                   handleClose()
                } catch (error) {
                    console.log(error.message)
                }
                break;
            case "Cambia la contraseña":
                try {
                    setNew[newValue]
                    setNewValue("")
                    handleClose()
                } catch (error) {
                    console.log(error.message)
                }
                break;
        }
    }
    const handleClose = () => setShow(false);



   const valid =()=>{
    if(message!="Cambia la fecha de nacimiento"){
        if(exp.test(newValue)){
            setError("")
        }else{
            setError(err)
        }
    }else{


    }
    
}

const validarFecha = () => {
    if (date.value !== '') {
        const fecha = date.value.split("-")
        const fechaHoy = new Date(Date.now()).toISOString().split("T")[0].split("-")
        if (fechaHoy[0] - fecha[0] > 18) {
            setDate((prevState) => { return { ...prevState, valid: true } })
        } else {
            setDate((prevState) => { return { ...prevState, valid: false } })
        }
    }
}

    return (
        <>
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
                        {exp ?
                        <>
                        <input 
                        onKeyUp={valid} className={Styles.input} placeholder={message} required value={newValue} onChange={onChange}></input>
                        <label>{error}</label>
                        </>
                        :  

                         <InputComponent
                         estado={date}
                         cambiarEstado={setDate}
                         tipo="date"
                         label="Fecha de nacimiento"
                         placeholder="Fecha de nacimiento"
                         name="dateNac"
                         errorMsg="Elija una fecha válida"
                         funcion={validarFecha}
                     />
                        
                        }
                    
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
