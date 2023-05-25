import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'

import Styles from '../../styles/elementStyles/ModalReservation.module.css'

import { Table } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import { UPDATE_USERS } from '../mutations/eventMutations';
import Router from 'next/router';

function ModalReservation({ datosCompanion, datosUsuario, datosPrecio }) {

    const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        for (let i = 0; i < 3; i++) {
            if (i == 0) {
                if (datosCompanion[i].current.length !== datosPrecio[i].number - 1) {
                    setErrorMessage("¡Llene correctamente los datos de todos los acompañantes!");
                    setShow(false);
                    return;
                }
            } else {
                if (datosCompanion[i].current.length !== datosPrecio[i].number) {
                    setErrorMessage("¡Llene correctamente los datos de todos los acompañantes!");
                    setShow(false);
                    return;
                }
            }
        }
        setErrorMessage("")
        setShow(true);
    }
    const [showConfirm, setShowConfirm] = useState(false);
    const handleCloseConfirm = () => setShowConfirm(false);
    const handleShowConfirm = () => setShowConfirm(true);
    const [confirmMessage, setConfirmMessage] = useState("¿Está seguro que sus datos son correctos?");
    const [errorMessage, setErrorMessage] = useState("")

    const [doReservation] = useMutation(UPDATE_USERS)

    const total = datosPrecio[0].price * datosPrecio[0].number +
        datosPrecio[1].price * datosPrecio[1].number +
        datosPrecio[2].price * datosPrecio[2].number

    const anticipo = total / 2;

    let id = 1;

    const makeReservation = async () => {
        let a = [];
        datosCompanion.map(type => { type.current.map(companion => { a.push(companion) }) })
        try {
            const res = await doReservation({
                variables: {
                    eventDate: datosUsuario[1],
                    eventTrip: datosUsuario[2],
                    users: {
                        userEmail: datosUsuario[0].me.email,
                        companion: a,
                        advancePayment: anticipo,
                        fullPayment: total,
                        advancePaid: false,
                        fullyPaid: false,
                        observations: datosUsuario[3]
                    }
                }
            })
            setConfirmMessage(res.data.updateEventUsers)
            Router.push({ pathname: '/elements/ReservationPayment', query: { anticipo: anticipo } })
        } catch (error) {
            setConfirmMessage(error.message)
        }
    }

    const verifyCompanion = () => {
        if (datosCompanion[0].current.length === 0 &&
            datosCompanion[1].current.length === 0 &&
            datosCompanion[2].current.length === 0) {
            return false;
        }
        return true
    }

    return (
        <>
            <div className={Styles.miniFlex}>
                <div className={Styles.errorMessage}>
                    {errorMessage}
                </div>
                <Button bsPrefix={Styles.btn} onClick={handleShow} >
                    Haz tu reservación
                </Button>
            </div>
            <Modal id={datosCompanion} show={show} onHide={handleClose} size="lg" centered backdrop="static" keyboard={false}>
                <Modal.Header bsPrefix={Styles.modalHeader} closeButton>
                    <Image src={image} className={Styles.image} width={70} height={70} alt="Naayari tours" />
                    <Modal.Title bsPrefix={Styles.modalTitle}>Confirma tus datos</Modal.Title>
                </Modal.Header>
                <Modal.Body bsPrefix={Styles.modalBody}>
                    <div className={Styles.modalTitle}>Tus datos</div>
                    <Table>
                        <tbody className={Styles.tableBody}>
                            <tr>
                                <td>Nombre</td>
                                <td>{datosUsuario[0].me.name}</td>
                            </tr>
                            <tr>
                                <td>Celular</td>
                                <td>{datosUsuario[0].me.cellphone}</td>
                            </tr>
                            <tr>
                                <td>Viaje</td>
                                <td>{datosUsuario[2]}</td>
                            </tr>
                            <tr>
                                <td>Fecha</td>
                                <td>{datosUsuario[1]}</td>
                            </tr>
                        </tbody>
                    </Table>
                    {verifyCompanion() ? <div>
                        <div className={Styles.modalTitle}>Tus acompañantes</div>
                        <Table>
                            <thead className={Styles.tableHeader}>
                                <tr>
                                    <th> Tipo de acompañante </th>
                                    <th> Nombre de acompañante </th>
                                    <th> Teléfono de acompañante </th>
                                    <th> Fecha de nacimiento </th>
                                </tr>
                            </thead>
                            <tbody className={Styles.tableBody}>
                                {datosCompanion ? datosCompanion?.map(type => (
                                    type.current.map(companion => (
                                        <tr key={id++}>
                                            <td>{companion.companionType === "adult" ? "Adulto" : companion.companionType === "child" ? "Niño" : "Bebé"}</td>
                                            <td>{companion.companionName}</td>
                                            <td>{companion.companionCell}</td>
                                            <td>{companion.companionBirthdate}</td>
                                        </tr>
                                    ))
                                )) : <div></div>}
                            </tbody>
                        </Table>
                    </div> : <div></div>}
                    {datosUsuario[3] !== "" ?
                        <div>
                            <div className={Styles.modalTitle}>Observaciones</div>
                            <div className={Styles.observacionesBody}>{datosUsuario[3]}</div>
                        </div> : <div></div>}
                    <div className={Styles.modalTitle}>Total a pagar</div>
                    <Table>
                        <thead className={Styles.tableHeader}>
                            <tr>
                                <th>Tipo de viajante</th>
                                <th>No. de viajantes</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody className={Styles.tableBody}>
                            {datosPrecio ? datosPrecio?.map(price => (
                                datosPrecio.indexOf(price) === 0 ?
                                    <tr key={id++}>
                                        <td>{price.type} &#40;${price.price}&#41;</td>
                                        <td>{price.number}</td>
                                        <td>${price.number * price.price}</td>
                                    </tr> : datosCompanion[datosPrecio.indexOf(price)].current.length > 0 ?
                                        <tr key={id++}>
                                            <td>{price.type} &#40;${price.price}&#41;</td>
                                            <td>{price.number}</td>
                                            <td>${price.number * price.price}</td>
                                        </tr> : null
                            )) : <div></div>}
                            <tr>
                                <td>TOTAL A PAGAR</td>
                                <td>{datosPrecio[0].number + datosPrecio[1].number + datosPrecio[2].number}</td>
                                <td>${total}
                                </td>
                            </tr>
                            <tr>
                                <td className={Styles.bold}>ANTICIPO &#40;50%&#41;</td>
                                <td>NA</td>
                                <td>${anticipo}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer bsPrefix={Styles.centerButton}>
                    <Button bsPrefix={Styles.modalButton} onClick={handleShowConfirm}>
                        Confirmar datos
                    </Button>
                    <Modal id={datosUsuario} show={showConfirm} onHide={handleCloseConfirm} centered backdrop="static" keyboard={false}>
                        <Modal.Header bsPrefix={Styles.confirmModalHeader}>
                            <Image src={image} className={Styles.image} width={70} height={70} alt="Naayari tours" />
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body bsPrefix={Styles.confirmModalBody}>{confirmMessage}</Modal.Body>
                        <Modal.Footer bsPrefix={Styles.confirmModalFooter}>
                            <Button bsPrefix={Styles.cancelButton} onClick={handleCloseConfirm}>
                                Cancelar
                            </Button>
                            <Button bsPrefix={Styles.confirmButton} onClick={makeReservation}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalReservation