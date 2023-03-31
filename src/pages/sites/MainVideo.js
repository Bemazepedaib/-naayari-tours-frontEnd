import React from 'react'
import Styles from '../../styles/MainVideo.module.css'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const video = 'https://drive.google.com/uc?export=view&id=1wohdi1Xvr0ktmePLGrm1ELVgl8bEX--O'
function MainVideo() {
  return (
    <div className={Styles.MyVideoContainer}>
      <div className={Styles.seeMore}>
        <div className={Styles.arrows}>
          <span className={`${Styles.icons} ${Styles.n1}`}></span>
          <span className={`${Styles.icons} ${Styles.n2}`}></span>
          <span className={`${Styles.icons} ${Styles.n3}`}></span>
        </div>
      </div>
      <div className={Styles.texts}>
        <p className={Styles.ecoText}>ECOTURISMO RURAL, SUSTENTABLE Y DE AVENTURA</p>
        <p className={Styles.tripText}>¡VIAJAR ES CULTURA!</p>
      </div>

      <video className={Styles.video} src={video} autoPlay loop muted>
      </video>
    </div>
  )
}

export default MainVideo
