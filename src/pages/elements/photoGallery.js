import React, { useState } from "react";
import Image from 'next/image'
import Styles from '../../styles/elementStyles/PhotoGallery.module.css'
function PhotoGallery(review) {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
      console.log("Esto es una prueba"+imgSrc)
  }
  return (
    <div>
      <img src={'https://drive.google.com/uc?export=view&id='+review.review.photo}
         height={((Math.random() * 10) + 5) * 30} alt='Review Image' className={Styles.image} onClick={getImg(review.review.photo)}/>
    </div>
  )
}

export default PhotoGallery
