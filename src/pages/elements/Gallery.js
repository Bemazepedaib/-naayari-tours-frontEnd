import React, { useState } from "react";
import Styles from '../../styles/elementStyles/Gallery.module.css'
import PhotoGallery from "./PhotoGallery";


function getImg(reviews){
  console.log(reviews)
}
function Gallery({ tripReviews }) {
    let i = 0;
    return (
        <div className={Styles.mainBackground}>
            <div className={Styles.reviewSection}>
                <h2 className={Styles.title}><hr />Experiencias Anteriores<hr /></h2>
                <div className={Styles.gallery}>
                    {
                        tripReviews.slice(0,30).map(review =><PhotoGallery key={i++} 
                            getImg={getImg}
                            review={review}></PhotoGallery>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery
