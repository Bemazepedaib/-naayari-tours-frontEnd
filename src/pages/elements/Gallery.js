import React, { useState,useRef } from 'react';
import Styles from '../../styles/elementStyles/Gallery.module.css'
import PhotoGallery from "./PhotoGallery";



function Gallery({ tripReviews }) {
    function getImg(reviews) {
        console.log(reviews)
        setImgSelected(true);
        setReviewSelected(reviews);
    }
    let i = 0;
    const photos = tripReviews.slice(0, 30).map(review => <PhotoGallery key={i++} getImg={getImg} review={review}></PhotoGallery>);
    const reference = useRef(photos);
    const [imgSelected, setImgSelected] = useState(false);
    const [reviewSelected, setReviewSelected] = useState(null);
        return (
            <div className={Styles.mainBackground}>
                <div className={Styles.reviewSection}>
                    <h2 className={Styles.title}><hr />Experiencias Anteriores<hr /></h2>
                    <div className={Styles.gallery}>
                        {reference.current}
                    </div>
                </div>
            </div>
    )
}

export default Gallery
