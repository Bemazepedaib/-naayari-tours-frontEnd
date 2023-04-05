import React from 'react'
import Styles from '../../styles/elementStyles/ReviewSection.module.css'
import HeaderTittle from './HeaderTittle'
import Review from './Review'

function ReviewSection() {
  return (
    <div className={Styles.reviewSection}>
      <HeaderTittle tittle={'RESEÑAS'}/>
      <Review></Review>
      <Review></Review>
      <Review></Review>
      <Review></Review>
      <Review></Review>
      <Review></Review>
    </div>
  )
}

export default ReviewSection
