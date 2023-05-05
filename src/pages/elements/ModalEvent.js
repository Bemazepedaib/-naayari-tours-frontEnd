import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Table } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

import Image from 'next/image'

import Styles from '../../styles/elementStyles/ModalEvent.module.css'

import { useQuery } from '@apollo/client';
import { GET_USER } from '../querys/userQuerys';

export default function ModalEvent({ user }) {

    const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

    const { loading: userLoading, error: userError, data: userData } = useQuery(GET_USER, { variables: { email: user.userEmail } });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let id = 0;

    if (userLoading) return (<Spinner />)

    return (!userLoading && !userError &&
        <>
            <button className={Styles.btn} onClick={handleShow}>
                {userData.user.name}
            </button>
            <Modal show={show} onHide={handleClose} size='xl' backdrop="static" keyboard={false}>
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
