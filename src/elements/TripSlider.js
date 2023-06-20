import React from 'react'
import Styles from '../styles/elementStyles/TripSlider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
let a = 0;
var settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: true,
  arrows: true
};
const TripSlider = ({ title,preferences }) => {
  const sliderRef = useRef(null)
  console.log(preferences)
  return (
    <div>
      <div className={Styles.header}>
        <h2 className={Styles.headerTitle}>{title}</h2>
      </div>
      <div className={Styles.container}>
        <div className={Styles.buttons}>
          <div className={Styles.buttonBack} onClick={() => sliderRef.current.slickPrev()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </div>
        <div className={Styles.sliderContainer}>
          <Slider ref={sliderRef} {...settings}>
            {
              preferences.map(preference => (
                <div className={Styles.imageContainer} key={a++}>
                  <img className={Styles.imageCa}
                    src={'https://drive.google.com/uc?export=view&id='+preference.tripInformation.photo} alt=''>
                  </img>
                </div>
              ))
            }
          </Slider>
        </div>
        <div className={Styles.buttons}>
          <div className={Styles.buttonNext} onClick={() => sliderRef.current.slickNext()}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripSlider
