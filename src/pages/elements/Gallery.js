import React, { useState, useRef } from 'react';
import Styles from '../../styles/elementStyles/Gallery.module.css'
import PhotoGallery from "./PhotoGallery";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Gallery({ tripReviews }) {
    let i = 0;
    const photos = tripReviews.slice(0, 30).map(review => <PhotoGallery key={i++} getImg={getImg} review={review}></PhotoGallery>);
    const photosGallery = useRef(photos);
    const [imgSelected, setImgSelected] = useState(false);
    const reviewInfo = useRef({ photo: '', user: '',rating: '',review: '',date: '' });

    function getImg(reviews) {
        setImgSelected(true);
        reviewInfo.current.photo = reviews.photo + ''
        reviewInfo.current.user = reviews.user + ''
        reviewInfo.current.rating = reviews.rating + ''
        reviewInfo.current.date = reviews.date + ''
        reviewInfo.current.review = reviews.review + ''
        console.log(reviews)
    }
    return (
        <div className={Styles.mainContainer}>
            <div className={imgSelected ? Styles.imgOpen : Styles.imgClosed} onClick={() => setImgSelected(false)}>
                <div className={Styles.cardContainer}>
                <Image className = {Styles.image}width={500} height={500} alt={'Image Selected'}
                    src={'https://drive.google.com/uc?export=view&id=' + reviewInfo.current.photo}></Image>
                 <div className={Styles.cardInformation}>
                    <h2>{reviewInfo.current.user}</h2>
                    <p>{reviewInfo.current.review}</p>
                    <hr className={Styles.horizontalLine}/>
                 </div>
                <button className = {Styles.btnClosed}onClick={() => setImgSelected(false)}><FontAwesomeIcon icon={faXmark}></FontAwesomeIcon></button>
                </div>
            </div>
            <div className={Styles.mainBackground}>
                <div className={Styles.reviewSection}>
                    <h2 className={Styles.title}><hr/>Experiencias Anteriores<hr/></h2>
                    <div className={Styles.gallery}>
                        {photosGallery.current}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery
