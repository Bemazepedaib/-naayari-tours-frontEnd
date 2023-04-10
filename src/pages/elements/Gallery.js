import React, { useState } from "react";
import Styles from '../../styles/Gallery.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

function Gallery() {
    let data = [
        {
            id: 1,
            imgSrc: 'https://cdn.pixabay.com/photo/2020/02/16/07/55/beach-4852830_1280.jpg'
        },
        {
            id: 2,
            imgSrc: 'https://cdn.pixabay.com/photo/2021/03/12/12/28/beach-6089501_1280.jpg'
        },
        {
            id: 3,
            imgSrc: 'https://cdn.pixabay.com/photo/2022/06/09/10/13/beach-7252178_1280.jpg'
        },
        {
            id: 4,
            imgSrc: 'https://cdn.pixabay.com/photo/2016/04/18/22/05/seashells-1337565_1280.jpg'
        },
        {
            id: 5,
            imgSrc: 'https://cdn.pixabay.com/photo/2016/11/23/13/48/beach-1852945_1280.jpg'
        },
        {
            id: 6,
            imgSrc: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg'
        },
        {
            id: 7,
            imgSrc: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg'
        },
        {
            id: 8,
            imgSrc: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg'
        },
        {
            id: 9,
            imgSrc: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg'
        },
        {
            id: 10,
            imgSrc: 'https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_1280.jpg'
        },
    ]
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <div className={Styles.mainBackground}>
            <div className={model ? Styles.imageContainerOpen : Styles.Model}>
                <div className={Styles.imagePreviewLeft}>
                    <img src={tempimgSrc} className={Styles.imageOpen} />
                </div>
                <div className={Styles.imagePreviewRight}>
                    <h2>Rodrigo Castiello Gonzalez Gonzalez</h2>
                </div>
            </div>
            <div className={Styles.reviewSection}>
                <h2 className={Styles.title}><hr />Experiencias Anteriores<hr /></h2>
                <div className={Styles.gallery}>
                    {data.map((item, index) => {
                        return (
                            <div className={Styles.pics} key={index} onClick={() => getImg(item.imgSrc)}>
                                <img src={item.imgSrc} height={((Math.random() * 10) + 5) * 30} className={Styles.image} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Gallery
