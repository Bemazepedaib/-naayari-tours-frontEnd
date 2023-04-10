import React from 'react'
import Image from 'next/image'
import Styles from '../../styles/elementStyles/PhotoGallery.module.css'
function PhotoGallery(photo) {
  return (
    <div>
      <img src={'https://drive.google.com/uc?export=view&id='+photo.photo}
         height={((Math.random() * 10) + 5) * 30} alt='Review Image' className={Styles.image}/>
    </div>
  )
}

export default PhotoGallery
