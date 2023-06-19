import React from 'react'
import MainVideo from './MainVideo'
import Styles from '../styles/Home.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import CatalogueCards from '../elements/CatalogueCards'
import TripSlider from '../elements/TripSlider';

export default function Home() {

  return (

    <div className={Styles.MainContainer}>
      <div className={Styles.VideoC}>
        <MainVideo />
      </div>
      <div className={Styles.NavbarC} id="Navbar" name="Navbar">
        <Navbar />
      </div>
      <div>
        <CatalogueCards />
      </div>
      <div>
        <TripSlider title={"LUGARES RECOMENDADOS PARA TI"} />
        <TripSlider title={"TOP 3 LUGARES"} />
        <TripSlider title={"VIAJES MAS FAMOSOS DE NAAYARI TOURS"} />
      </div>
      <Footer></Footer>
    </div>
  )
}