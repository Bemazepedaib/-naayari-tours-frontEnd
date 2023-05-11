import React, { useRef, useState } from 'react';

import Styles from '../../styles/elementStyles/ContratoPdf.module.css'

import { useRouter } from 'next/router';

import Image from 'next/image';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ContratoPdf() {

    const Header = 'https://drive.google.com/uc?export=view&id=1BKC3ZvHOvZZ3S8DYHa_Ux7WHuDCfo5hE'
    const Footer = 'https://drive.google.com/uc?export=view&id=1Audw8DRFk6sEm3WwHAo45owPgDGfQzxP'

    const { query: { cliente, celular, lugares, tour, fechaViaje, anticipo, resto } } = useRouter();

    const fechaHoy = new Date(Date.now()).toISOString().split("T")[0].split("-")

    const [salida, setSalida] = useState()
    const [error, setError] = useState("")

    const pdfRef = useRef()

    const generarContrato = async () => {
        setError("")
        if (!salida){ setError("¡Seleccione una hora válida!"); return; }
        const element = pdfRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(data, 'PNG', 0, 0);
        pdf.save(`Contrato de ${cliente}.pdf`)
        window.history.back()
    }

    const switchMes = (numMes) => {
        switch (numMes) {
            case "01":
                return "Enero";
            case "02":
                return "Febrero";
            case "03":
                return "Marzo";
            case "04":
                return "Abril";
            case "05":
                return "Mayo";
            case "06":
                return "Junio";
            case "07":
                return "Julio";
            case "08":
                return "Agosto";
            case "09":
                return "Septiembre";
            case "10":
                return "Octubre";
            case "11":
                return "Noviembre";
            case "12":
                return "Diciembre";
        }
    }

    const dia = fechaHoy[2]
    const mes = switchMes(fechaHoy[1])
    const año = fechaHoy[0]

    const newFecha = fechaViaje.split("-")[2] + " de " + switchMes(fechaViaje.split("-")[1])

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.buttonsContainer}>
                <div className={Styles.titulo}> Hora de salida </div>
                <input
                    type='time'
                    value={salida}
                    onChange={(e) => setSalida(e.target.value)}
                    onBlur={(e) => setSalida(e.target.value)}
                    className={Styles.inputTime}
                ></input>
                <div className={Styles.error}> {error} </div>
                <button onClick={generarContrato} className={Styles.confirmButton} >Generar contrato</button>
            </div>
            <div className={Styles.pdf} ref={pdfRef}>
                <Image src={Header} width={650} height={92} alt='Header' className={Styles.imgHeader} ></Image>
                <div className={Styles.header}>CONTRATO DE RESERVA NAAYARI TOURS</div>
                <div className={Styles.fecha}>Tepic, Nay. A <u>{dia}</u> de <u>{mes}</u> del <u>{año}</u></div>
                <div className={Styles.textoGeneral}>
                    <p>La tour-operadora <b>Naayari tours</b> con domicilio en <b>Av. Che Guevara #84, Col. 2 de Agosto en Tepic</b>
                        &nbsp; acredita que el C. <u>{cliente}</u> con número de celular: <u>{celular}</u></p>
                    <p>Reserva <u>{lugares}</u> lugares al tour con nombre <u>{tour}</u> programado para la fecha del&nbsp;
                        <u>{newFecha}</u> con hora de salida las <u>{salida}</u> con un formato de 24 horas.</p> 
                    <p>Reserva con un anticipo de $<u>{anticipo}</u>, restando la cantidad de $<u>{resto}</u> misma que deberá
                        liquidarse el día del tour antes de partir en efectivo siendo el caso de un tour ida y vuelta el mismo día.</p>
                    <p>Si el tour es con abonos, se estipula que sus fechas serán cada ___ días de los próximos ___ por la cantidad
                        de $___, quedando en acuerdo que los abonos deberán cubrirse en tiempo y forma para terminar de liquidarse a
                        más tardar 7 días antes de la fecha de su viaje.</p>
                    <b>ACUERDOS:</b>
                    <p></p>
                    <ol>
                        <li>
                            La empresa Naayari Tours <b>no maneja reembolso</b> en caso de cancelación por parte del cliente ni se maneja ninún tipo de ajuste a cuenta, en caso de reservar cierto número de boletos y después reducirlo, se deberá cubrir el total mencionado en este presente contrato desde un inicio.
                        </li>
                        <li>
                            Debido a la situación sanitaria del COVID-19 nos apegamos a los protocoloes e indicaciones que se giren en dicho momento ya sea dentro del estado de Nayarit o fuera de él, con el fin de salvaguardar la salud tanto de usted como cliente, así como del equipo de trabajo, quedando de acuerdo que si por dicha razón no se realiza el recorrido, se pospondrá hasta nuevo aviso, quedando sus abonos en cupón abierto para esperar a la siguiente fecha, o bien usarlo para cualquier otro recorrido ofertado, cubriendo el equivalente al resto.
                        </li>
                        <li>
                            Sujeto a reprogramación de fehca por mal clima o alguna alerta emitida por desastre natural.
                        </li>
                        <li>
                            El transporte de cada recorrido se adecúa dependiendo el número de reservaciones, puede ir desde una van exprés hasta Sprinter o autobús según sea el caso, además se estipula que en caso de ser Sprinter o autobús, los lugares serán asignados de acuerdo al orden de como se vaya liquidando en su totalidad su reserva.
                        </li>
                        <li>
                            En caso de solicitar una cancelación de boleto por urgencia médica, deberá ser comprobable con alguna receta o diagnóstico expedido oficialmente a nobmre del cliente que cancela y con fecha vigente, quedando de acuerdo que del total de su reserva se le hará un descuento de $120 equivalente al costo que la empresa paga por el seguro de viajero activado a su nombre y por ende no puede ser transferido a otra persona.
                        </li>
                        <li>
                            Los participantes deberán presentarse a más tardar 10 minutos antes de la hora de salida para evitar retrasar el itinerario del tour. Cabe mencionar que se darán 10 min de tolerancia después de la hora de salida, después de dicho tiempo se procederá a seguir con el itinerario, de no llegar, sus boletos se darán como cumplidos.
                        </li>
                        <p></p>
                        <b>FAVOR DE CONSERVAR ESTE COMPROBANTE PARA FUTURAS ACLARACIONES.</b>
                    </ol>
                </div>
                <Image src={Footer} width={650} height={92} alt='Futer' className={Styles.imgFooter}></Image>
            </div>
        </div>
    )
}

export default ContratoPdf;