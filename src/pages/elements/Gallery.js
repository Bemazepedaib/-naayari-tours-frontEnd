import React, { useState } from "react";
import Styles from '../../styles/elementStyles/Gallery.module.css'
import PhotoGallery from "./PhotoGallery";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Gallery({ tripReviews }) {
    let i=0;
    return (
        <div className={Styles.mainBackground}>
            <div className={Styles.reviewSection}>
                <h2 className={Styles.title}><hr />Experiencias Anteriores<hr /></h2>
                <div className={Styles.gallery}>
                    {
                        tripReviews.slice(0,30).map(review => <PhotoGallery key={i++} review={review}></PhotoGallery>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery
