import { Accordion } from 'react-bootstrap';
import Styles from '../../styles/FAQ.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Preguntas(link) {

    const linkCalendario = link;

    return (
        <div className={Styles.body}>
            <Navbar />
            <div className={Styles.contenedor}>
                <div className={Styles.titulo}>Preguntas frecuentes</div>
                <div className={Styles.accordion}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Button bsPrefix={Styles.header}>¿En donde están ubicados?</Accordion.Button>
                            <Accordion.Body bsPrefix={Styles.textBody}>
                                Nos ubicamos en Av. Che Guevara #84, Col. 2 de Agosto, Tepic, Nayarit, México.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Button bsPrefix={Styles.header}>¿Qué horarios manejan?</Accordion.Button>
                            <Accordion.Body bsPrefix={Styles.textBody}>
                                Las oficinas abren de Martes a Viernes en horario corrido de 10 am a 5 pm
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Button bsPrefix={Styles.header}>¿Cómo puedo pagar?</Accordion.Button>
                            <Accordion.Body bsPrefix={Styles.textBody}>
                                Para poder pagar existen 2 alternativas, la primera es por medio de un número de cuenta
                                que se proporcionará una vez hecha la reserva por internet, o también se puede hacer el pago
                                en las oficinas físicas.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Button bsPrefix={Styles.header}>¿Cuáles son los viajes de este mes?</Accordion.Button>
                            <Accordion.Body bsPrefix={Styles.textBody}>
                                <div>Da clic para ver el calendario del mes →
                                    <a href={linkCalendario}>Calendario</a>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Preguntas;