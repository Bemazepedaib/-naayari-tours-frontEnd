import React from 'react'
import Image from 'next/image'

import Styles from '../../styles/elementStyles/ReservationPayment.module.css'

function ReservationPayment({ anticipo, innerRef } ) {
    const Header = 'https://drive.google.com/uc?export=view&id=1BKC3ZvHOvZZ3S8DYHa_Ux7WHuDCfo5hE'
    const Footer = 'https://drive.google.com/uc?export=view&id=1Audw8DRFk6sEm3WwHAo45owPgDGfQzxP'

    return (
        <div className={Styles.mainContainer} ref={innerRef}>
            <Image src={Header} width={650} height={92}></Image>
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
            <Image src={Footer} width={650} height={92}></Image>
        </div>
    )
}

export default ReservationPayment