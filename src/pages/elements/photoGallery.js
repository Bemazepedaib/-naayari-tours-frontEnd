import React from 'react'
import Image from 'next/image'
function photoGallery(photo) {
  return (
    <div>
      <Image src={photo} height={((Math.random() * 10) + 5) * 30} className={Styles.image}/>
    </div>
  )
}

export default photoGallery
