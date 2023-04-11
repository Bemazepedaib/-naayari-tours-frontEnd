import React, { useState } from "react";
import Styles from '../../styles/elementStyles/PhotoGallery.module.css'
function PhotoGallery({getImg,review}) {
  return (
    <div>
      <img src={'https://drive.google.com/uc?export=view&id='+review.photo}
         height={((Math.random() * 10) + 5) * 30} alt='Review Image' className={Styles.image} 
         onClick={() => getImg(review)}
         />
    </div>
  )
}

export default PhotoGallery
