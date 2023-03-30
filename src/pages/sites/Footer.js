import React from 'react'
const image = 'https://drive.google.com/uc?export=view&id=1Gx08yGg-rGq0tUe5yVHWxbkaMfmrUOk0'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import Styles from '../../styles/Footer.module.css'
function Footer() {
    return (
        <div>
            <div className={Styles.footerDistributed}>

                <div className={Styles.footerLeft}>
                    <img src={image} />
                    <p>¡Viajar es cultura!
                        <br></br>
                        Somos una tour operadora de turismo Rural, Ecoturismo y de Aventura,
                        nuestro objetivo es mostrarte las riquezas naturales de Nayarit.
                        <br></br>Naayari Tours © 2023</p>
                </div>

                <div className={Styles.footerCenter}>
                    <div>
                        <a href="//api.whatsapp.com/send?phone=523119104138&text=¡Hola!, necesito información.">
                            <FontAwesomeIcon icon={faComment} className={Styles.icon} />
                        </a>
                        <a href="//api.whatsapp.com/send?phone=523119104138&text=¡Hola!, necesito información.">
                            <p>+52 311 910 4138</p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.google.com/maps/@21.4811868,-104.867171,3a,75y,119.94h,86.92t/data=!3m7!1e1!3m5!1s8QHh_X8lk1xe6fX13yxktA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D8QHh_X8lk1xe6fX13yxktA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D156.55252%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192">
                            <FontAwesomeIcon icon={faLocationDot} className={Styles.icon} />
                        </a>
                        <p>
                            <span>
                                <a href="https://www.google.com/maps/@21.4811868,-104.867171,3a,75y,119.94h,86.92t/data=!3m7!1e1!3m5!1s8QHh_X8lk1xe6fX13yxktA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D8QHh_X8lk1xe6fX13yxktA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D156.55252%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192">
                                    Av. Cheguevara No. 84
                                </a>
                            </span>
                            <a href="https://www.google.com/maps/@21.4811868,-104.867171,3a,75y,119.94h,86.92t/data=!3m7!1e1!3m5!1s8QHh_X8lk1xe6fX13yxktA!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D8QHh_X8lk1xe6fX13yxktA%26cb_client%3Dmaps_sv.tactile.gps%26w%3D203%26h%3D100%26yaw%3D156.55252%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192">
                                Col. 2 de Agosto, Tepic, Mexico
                            </a>
                        </p>
                    </div>
                    <div>
                        <a href="mailto:naayaritour@gmail.com"><FontAwesomeIcon icon={faEnvelope} className={Styles.icon} /></a>
                        <p>
                            <a href="mailto:naayaritour@gmail.com">Naayaritour@gmail.com
                            </a>
                        </p>
                    </div>

                </div>

                <div className={Styles.footerRight}>
                    <p className={Styles.footerCompanyAbout}>
                        <span>REDES SOCIALES</span>
                        Siguenos en nuestras redes sociales y enterate de las novedades que Naayari tours tiene para ti.
                    </p>
                    <div className={Styles.footerIcons}>
                        <a href="https://www.facebook.com/naayaritours"><FontAwesomeIcon icon={faFacebook} className={Styles.icon} /></a>
                        <a href="https://www.instagram.com/naayaritours/"><FontAwesomeIcon icon={faInstagram} className={Styles.icon} /></a>
                        <a href="https://www.tiktok.com/@naayaritours?_d=secCgYIASAHKAESPgo8pRAZCFGsR5u7V5ZlqckAU5U7yfm1ARMXAMYaQMcK74vcEdDRIBSl%2F1mSNzpJ8qRgviygqjDOwF3XjWgIGgA%3D&object_id=7194876085094663174&page_open_method=scan_code&schema_type=4&sec_uid=MS4wLjABAAAAk6WmYiMmPYGCs0zu9U-qLcjFbPBtkwvQXOXDCmhOGvdVjW4WV6RZ_2p-rC2T6qti&share_app_id=1233&share_author_id=7194876085094663174&share_uid=7194876085094663174&tt_from=scan_code&utm_campaign=client_scan_code&utm_medium=2&utm_source=scan_code&_r=1">
                        <FontAwesomeIcon icon={faTiktok} className={Styles.icon} />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
