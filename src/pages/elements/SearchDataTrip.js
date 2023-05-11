import { React, useState } from 'react'
import Router from 'next/router';
import Styles from '../../styles/elementStyles/SearchDataTrip.module.css'

import Table from 'react-bootstrap/Table';
import HeaderTittle from './HeaderTittle';
import ModalTrips from './ModalTrips';

const SearchDataTrip = ({ data }) => {
    //HOOKS
    const [trips, setTrips] = useState(data);
    const [tripsTable, setTripsTable] = useState(data);

    //Delete Trip
    const deletrip = (trip) => {
        setTrips(trips.filter(item => item.tripName !== trip));
    }

    //OnChange Method
    const handleChange = (e) => {
        setSearch(e.target.value);
        filter(e.target.value);
    }
    //TABLE FILTER
    const filter = (term) => {
        let searchResult = tripsTable.filter((element) => {
            if (element.tripName.toString().toLowerCase().includes(term.toLowerCase())
                || element.tripInformation.place.toString().toLowerCase().includes(term.toLowerCase())
                || element.tripInformation.price[0].priceAmount.toString().toLowerCase().includes(term.toLowerCase())
                || element.tripInformation.discount.available ? "con descuento".toLowerCase().includes(term.toLowerCase()) :
                "sin descuento".toLowerCase().includes(term.toLowerCase())) {
                return element;
            }
        })
        setTrips(searchResult);
    }
    return (
        <div>
            <div className={Styles.mainContainer}>
                <div className={Styles.inputContainer}>
                    <HeaderTittle tittle={"Buscar Viaje"}></HeaderTittle>
                    <input className={Styles.inputText} onChange={handleChange} placeholder='Ingrese datos del viaje a buscar'></input>
                </div>
                <div className={Styles.tableContainer}>
                    <Table responsive size='sm' striped bordered hover className={Styles.table}>
                        <thead className={Styles.tHead}>
                            <tr>
                                <th>Nombre</th>
                                <th>Lugar</th>
                                <th>Precio Adulto</th>
                                <th>Descuento</th>
                                <th>Modificaciones</th>
                                {console.log(trips[2])}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trips
                                    .map(trips => (

                                        <tr key={trips.tripName}>
                                            <td>
                                                {trips.tripName}
                                            </td>
                                            <td>
                                                {trips.tripInformation.place}
                                            </td>
                                            <td>
                                                ${trips.tripInformation.price[0].priceAmount}
                                            </td>
                                            {trips.tripInformation.discount.available ? <td>Si</td> : <td>No</td>}
                                            <td>
                                                <ModalTrips tripInfo={trips} deletrip = {deletrip}/>
                                            </td>
                                        </tr>
                                    ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default SearchDataTrip
