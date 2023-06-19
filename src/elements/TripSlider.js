import React from 'react'
import Styles from '../styles/elementStyles/TripSlider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from 'react';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

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
const TripSlider = ({ title }) => {
  const sliderRef = useRef(null)
  return (
    <div>
      <div className={Styles.header}>
        <h2 className={Styles.headerTitle}>{title}</h2>
      </div>
      <div className={Styles.container}>
        <div className={Styles.buttons}>
          <div className={Styles.buttonBack} onClick={() => sliderRef.current.slickPrev()}>
            <ArrowBackIos />
          </div>
        </div>
        <div className={Styles.sliderContainer}>
          <Slider ref={sliderRef} {...settings}>
            {
              Array(10).fill('').map(() => (
                <div className={Styles.imageContainer} key={a++}>
                  <img className={Styles.imageCa}
                    src='https://cf-images.eu-west-1.prod.boltdns.net/v1/static/3588749423001/a880e174-faca-40d2-b36c-2ae929095d4f/fc2797bc-6c33-4150-be12-6860453fceb9/1280x720/match/image.jpg' alt=''>
                  </img>
                </div>
              ))
            }
          </Slider>
        </div>
        <div className={Styles.buttons}>
          <div className={Styles.buttonNext} onClick={() => sliderRef.current.slickNext()}>
            <ArrowForwardIos />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TripSlider
