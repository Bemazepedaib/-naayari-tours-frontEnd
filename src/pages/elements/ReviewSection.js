import React from 'react'
import Styles from '../../styles/elementStyles/ReviewSection.module.css'
import HeaderTittle from './HeaderTittle'
import Review from './Review'
import ReviewImages from './ReviewImages'

function ReviewSection() {
  return (
    <div className={Styles.reviewSection}>
      <ReviewImages/>
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
