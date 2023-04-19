import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Styles from '../../styles/elementStyles/ModalWindow.module.css'

import Image from 'next/image'
const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'

function ModalWindow({titleText,text,send}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function activateBothMethods(){
    handleShow();
    if(send()){
      handleClose();
    }else{
      handleShow();
    }
  }

  return (
    <>
      <div className={Styles.buttonWbords} onClick={activateBothMethods}>
        <p className={Styles.paragraph}>Vamos a viajar!</p>
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
export default ModalWindow