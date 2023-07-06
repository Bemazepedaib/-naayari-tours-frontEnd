import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Styles from '../styles/elementStyles/FormTripDate.module.css'
import Router from 'next/router';
import Image from 'next/image';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_REQUEST } from '../backendOperations/mutations/requestMutations';
import { ME } from '../backendOperations/querys/userQuerys';

const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

function ModalVIP({ titleText, text, send, date, trip }) {

	const { loading, error, data } = useQuery(ME);
	const [addRequest] = useMutation(ADD_REQUEST);
	const [myMessageErr, setmyMessageErr] = useState('');
	const [myMessage, setmyMessage] = useState('');
	const [show, setShow] = useState(false);
	const [counter, setCounter] = useState();

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	useEffect(() => {
		counter == 0 ? handleClose() : ""
		const timer =
			counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

	async function activateBothMethods() {
		if (await send()) {
			handleClose();
			await Router.push({ pathname: '/' })
			window.location.reload(true)
		} else {
			handleShow();
		}
	}

	const HandleClick = async () => {
		setCounter(2);
		if (!date) {
			setmyMessageErr("Seleccione una fecha");
		}
		else {
			try {
				await addRequest({
					variables: {
						requestUser: data.me.email,
						requestName: data.me.name,
						requestCell: data.me.cellphone,
						requestDate: date,
						requestTrip: trip,
						requestStatus: "pending"
					}
				})
			} catch (e) {
				setmyMessageErr(e.message);
			}
			if (!myMessageErr) {
				setmyMessage("¡Solicitud enviada exitosamente!");
			}
		}
	}

	return !loading && !error && (
		<>
			<div className={Styles.btnVIP} onClick={activateBothMethods}>
				<p className={Styles.paragraph}>¡Crea tu grupo VIP!</p>
			</div>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title className={Styles.h3}>
						<Image className={Styles.imageVIP} src={image} width={70} height={70} alt="Naayari tours" />
						{titleText}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>{text}</Modal.Body>
				<Modal.Footer className={Styles.centerModalFooter}>
					<div className={Styles.buttonWbords} >
						<button className={Styles.btnModal} onClick={HandleClick}>Mandar Solicitud</button>
					</div>
					<div className={Styles.myErrorStyle}>{myMessageErr}</div>
					<div className={Styles.myMessagetyle}>{myMessage}</div>
				</Modal.Footer>
			</Modal>
		</>
	);
}
export default ModalVIP