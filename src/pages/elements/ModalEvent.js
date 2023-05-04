import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';

import Image from 'next/image'

import Styles from '../../styles/elementStyles/ModalEvent.module.css'

export default function ModalEvent({ user }) {

    const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let id = 0;

    return (
        <>
            <Button className={Styles.btn} onClick={handleShow}>
                {user.userEmail}
            </Button>
            <Modal show={show} onHide={handleClose} size='xl' backdrop="static" keyboard={false}>
                <Modal.Header bsPrefix={Styles.modalHeader} closeButton>
                    <Image src={image} className={Styles.image} width={70} height={70} alt="Naayari tours" />
                    <Modal.Title bsPrefix={Styles.modalTitle}>Datos de {user.userEmail} </Modal.Title>
                </Modal.Header>
                <Modal.Body bsPrefix={Styles.modalBody}>
                    <div className={Styles.modalTitle}>Cliente que reserva</div>
                    {user.companion.length > 0 ?
                        <div>
                            <div className={Styles.modalTitle}>Acompañantes</div>
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
                            </Table></div> : null}
                </Modal.Body>
                <Modal.Footer bsPrefix={Styles.modalFooter}>
                    <Button bsPrefix={Styles.cancelButton} onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button bsPrefix={Styles.confirmButton} onClick={handleClose}>
                        Imprimir contrato
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
