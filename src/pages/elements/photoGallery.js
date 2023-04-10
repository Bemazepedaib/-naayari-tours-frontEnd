import React, { useState } from "react";
import Styles from '../../styles/elementStyles/PhotoGallery.module.css'
function PhotoGallery(review) {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  function img(reviews){
    console.log(reviews)
  }
  return (
    <div>
      <img src={'https://drive.google.com/uc?export=view&id='+review.review.photo}
         height={((Math.random() * 10) + 5) * 30} alt='Review Image' className={Styles.image} 
         onClick={() => img( review.review)}/>
    </div>
  )
}

export default PhotoGallery
