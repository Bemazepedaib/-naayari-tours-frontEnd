import React from 'react'
import MainVideo from './sites/MainVideo'
import Styles from '../styles/Home.module.css';
import Footer from './sites/Footer';
import Navbar from './sites/Navbar';
import CatalogueCards from './elements/CatalogueCards'

export default function Home() {

  return (

    <div className={Styles.MainContainer}>
      <div className={Styles.VideoC}>
        <MainVideo />
      </div>
      <div className={Styles.NavbarC}>
        <Navbar />
      </div>

      <div>
        <CatalogueCards/>
      </div>
      <Footer></Footer>
    </div>
  )
}