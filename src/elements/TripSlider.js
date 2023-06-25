import React, { useEffect } from 'react'
import Styles from '../styles/elementStyles/TripSlider.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef, useState } from 'react';
import Router from "next/router";
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TripSlider = ({ title, preferences }) => {
  const sliderRef = useRef(null)
  let a = 0;
  var variable = {
    infinite: true,
    slidesToShow: window.innerWidth <= 1080 ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false
  };
  const [settings, setSettings] = useState(variable);
  const goToDetailCard = (name) => {
    Router.push({
      pathname: '/DetailCard',
      query: { name }
    })
  }
  useEffect(() => {
    const handleResize = () => {
      var variable = {
        infinite: true,
        slidesToShow: window.innerWidth <= 1080 ? 1 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        arrows: false
      };
      setSettings(variable)

    };

    // Agregar el evento 'resize' al cargar el componente
    window.addEventListener('resize', handleResize);

    // Eliminar el evento 'resize' al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
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
          <Slider ref={sliderRef} {...settings} className={Styles.prueba}>
            {
              preferences.map(preference => (
                <div className={Styles.cardsContainer} key={a++}>
                  <div className={Styles.imageContainer} onClick={() => goToDetailCard(preference.tripName)}>
                    <img className={Styles.imageCa}
                      src={'https://drive.google.com/uc?export=view&id=' + preference.tripInformation.photo} alt=''>
                    </img>
                    <div className={Styles.overlayTitle}>
                      <h3 className={Styles.title}>{preference.tripName}</h3>
                    </div>
                    <div className={Styles.overlayInfo}>
                      <h3 className={Styles.title}>{preference.tripName}</h3>
                      <p className={Styles.catpd}>
                        {preference.tripInformation.description.slice(0, 200)}...
                      </p>
                    </div>
                  </div>
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
