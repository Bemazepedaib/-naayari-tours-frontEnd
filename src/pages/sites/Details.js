import React from "react";
import { useOutletContext, useParams,useLocation } from "react-router-dom";
import Styles from '../../styles/Details.module.css'


const Detalles = (props) => {

    const trip=useLocation()


    const link="https://drive.google.com/uc?export=view&id="
    var fondo =trip.state.tripInformation.photo;
    const back=link+fondo;
    var tirolesa = "1EAP23WphKNrZnEZz2kLm1g51DHaZ4PUg";
    var tiro = "1xdUNPdRPW-99dalM7wgirY-Ea6pP103P";
    var guia = "17YdPzvN4BuYbSpjA5wJxDWq2TyYbO23E";
    var balneario = "1k_iWaV2734lgOYvmh9CEm-o5B43rtdRw";



    return (
        <div className="principal" style={{backgroundImage:"url("+back+")"}}>{console.log(trip)}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className="gradient">
                <title>Tour</title>
                <div className="container">

                    <div className="info">
                        <div className="tour-title">{trip.state.tripName}</div>
                        <div className="tour-detail">
                            <div className="tour-info">
                                <label>Fecha <i className="fa-solid fa-calendar-days"></i></label>
                                <span>Marzo 18 Marzo</span>
                            </div>
                            <div className="tour-info">
                                <label>Tiempo Aproximado <i className="fa-solid fa-clock"></i></label>
                                <span>10 horas</span>
                            </div>
                            <div className="tour-info">
                                <label>Categorias <i className="fa-solid fa-tags"></i></label>
                                <span>Agua / Extremo / Naturaleza</span>
                            </div>
                        </div>
                        <div className="tour-description">
                            {trip.state.tripInformation.description}
                        </div>
                        <div className="tour-activities">
                            <div className="header">Actividades</div>
                            <div className="list">
                                <div className="activities">
                                    <img src={link + tirolesa} alt="" />
                                    <label>Tirolesa</label>
                                </div>
                                <div className="activities">
                                    <img src={link + tiro} alt="" />
                                    <label>Tiro al blanco</label>
                                </div>
                                <div className="activities">
                                    <img src={link + guia} alt="" />
                                    <label>Guias especializados</label>
                                </div>
                                <div className="activities">
                                    <img src={link + balneario} alt="" />
                                    <label>Balneario</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalles;