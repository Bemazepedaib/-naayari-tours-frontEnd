import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import Image from 'next/image'
import Router from "next/router";

import Styles from '../../styles/elementStyles/ModalEvent.module.css'

import { useQuery } from '@apollo/client';
import { GET_USER } from '../querys/userQuerys';
import { GET_EVENTS } from '../querys/eventQuerys';

function ModalEvent({ user, trip, date, deleteReservation, updateReservation }) {

    const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

    const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER, { variables: { email: user.userEmail } });
    const { loading, eventLoading, error: eventError, data: eventData } = useQuery(GET_EVENTS)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showConfirm1, setShowConfirm1] = useState(false)
    const handleConfirmClose1 = () => setShowConfirm1(false);
    const handleConfirmShow1 = () => setShowConfirm1(true);
    const [confirmMessage1, setConfirmMessage1] = useState("¿Está seguro que desea eliminar la reservación?");
    const [showConfirm2, setShowConfirm2] = useState(false)
    const handleConfirmClose2 = () => setShowConfirm2(false);
    const handleConfirmShow2 = () => setShowConfirm2(true);
    const [confirmMessage2, setConfirmMessage2] = useState("¿Está seguro que desea cambiar de viaje la reservación?");
    const [event, selEvent] = useState("")

    let id = 0;

    const makeContract = () => {
        Router.push({
            pathname: '/elements/PDFContract', query: {
                cliente: userData.user.name,
                celular: userData.user.cellphone,
                lugares: user.companion.length + 1,
                tour: trip,
                fechaViaje: date,
                anticipo: user.advancePayment,
                resto: (user.fullPayment - user.advancePayment)
            }
        })
    }

    if (userLoading) return (<Spinner />)

    return (!eventLoading && !eventError && !userLoading && !userError &&
        <>
            <button className={Styles.btn} onClick={handleShow}>
                {userData.user.name}
            </button>
            <Modal show={show} onHide={handleClose} size='xl' backdrop="static" keyboard={false} centered>
                <Modal.Header bsPrefix={Styles.modalHeader} closeButton>
                    <Image src={image} className={Styles.image} width={70} height={70} alt="Naayari tours" />
                    <Modal.Title bsPrefix={Styles.modalTitle}>Datos de {user.userEmail} </Modal.Title>
                </Modal.Header>
                <Modal.Body bsPrefix={Styles.modalBody}>
                    <div className={Styles.modalTitle}>Cliente que reserva</div>
                    <Table>
                        <tbody className={Styles.tableBody}>
                            <tr>
                                <td>Nombre</td>
                                <td>{userData.user.name}</td>
                            </tr>
                            <tr>
                                <td>Número de Celular</td>
                                <td>{userData.user.cellphone}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{userData.user.email}</td>
                            </tr>
                        </tbody>
                    </Table>
                    {user.companion.length > 0 ? <div className={Styles.modalTitle}>Acompañantes</div> : null}
                    {user.companion.length > 0 ?
                        <Table>
                            <thead className={Styles.tableHeader}>
                                <tr>
                                    <th> Tipo de acompañante </th>
                                    <th> Nombre de acompañante </th>
                                    <th> Teléfono de acompañante </th>
                                </tr>
                            </thead>
                            <tbody className={Styles.tableBody}>
                                {user.companion?.map(comp => (
                                    <tr key={id++}>
                                        <td>{comp.companionType === "adult" ? "Adulto" : comp.companionType === "child" ? "Niño" : "Bebé"}</td>
                                        <td>{comp.companionName}</td>
                                        <td>{comp.companionCell}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> : null}
                    <div className={Styles.modalTitle}>Total a pagar</div>
                    <Table>
                        <tbody className={Styles.tableBody}>
                            <tr>
                                <td> <b>Total a pagar</b> </td>
                                <td> {user.fullPayment} </td>
                            </tr>
                            <tr>
                                <td> <b>Anticipo &#40;50%&#41;</b> </td>
                                <td> {user.advancePayment} </td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer bsPrefix={Styles.modalFooter}>
                    <Button bsPrefix={Styles.updateButton} onClick={handleConfirmShow2}>
                        Cambio de viaje
                    </Button>
                    <Modal show={showConfirm2} centered backdrop="static" keyboard={false}>
                        <Modal.Header bsPrefix={Styles.confirmModalHeader}>
                            <Image src={image} className={Styles.image} width={70} height={70} alt="Naayari tours" />
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body bsPrefix={Styles.confirmModalBody}>
                            Seleccione el viaje a donde quiera cambiar la reservacion
                            <br />
                            <br />
                            <select
                                value={event}
                                onChange={e => { selEvent(e.target.value) }}
                                onBlur={e => { selEvent(e.target.value) }}
                                className={Styles.comboBox}
                            >
                                <option> Seleccione un viaje </option>
                                {eventData?.events.map(event => (
                                    <option value={event.eventDate + "|" + event.eventTrip} key={event.eventDate + event.eventTrip}>
                                        {event.eventDate + "|" + event.eventTrip}
                                    </option>
                                ))}
                            </select>
                        </Modal.Body>
                        <Modal.Footer bsPrefix={Styles.confirmModalFooter}>
                            <Button bsPrefix={Styles.cancelButton} onClick={handleConfirmClose2}>
                                Cancelar
                            </Button>
                            <Button bsPrefix={Styles.confirmButton} onClick={async () => {
                                setConfirmMessage2(await updateReservation(user.userEmail, event.split("|")[0], event.split("|")[1]))
                                handleConfirmClose2()
                                handleClose()
                            }}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Button bsPrefix={Styles.cancelButton} onClick={handleConfirmShow1}>
                        Eliminar reservacion
                    </Button>
                    <Modal show={showConfirm1} centered backdrop="static" keyboard={false}>
                        <Modal.Header bsPrefix={Styles.confirmModalHeader}>
                            <Image src={image} className={Styles.image} width={70} height={70} alt="Naayari tours" />
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body bsPrefix={Styles.confirmModalBody}>{confirmMessage1}</Modal.Body>
                        <Modal.Footer bsPrefix={Styles.confirmModalFooter}>
                            <Button bsPrefix={Styles.cancelButton} onClick={handleConfirmClose1}>
                                Cancelar
                            </Button>
                            <Button bsPrefix={Styles.confirmButton} onClick={async () => {
                                setConfirmMessage1(await deleteReservation(user.userEmail))
                                handleConfirmClose1()
                                handleClose()
                            }}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <Button bsPrefix={Styles.confirmButton} onClick={makeContract}>
                        Imprimir contrato
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalEvent;