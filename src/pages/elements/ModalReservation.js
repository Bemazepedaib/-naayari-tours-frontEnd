import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image'
import Styles from '../../styles/elementStyles/ModalReservation.module.css'

import React, { useState } from 'react'
import { Table } from 'react-bootstrap';

function ModalReservation({ datos }) {

    const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'

    const [show, setShow] = useState(false);
    const [data, setData] = useState(null)

    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); setData(datos) }

    var id = 1;

    //console.log("modal")
    //console.log(data)

    return (
        <>
            <Button bsPrefix={Styles.btn} onClick={handleShow} >
                Haz tu reservación
            </Button>

            <Modal id={datos} show={show} onHide={handleClose} centered size="lg" backdrop="static" keyboard={false}>
                <Modal.Header bsPrefix={Styles.modalHeader} closeButton>
                    <Image src={image} width={70} height={70} alt="Naayari tours" />
                    <Modal.Title>Confirma tus datos</Modal.Title>
                </Modal.Header>
                <Modal.Body bsPrefix={Styles.modalBody}>
                    <Table>
                        <thead>
                            <tr>
                                <th> Tipo de acompañante </th>
                                <th> Nombre de acompañante </th>
                                <th> Teléfono de acompañante </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data ? data?.map(type => (
                                type.current.map(companion => (
                                    <tr key={id++}>
                                        <td>{companion.companionType === "adult" ? "Adulto" : companion.companionType === "child" ? "Niño" : "Bebé"}</td>
                                        <td>{companion.companionName}</td>
                                        <td>{companion.companionCell}</td>
                                    </tr>
                                ))
                            )) : <div></div>}
                        </tbody>
                    </Table>
                    {/* {data ? data?.map(type => (
                        type.current.map(companion => (
                            <div key={id++}>{companion.companionName + "|" + companion.companionType}</div>
                        ))
                    )) : <div></div>} */}
                </Modal.Body>
                <Modal.Footer bsPrefix={Styles.centerButton}>
                    <Button bsPrefix={Styles.modalButton} onClick={handleClose}>
                        Confirmar datos
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalReservation