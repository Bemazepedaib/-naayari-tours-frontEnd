import React from 'react'
import Styles from '../../styles/MainVideo.module.css'
const video = 'https://drive.google.com/uc?export=view&id=1wohdi1Xvr0ktmePLGrm1ELVgl8bEX--O'
function MainVideo() {
  return (
    <div className={Styles.MyVideoContainer}>
      <div className={Styles.MyVideo}>
        <video className={Styles.video} src={video} autoPlay loop muted></video>
      </div>
      <div>
        <p className={Styles.ecoText}>ECOTURISMO RURAL, SUSTENTABLE Y DE AVENTURA</p>
        <p className={Styles.tripText}>¡VIAJAR ES CULTURA!</p>
      </div>
    </div>
  )
}

export default MainVideo
