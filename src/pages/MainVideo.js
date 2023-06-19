import React from 'react'
import Styles from '../styles/MainVideo.module.css'

const video = 'https://drive.google.com/uc?export=view&id=1wohdi1Xvr0ktmePLGrm1ELVgl8bEX--O'
function MainVideo() {
  return (
    <>
      <div className={Styles.seeMore}>
        <a className={Styles.arrows} href='#Navbar'>
          <span className={Styles.icons}>↓</span>
        </a>
      </div>
      <div className={Styles.texts}>
        <div className={Styles.ecoText}>ECOTURISMO RURAL, SUSTENTABLE Y DE AVENTURA</div>
        <div className={Styles.tripText}>¡VIAJAR ES CULTURA!</div>
      </div>
      <video className={Styles.video} src={video} autoPlay loop muted />
    </>
  )
}

export default MainVideo