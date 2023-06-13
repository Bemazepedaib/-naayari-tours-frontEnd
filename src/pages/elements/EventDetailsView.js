import React, { useState } from 'react'
import Image from 'next/image'

import Styles from '../../styles/elementStyles/EventDetailsView.module.css'

import ModalEvent from './ModalEvent';
import { useMutation, useQuery } from '@apollo/client';
import { UPDATE_STATUS, UPDATE_GUIDE, DELETE_USER, UPDATE_USER } from '../../backendOperations/mutations/eventMutations';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { GET_USERS } from '../../backendOperations/querys/userQuerys';

function EventDetailsView({ event }) {

    const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

    const { loading, error, data } = useQuery(GET_USERS)

    let key = 0;
    const [updateStatus] = useMutation(UPDATE_STATUS)
    const [updateGuide] = useMutation(UPDATE_GUIDE)
    const [delReservation] = useMutation(DELETE_USER)
    const [updReservation] = useMutation(UPDATE_USER)

    const opciones = [
        { value: '', text: "Seleccione una opcion" },
        { value: "active", text: "Activo" },
        { value: "closed", text: "Cerrado" },
        { value: "inactive", text: "Inactivo" }
    ]

    const eventDate = event.event.eventDate
    const eventTrip = event.event.eventTrip

    const [eventUsers, setEventUsers] = useState(event.event.users.map(({ __typename, ...rest }) => { return rest }))
    const [eventStatus, setEventStatus] = useState(opciones[0].value)
    const [currentStatus, setCurrentStatus] = useState(event.event.eventStatus)
    const [eventGuide, setEventGuide] = useState()
    const [currentGuide, setCurrentGuide] = useState(event.event.eventGuide.split("|")[1])
    const [confirmMessage1, setConfirmMessage1] = useState("¿Está seguro que desea cambiar el estado del viaje?");
    const [confirmMessage2, setConfirmMessage2] = useState("¿Está seguro que desea cambiar el guía del viaje?");
    

    const [showConfirm1, setShowConfirm1] = useState(false)
    const handleConfirmClose1 = () => { setShowConfirm1(false); setConfirmMessage1("¿Está seguro que desea cambiar el estado del viaje?") }
    const handleConfirmShow1 = () => setShowConfirm1(true);
    const [showConfirm2, setShowConfirm2] = useState(false)
    const handleConfirmClose2 = () => { setShowConfirm2(false); setConfirmMessage2("¿Está seguro que desea cambiar el guía del viaje?") }
    const handleConfirmShow2 = () => setShowConfirm2(true);

    const changeStatus = async () => {
        try {
            if (eventStatus === '' || eventStatus === currentStatus) { setConfirmMessage1("¡Seleccione un valor válido!"); return; }
            const res = await updateStatus({
                variables: {
                    eventDate: eventDate,
                    eventTrip: eventTrip,
                    eventStatus: eventStatus
                }
            })
            setCurrentStatus(res.data?.updateEventStatus)
            setConfirmMessage1("¡Estado actualizado exitósamente!")
            handleConfirmClose1();
        } catch (error) {
            setConfirmMessage1(error.message)
        }
    }

    const changeGuide = async () => {
        try {
            if (eventGuide === '' || eventGuide === undefined) { setConfirmMessage2("¡Seleccione un valor válido!"); return; }
            const res = await updateGuide({
                variables: {
                    eventDate: eventDate,
                    eventTrip: eventTrip,
                    eventGuide: eventGuide
                }
            })
            setCurrentGuide(res.data?.updateEventGuide)
            setConfirmMessage2("¡Guía asignado exitósamente")
            handleConfirmClose2();
        } catch (error) {
            setConfirmMessage2(error.message)
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

    return (!loading && !error &&
        <div className={Styles.main}>
            <div className={Styles.titulo1}>{event.event.eventDate + " | " + event.event.eventTrip}</div>
            <div className={Styles.titulo2}>Datos del viaje</div>
            <div className={Styles.contenedorDatos}>
                <div className={Styles.grupoTexto} >
                    <div className={Styles.subtitle}> Tipo de viaje: </div>
                    {event.event.eventType === "Public" ? "Público" : "VIP"}
                </div>
                <div className={Styles.grupoTexto} >
                    <div className={Styles.subtitle}> Estado del viaje: </div>
                    {currentStatus === "active" ? "Activo" : currentStatus === "closed" ? "Cerrado" : "Inactivo"}
                </div>
                <div className={Styles.grupoTexto} >
                    <div className={Styles.subtitle}> Guia del viaje: </div>
                    {currentGuide}
                </div>
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
                    <button className={Styles.btn} onClick={handleConfirmShow1}>
                        Cambiar estado del viaje
                    </button>
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
                            <Button bsPrefix={Styles.confirmButton} onClick={changeStatus}>
                                Confirmar
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
                <div className={Styles.grupoCambiarEstado}>
                    <div className={Styles.subtitle}> Cambiar guía: </div>
                    <select
                        value={eventGuide}
                        onChange={e => { setEventGuide(e.target.value) }}
                        onBlur={e => { setEventGuide(e.target.value) }}
                        className={Styles.comboBox}
                    >
                        <option value='' > Seleccione un guía </option>
                        {data.users.map(option => (
                            option.userType === "guide" ? <option value={option.email+"|"+option.name} key={option.email}> {option.name} </option> : null
                        ))}
                    </select>
                    <button className={Styles.btn} onClick={handleConfirmShow2}>
                        Cambiar guia 
                    </button>
                    <Modal show={showConfirm2} centered backdrop="static" keyboard={false}>
                        <Modal.Header bsPrefix={Styles.confirmModalHeader}>
                            <Image src={image} className={Styles.image} width={70} height={70} alt="Naayari tours" />
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body bsPrefix={Styles.confirmModalBody}>{confirmMessage2}</Modal.Body>
                        <Modal.Footer bsPrefix={Styles.confirmModalFooter}>
                            <Button bsPrefix={Styles.cancelButton} onClick={handleConfirmClose2}>
                                Cancelar
                            </Button>
                            <Button bsPrefix={Styles.confirmButton} onClick={changeGuide}>
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