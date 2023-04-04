import React from 'react'
import CarouselNa from '../elements/CarouselNa'
import Styles from '../../styles/AboutUs.module.css'
import PersonalCard from '../elements/PersonalCard'
import GreenCard from '../elements/GreenCard'

const NayaariLogo = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'
const personalImage = 'https://drive.google.com/uc?export=view&id=1qNHWRp0bzELTHr12AUKak1jSNNziG1k7'
import Slide from 'react-reveal/Slide';
import Image from 'next/image';
function AboutUs() {
    return (
        <div>
            <div>
                <CarouselNa />
            </div>
            <div className={Styles.firstSection}>
                <Slide bottom>
                    <div className={Styles.headerSection}>
                        <div className={Styles.headerContainer}>
                            <h2 className={Styles.headerTittle}>PERSONAL DE NAAYARI TOURS</h2>
                        </div>
                    </div>
                </Slide>
                <div className={Styles.orgSection}>
                    <Slide bottom>
                        <PersonalCard
                            pImage={'https://drive.google.com/uc?export=view&id=19btwSGikY2d9n7lfNn0crS_9wlaottm-'}
                            role={'JEFE DE LOGISTICA Y OPERACIONES'}
                            roleInfo={'Tonatiuh es un guia al cual le encanta visitar los pueblos magicos para ver la cultura de cada una de ellos,' +
                                'probando la gastronomia de cada lugar al que visita.'} />
                        <PersonalCard
                            pImage={'https://drive.google.com/uc?export=view&id=19btwSGikY2d9n7lfNn0crS_9wlaottm-'}
                            role={'JEFE DE LOGISTICA Y OPERACIONES'}
                            roleInfo={'Tonatiuh es un guia al cual le encanta visitar los pueblos magicos para ver la cultura de cada una de ellos,' +
                                'probando la gastronomia de cada lugar al que visita.'} />
                        <PersonalCard
                            pImage={'https://drive.google.com/uc?export=view&id=19btwSGikY2d9n7lfNn0crS_9wlaottm-'}
                            role={'JEFE DE LOGISTICA Y OPERACIONES'}
                            roleInfo={'Tonatiuh es un guia al cual le encanta visitar los pueblos magicos para ver la cultura de cada una de ellos,' +
                                'probando la gastronomia de cada lugar al que visita.'} />
                    </Slide>
                </div>
            </div>
            <div className={Styles.infoSection}>
                <div className={Styles.infoContainer}>
                    <div className={Styles.infoImageContainer}>
                        <Slide bottom>
                            <Image
                                width={500}
                                height={500}
                                className={Styles.infoImage}
                                src={NayaariLogo}
                            />
                        </Slide>
                    </div>
                    <Slide bottom>
                        <h2 className={Styles.infoMainTittle}>Naayari Tours nos cuenta</h2>
                    </Slide>
                    <hr />
                    <Slide bottom>
                        <div className={Styles.infoCards}>
                            <GreenCard tittle={'Historia'}
                                text={'Nace en el 2016, un grupo de 4 personas emprendedoras e interesadas en promover las riquezas naturales de nuestro bello estado,' +
                                    'amantes de la naturaleza y nuestras tradiciones y cultura.'} />
                            <GreenCard tittle={'Misión'}
                                text={'Incentivar el turismo de naturaleza preservando las riquezas naturales y culturales del estado de Nayarit,' +
                                    'siendo promotores de actividades turísticas sustentables y apoyando al crecimiento de la economía local.'} />
                            <GreenCard tittle={'Visión'}
                                text={'Ser la tour operador líder en el estado de Nayarit, buscando siempre la satisfacción de nuestro clientes' +
                                    'y así mismo darles una nueva e innovadora opción de experiencias inolvidables.'} />
                        </div>
                    </Slide>
                </div>
            </div>
            <div className={Styles.thirdSection}>
                <Slide bottom>
                    <div className={Styles.headerSection}>
                        <div className={Styles.headerContainer}>
                            <h2 className={Styles.headerTittle}>VALORES DE NAAYARI TOURS</h2>
                        </div>
                    </div>
                </Slide>
                <div className={Styles.valuesSection}>
                    <div className={Styles.valuesContainer}>
                        <Slide bottom>
                            <div className={Styles.valueContainerImg}>
                                <Image className={Styles.valueImg}
                                    width={500}
                                    height={500}
                                    src={personalImage}
                                />
                            </div>
                        </Slide>
                        <Slide bottom>
                            <div className={Styles.valuesCards}>
                                <GreenCard tittle={'Compromiso'}
                                    text={'Es cumplir con lo prometido cuando las circunstancias se ponen adversas y mantener los compromisos, son la esencia de la proactividad.'} />
                                <GreenCard tittle={'Amor'}
                                    text={'Dedicarnos a aquello a lo que dedicamos atención y práctica, ya que nos motiva a mejorarnos, realizando actividades' +
                                        'y experiencias que nos hacen sentir un placer tremendo ensuciarnos el cuerpo.'} />
                                <GreenCard tittle={'Respeto'}
                                    text={'Apreciar y valorar a nuestros trabajadores y clientes, tal y como son, aceptar sus diferentes creencias y capacidades,' +
                                        'dando tour a cualquiera que requiera de nuestros servicios.'} />
                                <GreenCard tittle={'Tolerancia'}
                                    text={'Respeto, la aceptación y el aprecio de la riquea infinita de las culturas,' +
                                        'de nuestras formas de expresión y medios de ser humanos.'} />
                                <GreenCard tittle={'Equidad'}
                                    text={'Respeto a las características particulares de cada individuo, tratando por igual,'+
                                       'independiente de su clase social, raza, sexo o religión'} />
                                <GreenCard tittle={'Colaboración'}
                                    text={'Participar de esfuerzos colectivos sin tener en cuenta el beneficio personal'+
                                        'e individual sino el beneficio para todo el grupo o la comunidad.'} />
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs
