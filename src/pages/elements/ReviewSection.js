import React from 'react'
import Styles from '../../styles/elementStyles/ReviewSection.module.css'
import Gallery from './Gallery'

function ReviewSection() {
  return (
    <div className={Styles.reviewSection}>
      <h2 className={Styles.title}><hr/>Experiencias Anteriores<hr/></h2>
      <Gallery />
    </div>
  )
}

export default ReviewSection
