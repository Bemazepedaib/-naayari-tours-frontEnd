import React, { useState } from 'react'
import Image from 'next/image'

import Styles from '../../styles/elementStyles/EventDetailsView.module.css'

import ModalEvent from './ModalEvent';
import { useMutation } from '@apollo/client';
import { UPDATE_STATUS, DELETE_USER, UPDATE_USER } from '../mutations/eventMutations';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function EventDetailsView({ event }) {

    const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

    let key = 0;
    const [updateStatus] = useMutation(UPDATE_STATUS)
    const [delReservation] = useMutation(DELETE_USER)
    const [updReservation] = useMutation(UPDATE_USER)

    const opciones = [
        { value: "null", text: "Seleccione una opcion" },
        { value: "active", text: "Activo" },
        { value: "closed", text: "Cerrado" },
        { value: "inactive", text: "Inactivo" }
    ]

    const eventDate = event.event.eventDate
    const eventTrip = event.event.eventTrip

    const [eventUsers, setEventUsers] = useState(event.event.users.map(({ __typename, ...rest }) => { return rest }))
    const [eventStatus, setEventStatus] = useState(opciones[0].value)
    const [currentStatus, setCurrentStatus] = useState(event.event.eventStatus)
    const [confirmMessage, setConfirmMessage] = useState("¿Está seguro que desea cambiar el estado?");

    const [showConfirm, setShowConfirm] = useState(false)
    const handleConfirmClose = () => setShowConfirm(false);
    const handleConfirmShow = () => setShowConfirm(true);

    const changeStatus = async () => {
        try {
            if (eventStatus === "null" || eventStatus === currentStatus) { setConfirmMessage("¡Seleccione un valor válido!"); return; }
            setCurrentStatus((await updateStatus({
                variables: {
                    eventDate: eventDate,
                    eventTrip: eventTrip,
                    eventStatus: eventStatus
                }
            })).data.updateEventStatus.split("%")[1])
            setConfirmMessage("¡Estado actualizado exitósamente!")
            handleConfirmClose()
            setConfirmMessage("¿Está seguro que desea cambiar el estado?")
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteReservation = async (correo) => {
        try {
            const res = await delReservation({
                variables: {
                    eventDate: eventDate,
                    eventTrip: eventTrip,
                    user: correo
                }
            })
            setEventUsers(res.data?.deleteEventUser)
            return "¡Reserva eliminada exitósamente!"
        } catch (error) {
            return error.message
        }
    }

    const updateReservation = async (correo, fechaA, viajeA) => {
        console.log(eventDate)
        console.log(eventTrip)
        console.log(fechaA)
        console.log(viajeA)
        console.log(correo)
        try {
            const res = await updReservation({
                variables: {
                    eventDateFrom: eventDate,
                    eventTripFrom: eventTrip,
                    eventDateTo: fechaA,
                    eventTripTo: viajeA,
                    user: correo
                }
            })
            setEventUsers(res.data?.updateEventUser)
        } catch (error) {
            return error.message
        }
    }

    return (
        <div className={Styles.main}>
            <div className={Styles.titulo1}>{event.event.eventDate + " | " + event.event.eventTrip}</div>
            <div className={Styles.titulo2}>Datos del viaje</div>
            <div className={Styles.contenedorDatos}>
                <div><div className={Styles.subtitle}> Tipo de viaje: </div>{event.event.eventType === "Public" ? "Público" : "VIP"}</div>
                <div><div className={Styles.subtitle}> Estado del viaje: </div>{currentStatus === "active" ? "Activo" : currentStatus === "closed" ? "Cerrado" : "Inactivo"}</div>
                <div className={Styles.grupoCambiarEstado}>
                    <div className={Styles.subtitle}> Cambiar estado: </div>
                    <select
                        value={eventStatus}
                        onChange={e => { setEventStatus(e.target.value) }}
                        onBlur={e => { setEventStatus(e.target.value) }}
                        className={Styles.comboBox}
                    >
                        {opciones.map(option => (
                            <option value={option.value} key={option.value}> {option.text} </option>
                        ))}
                    </select>
                    <button className={Styles.btn} onClick={handleConfirmShow}>
                        Cambiar estado del viaje
                    </button>
                    <Modal show={showConfirm} centered backdrop="static" keyboard={false}>
                        <Modal.Header bsPrefix={Styles.confirmModalHeader}>
                            <Image src={image} className={Styles.image} width={70} height={70} alt="Naayari tours" />
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body bsPrefix={Styles.confirmModalBody}>{confirmMessage}</Modal.Body>
                        <Modal.Footer bsPrefix={Styles.confirmModalFooter}>
                            <Button bsPrefix={Styles.cancelButton} onClick={handleConfirmClose}>
                                Cancelar
                            </Button>
                            <Button bsPrefix={Styles.confirmButton} onClick={changeStatus}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
            <div className={Styles.titulo2}>Reservaciones</div>
            <div className={Styles.contenedorUsuarios}>
                {eventUsers.length > 0 ? eventUsers.map(user => (
                    <div key={key++}>
                        <ModalEvent user={user} trip={event.event.eventTrip} date={event.event.eventDate}
                            updateReservation={updateReservation}
                            deleteReservation={deleteReservation}
                            id={user} />
                    </div>
                )) : <div className={Styles.noReservation}>Aún no hay reservaciones</div>}
            </div>
        </div>
    )
}

export default EventDetailsView;