import React, { useState, useRef } from 'react';
import Styles from '../styles/elementStyles/Gallery.module.css'
import PhotoGallery from "./photoGallery";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function Gallery({ tripReviews }) {
    let i = 0;
    let stars = "";
    let photos = tripReviews.slice(0, tripReviews.length).map(review =>
        <div className={Styles.fotoGallery}>
            <PhotoGallery key={i++} getImg={getImg} review={review}></PhotoGallery>
        </div>).reverse();
    let photosGallery = useRef(photos);
    const [imgSelected, setImgSelected] = useState(false);
    const [visible, setVisible] = useState(10);
    const reviewInfo = useRef({ photo: '', user: '', rating: '', review: '', date: '' });
    const getMoreImages = () => {
        setVisible((prevValue) => prevValue + 10);
    }
    function getImg(reviews) {
        setImgSelected(true);
        reviewInfo.current.photo = reviews.photo + ''
        reviewInfo.current.user = reviews.user + ''
        reviewInfo.current.rating = reviews.rating + ''
        reviewInfo.current.date = reviews.date + ''
        reviewInfo.current.review = reviews.review + ''
    }
    { for (let index = 1; index <= reviewInfo.current.rating; index++) stars = stars + "⋆"; }
    if (tripReviews.length > 0) {
        return (
            <div className={Styles.mainContainer}>
                <div className={imgSelected ? Styles.imgOpen : Styles.imgClosed}>
                    <div className={Styles.cardContainer}>
                        <Image className={Styles.image} width={500} height={500} alt={'Image Selected'}
                            src={'https://drive.google.com/uc?export=view&id=' + reviewInfo.current.photo}></Image>
                        <div className={Styles.cardInformation}>
                            <h2 className={Styles.user}>{reviewInfo.current.user}</h2>
                            <hr className={Styles.horizontalLine} />
                            <span className={Styles.date}>Fecha de publicación: {reviewInfo.current.date}</span>
                            <span className={Styles.stars}>{stars}</span>
                            <p className={Styles.review}>{reviewInfo.current.review}</p>
                        </div>
                        <button className={Styles.btnClosed} onClick={() => setImgSelected(false)}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                    </div>
                </div>
                <div className={Styles.mainBackground}>
                    <div className={Styles.reviewSection}>
                        <h2 className={Styles.title} id='exp'><hr />Experiencias Anteriores<hr /></h2>
                        <div className={Styles.gallery}>
                            {photosGallery.current.slice(0, visible)}
                        </div>
                        <div className={Styles.btnSection}>
                            <button className={Styles.btnSeeMore} onClick={() => getMoreImages()}>VER MAS...</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery
