import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Styles from '../../styles/elementStyles/FormTripDate.module.css'
import Router from 'next/router';
import Image from 'next/image';
import { useMutation,useQuery } from '@apollo/client';
import { ADD_REQUEST} from '../mutations/requestMutations';
import { ME } from '../querys/tripQuerys';

const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

function ModalVIP({titleText,text,send,trip}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addRequest] = useMutation(ADD_REQUEST);
  const { loading: userLoading, error: userError, data: userData } = useQuery(ME);


  async function activateBothMethods(){
     if(await send()){
        try {
            //await addRequest({ variables: { newPref: preferenceOK } })
        }
        catch{

        }
      handleClose();
      await Router.push({ pathname: '/' })
      window.location.reload(true)
    }else{
      handleShow();
    }
  }

  return (
    <>
      <div  className={Styles.btnVIP} onClick={activateBothMethods}>
        <p className={Styles.paragraph}>¡Crea tu grupo VIP!</p>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
          <Image className={Styles.image} src={image} width={70} height={70} alt="Naayari tours" />
            {titleText}
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer className={Styles.centerModalFooter}>
          <div className={Styles.buttonWbords} onClick={handleClose}>
            <p className={Styles.paragraph}>Aceptar</p>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalVIP