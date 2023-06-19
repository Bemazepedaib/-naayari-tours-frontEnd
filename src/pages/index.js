import React from 'react'
import MainVideo from './MainVideo'
import Styles from '../styles/Home.module.css';
import Footer from './Footer';
import Navbar from './Navbar';
import CatalogueCards from '../elements/CatalogueCards'
import TripsSliders from 'naayari-tours/elements/TripsSliders';


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
        <TripsSliders />
      </div>
      <Footer></Footer>
    </div>
  )
}