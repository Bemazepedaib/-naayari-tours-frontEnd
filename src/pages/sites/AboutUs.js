import React from 'react'
import CarouselNa from '../elements/CarouselNa'
import Styles from '../../styles/AboutUs.module.css'
import Slide from 'react-reveal/Slide';
import Image from 'next/image';

const NayaariLogo = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'
const personal1 = 'https://drive.google.com/uc?export=view&id=19btwSGikY2d9n7lfNn0crS_9wlaottm-'
const personal2 = 'https://drive.google.com/uc?export=view&id=19btwSGikY2d9n7lfNn0crS_9wlaottm-'
const personal3 = 'https://drive.google.com/uc?export=view&id=19btwSGikY2d9n7lfNn0crS_9wlaottm-'
const personalImage = 'https://drive.google.com/uc?export=view&id=1qNHWRp0bzELTHr12AUKak1jSNNziG1k7'

function AboutUs() {
    return (
        <div>
            <div>
                <CarouselNa />
            </div>
            <div className={Styles.orgSection}>
                <div className={Styles.orgContainer}>
                    <Slide bottom>
                        <div className={Styles.persoContainer}><h2 className={Styles.persoTittle}>PERSONAL DE NAAYARI TOURS</h2></div>
                    </Slide>
                    <Slide bottom>
                        <div className={Styles.orgCards}>
                            <div className={Styles.orgtextCard}>
                                <div className={Styles.orgImage}>
                                    <Image className={Styles.personalImage}
                                        width={500}
                                        height={500}
                                        src={personal1}
                                    />
                                </div>
                                <div className={Styles.orgInfo}>
                                    <h3 className={Styles.orgRoleTittle}>JEFE DE LOGISTICA Y OPERACIONES</h3>
                                    <p className={Styles.orgRoleInfo}>Tonatiuh es un guia al cual le encanta visitar los pueblos magicos
                                        para ver la cultura de cada una de ellos, probando la gastronomia
                                        de cada lugar al que visita.</p>
                                </div>
                            </div>
                            <div className={Styles.orgtextCard}>
                                <div className={Styles.orgImage}>
                                    <Image className={Styles.personalImage}
                                        width={500}
                                        height={500}
                                        src={personal2}
                                    />
                                </div>
                                <div className={Styles.orgInfo}>
                                    <h3 className={Styles.orgRoleTittle}>JEFE DE LOGISTICA Y OPERACIONES</h3>
                                    <p className={Styles.orgRoleInfo}>Tonatiuh es un guia al cual le encanta visitar los pueblos magicos
                                        para ver la cultura de cada una de ellos, probando la gastronomia
                                        de cada lugar al que visita.</p>
                                </div>
                            </div>
                            <div className={Styles.orgtextCard}>
                                <div className={Styles.orgImage}>
                                    <Image className={Styles.personalImage}
                                        width={500}
                                        height={500}
                                        src={personal3}
                                    />
                                </div>
                                <div className={Styles.orgInfo}>
                                    <h3 className={Styles.orgRoleTittle}>JEFE DE LOGISTICA Y OPERACIONES</h3>
                                    <p className={Styles.orgRoleInfo}>Tonatiuh es un guia al cual le encanta visitar los pueblos magicos
                                        para ver la cultura de cada una de ellos, probando la gastronomia
                                        de cada lugar al que visita.</p>
                                </div>
                            </div>
                        </div>
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
                            <div className={Styles.infoTextCards}>
                                <h3 className={Styles.infoTitle}>Historia<hr /></h3>
                                <p className={Styles.infoParagraph}>Nace en el 2016, un grupo de 4 personas emprendedoras e interesadas en promover las riquezas naturales de nuestro bello estado, amantes de la naturaleza y nuestras tradiciones y cultura. </p>
                            </div>
                            <div className={Styles.infoTextCards}>
                                <h3 className={Styles.infoTitle}>Misión<hr /></h3>
                                <p className={Styles.infoParagraph}>Incentivar el turismo de naturaleza preservando las riquezas naturales y culturales del estado de Nayarit, siendo promotores de actividades turísticas sustentables y apoyando al crecimiento de la economía local.</p>
                            </div>
                            <div className={Styles.infoTextCards}>
                                <h3 className={Styles.infoTitle}>Visión<hr /></h3>
                                <p className={Styles.infoParagraph}>Ser la tour operador líder en el estado de Nayarit, buscando siempre la satisfacción de nuestro clientes y así mismo darles una nueva e innovadora opción de experiencias inolvidables.</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className={Styles.valuesSection}>
                <div className={Styles.valuesContainer}>
                    <Slide bottom>
                        <div className={Styles.valuesContainerTitle}><h2 className={Styles.valuesTitle}>VALORES DE NAAYARI TOURS</h2></div>
                    </Slide>
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
                            <div className={Styles.valuesTextCard}>
                                <h3 className={Styles.valuesSubtittle}>Compromiso</h3><hr></hr>
                                <p className={Styles.valuesDescription}>Es cumplir con lo prometido cuando las circunstancias se ponen adversas y mantener los compromisos, son la esencia de la proactividad.</p>
                            </div>
                            <div className={Styles.valuesTextCard}>
                                <h3 className={Styles.valuesSubtittle}>Amor</h3><hr></hr>
                                <p className={Styles.valuesDescription}>Dedicarnos a aquello a lo que dedicamos atención y práctica, ya que nos motiva a mejorarnos, realizando actividades
                                    y experiencias que nos hacen sentir un placer tremendo ensuciarnos el cuerpo.</p>
                            </div>
                            <div className={Styles.valuesTextCard}>
                                <h3 className={Styles.valuesSubtittle}>Respeto</h3><hr></hr>
                                <p className={Styles.valuesDescription}>Apreciar y valorar a nuestros trabajadores y clientes, tal y como son, aceptar sus diferentes creencias y capacidades, dando tour a cualquiera que requiera
                                    de nuestros servicios.
                                </p>
                            </div>
                            <div className={Styles.valuesTextCard}>
                                <h3 className={Styles.valuesSubtittle}>Tolerancia</h3><hr></hr>
                                <p className={Styles.valuesDescription}>Respeto, la aceptación y el aprecio de la riquea infinita de las culturas,
                                    de nuestras formas de expresión y medios de ser humanos.</p>
                            </div>
                            <div className={Styles.valuesTextCard}>
                                <h3 className={Styles.valuesSubtittle}>Equidad</h3><hr></hr>
                                <p className={Styles.valuesDescription}>Respeto a las características particulares de cada individuo, tratando por igual,
                                    independiente de su clase social, raza, sexo o religión</p>
                            </div>
                            <div className={Styles.valuesTextCard}>
                                <h3 className={Styles.valuesSubtittle}>Colaboración</h3><hr></hr>
                                <p className={Styles.valuesDescription}>Participar de esfuerzos colectivos sin tener en cuenta el beneficio personal
                                    e individual sino el beneficio para todo el grupo o la comunidad.</p>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>

    )
}

export default AboutUs
