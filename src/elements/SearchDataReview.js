import React, { useState } from 'react'
import Styles from '../styles/elementStyles/SearchDataReview.module.css'

import Table from 'react-bootstrap/Table';
import HeaderTittle from './HeaderTittle';

import ModalReview from './ModalReview';

function SearchDataReview({ dataReview }) {

    let a = 0;

    const newData = dataReview.tripReview.map(({ __typename, ...rest }) => { return rest }) 

    const [data, setData] = useState(newData);
    const [reviews, setReviews] = useState(data);
    const [reviewsTable, setReviewsTable] = useState(data);

    const handleChange = (e) => {
        filter(e.target.value);
    }

    const filter = (term) => {
        let searchResult = reviewsTable.filter((element) => {
            if (element.user.toString().toLowerCase().includes(term.toLowerCase())) {
                return element;
            }
        })
        setReviews(searchResult);
    }

    return (
        <div className={Styles.mainContainer}>
            <div className={Styles.inputContainer}>
                <HeaderTittle tittle={"Buscar reseña"}></HeaderTittle>
                <input className={Styles.inputText} onChange={handleChange} placeholder='Ingrese datos de la reseña a buscar'></input>
            </div>
            <div className={Styles.tableContainer}>
                <Table responsive size='sm' striped bordered hover className={Styles.table}>
                    <thead className={Styles.tHead}>
                        <tr>
                            <th className={Styles.column}>Usuario</th>
                            <th className={Styles.column}>Fecha</th>
                            <th className={Styles.column}>Rating</th>
                            <th className={Styles.column}>Visualizar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(review => (
                            <tr key={a++}>
                                <td className={Styles.column}>
                                    {review.user}
                                </td>
                                <td className={Styles.column}>
                                    {review.date}
                                </td>
                                <td className={Styles.column}>
                                    {review.rating}
                                </td>
                                <td>
                                    <ModalReview tripName={dataReview.tripName} review={review}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SearchDataReview
