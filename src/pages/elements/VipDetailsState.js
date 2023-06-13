import { React, useState } from "react";
import Styles from "../../styles/elementStyles/VipDetails.module.css";
import Modal from 'react-bootstrap/Modal';

import Button from 'react-bootstrap/Button';

import Image from 'next/image'

import { useMutation } from '@apollo/client';
import { UPDATE_REQUEST } from "../../backendOperations/mutations/requestMutations";


const VipDetailsState = ({ data }) => {

    const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

    const [updateStatus] = useMutation(UPDATE_REQUEST);

    const opciones = [
        { value: '', text: "Seleccione una opcion" },
        { value: "pending", text: "Pendiente" },
        { value: "accepted", text: "Aceptada" },
        { value: "rejected", text: "Denegada" },
        { value: "finished", text: "Finalizada" }
    ]

    const [eventStatus, setEventStatus] = useState(opciones[0].value)
    const [currentStatus, setCurrentStatus] = useState(data.request.requestStatus)
    const [confirmMessage1, setConfirmMessage1] = useState("¿Está seguro que desea cambiar el estado de la solicitud?");
    const [showConfirm1, setShowConfirm1] = useState(false)
    const handleConfirmClose1 = () => { setShowConfirm1(false); setConfirmMessage1("¿Está seguro que desea cambiar el estado de la solicitud?") }
    const handleConfirmShow1 = () => setShowConfirm1(true);



    const changeStatus = async () => {
        try {
            if (eventStatus === "" || eventStatus === currentStatus) {
                setConfirmMessage1("¡Seleccione un valor válido!");
                return;
            }
            const res = await updateStatus({
                variables: {
                    requestUser: data.request.requestUser,
                    requestStatus: eventStatus
                },
            });
            setCurrentStatus(eventStatus);
            console.log(res)
            setConfirmMessage1("¡Estado actualizado exitósamente!");
            handleConfirmClose1();
            window.location.href = "/sites/VipsManager";
        } catch (error) {
            setConfirmMessage1(error.message);
        }
    };

    return (
        <div className={Styles.main}>
            <div className={Styles.titulo1}>Solicitud VIP</div>
            <div className={Styles.titulo2}>Datos del viaje</div>
            <div className={Styles.contenedorDatos}>
                <div className={Styles.grupoTexto}>
                    <div className={Styles.subtitle}> Tipo de viaje: </div> <p>VIP</p>
                    <div className={Styles.subtitle}> Usuario: </div><p>{data.request.requestUser}</p>
                </div>
                <div className={Styles.grupoTexto}>
                    <div className={Styles.subtitle}> Lugar: </div><p>{data.request.requestTrip}</p>
                    <div className={Styles.subtitle}> Estado del viaje: </div>
                    <p>{currentStatus === "pending" ? "Pendiente"
                        : currentStatus === "accepted" ? "Aceptada"
                            : currentStatus === "rejected" ? "Denegada"
                                : "Finalizada"}</p>
                </div>
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
        </div>
    );

    // <div className={Styles.main}>{data.request.requestUser}</div>;
};

export default VipDetailsState;
