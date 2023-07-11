import React, { useState } from 'react';
import axios from 'axios';
import Styles from '../styles/Review.module.css'

const Review = () => {
    const [file, setFile] = useState(null);
    const [fileAux, setFileAux] = useState(null)

    const handleFileChange = (e) => {
        console.log(e.target.files[0])
        setFileAux(e.target.files[0])
        setFile(URL.createObjectURL(e.target.files[0]));
    };

    const handleImageUpload = async () => {
        // Create a FormData object to send the image file
        const url = 'http://localhost:4000/uploadImage'
        const formData = new FormData();
        formData.append('fileData', fileAux);
        formData.append('tripName', "tripname");
        formData.append('user', "user");
        formData.append('rating', 3);
        formData.append('review', "review");
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data; boundary=${data._boundary}`,'
            }
        }
        try {
            const response = await axios.post(url, formData, config)
            console.log(response.data); // File uploaded successfully
        } catch (error) {
            console.error('Error uploading file:', error.message);
            console.error(error.response.data)
        }
    };

    return (
        <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <img src={file} />
            <button onClick={handleImageUpload}>Upload</button>
        </div>
    )
};

export default Review;