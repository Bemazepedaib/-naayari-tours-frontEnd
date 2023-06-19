import React, { useRef } from 'react'
import Image from 'next/image'

import Styles from '../styles/elementStyles/ReservationPayment.module.css'

import html2canvas from 'html2canvas';
import { Button } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';

import { useRouter } from 'next/router';

function ReservationPayment() {
    const Header = 'https://drive.google.com/uc?export=view&id=1BKC3ZvHOvZZ3S8DYHa_Ux7WHuDCfo5hE'
    const Futer = 'https://drive.google.com/uc?export=view&id=1Audw8DRFk6sEm3WwHAo45owPgDGfQzxP'

    const innerRef = useRef();

    const { query: { anticipo } } = useRouter();

    const generarTicket = async () => {
        const element = innerRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/jpg');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
            link.href = data;
            link.download = `Anticipo.jpg`;

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            window.open(data);
        }
    }

    return (
        <div>
            <Navbar />
            <div className={Styles.mainContainer}>
                <Button onClick={generarTicket} bsPrefix={Styles.confirmButton}> Click para descargar voucher </Button>
                <div className={Styles.voucherView} ref={innerRef}>
                    <Image src={Header} width={650} height={92} alt='Header' className={Styles.img}></Image>
                    <div className={Styles.voucher}>
                        <p>Para concluir con su proceso de reserva, por favor pagar la cantidad de:</p>
                        <p><b>${anticipo}</b></p>
                        <p>al número de cuenta:</p>
                        <p><b>4169 1608 6438 5654</b></p>
                        <p>tomar captura del pago y mandarla vía whatsapp al:</p>
                        <p><b>+52 311 910 4138</b></p>
                        <p>o en su defecto, hacer el pago físicamente en las oficinas ubicadas en:</p>
                        <p><b>Av. Cheguevara #84, Col. 2 de Agosto, Tepic, Nayarit, México</b></p>
                        <p>Con gusto los recibiremos.</p>
                        <p>¡Gracias!</p>
                    </div>
                    <Image src={Futer} width={650} height={92} alt='Footer' className={Styles.img}></Image>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ReservationPayment