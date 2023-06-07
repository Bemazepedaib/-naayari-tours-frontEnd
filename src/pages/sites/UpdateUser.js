import Styles from "../../styles/elementStyles/UpdateUser.module.css"
import { useState, React } from 'react'
import ModalAdmin from "../elements/ModalAdmin"

import Modal from 'react-bootstrap/Modal';
import HeaderTittle from "../elements/HeaderTittle"
import Button from 'react-bootstrap/Button';

import Image from 'next/image'

import { useMutation } from '@apollo/client';
import { UPDATE_USER_NAME_ADMIN, UPDATE_USER_CELL_ADMIN, UPDATE_USER_BIRTH_ADMIN, UPDATE_USER_PASSWORD_ADMIN, UPDATE_COUPONS } from '../mutations/userMutations';


function UpdateUser({ user }) {

	let k = 0
	let k2 = 0


	const image = 'https://drive.google.com/uc?export=view&id=1hKQxSheX5io9bPjn99_TedN8SCTNcsoK'
	const [confirmMessage1, setConfirmMessage1] = useState("¿Está seguro que desea cambiar el estado de la solicitud?");

	const handleConfirmClose1 = () => { setShowConfirm1(false); setConfirmMessage1("¿Está seguro que desea cambiar el estado de la solicitud?") }
	const handleConfirmShow1 = () => setShowConfirm1(true);
	const [showConfirm1, setShowConfirm1] = useState(false)

	const [userName] = useMutation(UPDATE_USER_NAME_ADMIN);
	const [userCellAdmin] = useMutation(UPDATE_USER_CELL_ADMIN);
	const [userBirthAdmin] = useMutation(UPDATE_USER_BIRTH_ADMIN);
	const [userPassAdmin] = useMutation(UPDATE_USER_PASSWORD_ADMIN);
	const [userCoupon] = useMutation(UPDATE_COUPONS);

	const [newName, setNewName] = useState(user.user.name);
	const [newPhone, setNewPhone] = useState(user.user.cellphone);
	const [newDate, setNewDate] = useState(user.user.birthDate);
	const [newPass, setNewPass] = useState("");
	const ema = user.user.email


	const changeData = async () => {
		try {
			const newN = (await userName({ variables: { newName: newName, email: ema } })).data.updateUserName.split("%");
			setNewName(newN[1])
		} catch (error) {
			console.log(error)
		}
		try {
			const newP = (await userCellAdmin({ variables: { newCell: newPhone, email: ema } })).data.updateUserCell.split("%");
			setNewPhone(newP[1]);
		} catch (error) {

			console.log(error.message)
		}

		try {
			const newD = (await userBirthAdmin({ variables: { newDate: newDate, email: ema } })).data.updateUserBirth.split("%");
			setNewDate(newD[1])
		} catch (error) {
			console.log(error.message)
		}

		try {
			await userPassAdmin({ variables: { newPassword: newPass, email: ema } });

		} catch (error) {
			console.log(error.message)
		}
		window.location.href = "/sites/Users";
	}
	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
		password: /^.{4,12}$/, // 4 a 12 digitos.
		telefono: /^\d{7,14}$/ // 7 a 14 numeros.
	}

	const UpdateCoupon = () => {
		console.log("entra bro")
	};

	const changeStatus = async (ema, coTy, coDa) => {
		await userCoupon({ variables: { email: ema, couponType: coTy, couponDate: coDa } })

		handleConfirmClose1();
	}


	return (

		<div className={Styles.mainContainer}>
			{console.log(user)}
			<HeaderTittle tittle={"Actualizar Usuario"}></HeaderTittle>
			<div className={Styles.info}>
				<section className={Styles.section}>
					<p className={` ${Styles.infoSubtitle}`}> Nombre de usuario:   </p>
					<p className={`${Styles.infoP} ${Styles.update}`} >{newName}
						<ModalAdmin
							message="Cambia el nombre"
							value={newName}
							setNew={setNewName}
							exp={expresiones.nombre}
							err="El nombre solo debe incluir letras" /></p>
				</section>
				<section className={Styles.section}>
					<p className={` ${Styles.infoSubtitle}`}> Telefono:            </p>
					<p className={`${Styles.infoP} ${Styles.update}`}>{newPhone}
						<ModalAdmin
							ema={user.user.email}
							message="Cambia el telefono"
							value={newPhone}
							setNew={setNewPhone}
							exp={expresiones.telefono}
							err="Ingrese un número telefonico correcto"
						/></p>
				</section>
				<section className={Styles.sectionUser}>
					<p className={` ${Styles.infoSubtitle}`}> Correo:              </p>
					<p className={`${Styles.infoP} ${Styles.update}`}>{user.user.email} </p>
				</section>
				<section className={Styles.sectionUser}>
					<p className={`${Styles.infoSubtitle}`}> Tipo de usuario:     </p>
					<p className={`${Styles.update}`}>{user.user.userType}</p>
				</section>
				<section className={Styles.section}>
					<p className={` ${Styles.infoSubtitle}`}> Fecha de nacimiento: </p>
					<p className={`${Styles.infoP} ${Styles.update}`}>{newDate}
						<ModalAdmin
							ema={user.user.email}
							message="Cambia la fecha de nacimiento"
							value={newDate}
							setNew={setNewDate}
							err="Elija una fecha válida"
						/></p>
				</section>
				<section className={Styles.sectionUser}>
					<p className={` ${Styles.infoSubtitle}`}> Nivel de usuario:    </p>
					<p className={`${Styles.infoP} ${Styles.update}`}>{user.user.userLevel}</p>
				</section>
				<section className={Styles.section}>
					<div className={`  ${Styles.password}`}>
						<p className={` ${Styles.infoSubtitle}`}> Contraseña: </p>
						<p className={`${Styles.infoP} ${Styles.update}`}> ••••••••••
							<ModalAdmin
								ema={user.user.email}
								message="Cambia la contraseña"
								value="••••••••••"
								setNew={setNewPass}
								exp={expresiones.password}
								err="La contraseña debe ser segura"
							/>  </p>
					</div>
				</section>
			</div>
			<Button variant="btn btn-dark" className={Styles.saveChanges} onClick={changeData}>Guardar Cambios</Button>
			<div className={Styles.tags}>
				<p className={`${Styles.tagsInfo} ${Styles.infoSubtitle}`}> Cupón activo </p>
				{user.user.coupons.map(c => (
					!c.couponApplied ?
						<div className={Styles.contenedorEvents} key={k2++}>
							<div className={Styles.contenedorEvent}>
								<div className={Styles.miniFlex}>
									<div className={Styles.textHid}>Tipo:&nbsp; </div>{c.couponType === "birthdayGift" ? "cupon de cumpleaños" : ""}</div>
								<div className={Styles.miniFlex}><div className={Styles.textHid}>Fecha:&nbsp;</div>{c.couponDate}</div>
								<div className={Styles.miniFlex}><div className={Styles.textHid}>Descripción:&nbsp;</div>{c.couponDescription}</div>
								<button className={Styles.btn} onClick={handleConfirmShow1}>
									Cambiar estado del viaje
								</button>
							</div>

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
									<Button bsPrefix={Styles.confirmButton} onClick={() => changeStatus(user.user.email, c.couponType, c.couponDate)}>
										Confirmar
									</Button>
								</Modal.Footer>
							</Modal>
						</div>
						: ""

				))}
				<p className={`${Styles.tagsInfo} ${Styles.infoSubtitle}`}> Preferencias </p>
				<div className={Styles.pref}>
					{user.user.preferences.map(pr => (
						<p key={k++} className={Styles.preference}>{pr.preferenceType}</p>
					))}
				</div>
			</div>

		</div>
	)
}

export default UpdateUser