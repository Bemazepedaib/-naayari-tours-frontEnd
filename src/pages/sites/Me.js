import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import Navbar from './Navbar';
import Styles from '../../styles/Me.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function Me() {
    const [show, setShow] = useState(false);
    console.log(show);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { loading, error, data } = useQuery(ME);

    if (error) return (<div><Navbar />{error.message}</div>)
    if (loading) return (<div><Navbar />Loading...</div>)
    if (error) return (<div><Navbar /><div className={Styles.errorMe}>{error.message}</div></div>)
    if (loading) return (<div><Navbar />Loading...</div>)

    return <>{!loading && !error &&
        (
            <div>
                <Navbar></Navbar>
                <div className={Styles.mainContainer}>
                    <div className={Styles.titlesContainer}>
                        <h1 className={Styles.titleCount}>CUENTA</h1><hr />
                        <h2 className={Styles.titleChanges}>EDITA LOS DATOS PERSONALES DE TU CUENTA Y
                            CAMBIA LA CONTRASEÑA AQUÍ</h2>
                        {console.log(data.me.name)}
                    </div>
                    <div className={Styles.dataMainContainer}>
                        <h2 className={Styles.titleData}>DATOS PERSONALES</h2><hr />
                        <h3 className={Styles.subtitleData}>CAMBIAR NOMBRE</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.name}
                            </p>
                            <button onClick={handleShow}  className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare}/></button>
                        </div>
                        <h3 className={Styles.subtitleData}>CAMBIAR TÉLEFONO</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.cellphone}
                            </p>
                            <button onClick={handleShow} className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} /></button>
                        </div>
                        <h3 className={Styles.subtitleData}>FECHA DE NACIMIENTO</h3>
                        <div className={Styles.dataContainer}>
                            <p className={Styles.data}>
                                {data.me.birthDate}
                            </p>
                            <button onClick={handleShow} className={Styles.btnEdit}> <FontAwesomeIcon icon={faPenToSquare} /></button>
                        </div>
                        <div className={Styles.btnContainer}>
                            <button className={Styles.btnChange}>CAMBIAR LAS PREFERENCIAS</button>
                        </div>
                    </div>
                    <div className={Styles.passContainer}>
                        <h2 className={Styles.titlePass}>CONTRASEÑA</h2><hr/>
                        <form className={Styles.inputContainer}>
                            <input className={Styles.input} type="password" placeholder='Introducir contraseña actual'></input>
                            <input className={Styles.input} type="password" placeholder='Introducir nueva contraseña'></input>
                            <input className={Styles.input} type="password" placeholder='Introducir nueva contraseña de nuevo'></input>
                            <div className={Styles.btnContainer}>
                                <button className={Styles.btnChange}>CAMBIAR LA CONTRASEÑA</button>
                            </div>
                        </form>
                    </div>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }</>;
}

export default Me