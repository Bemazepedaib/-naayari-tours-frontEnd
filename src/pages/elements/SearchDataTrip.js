import { React, useState } from 'react'
import Router from 'next/router';
import Styles from '../../styles/elementStyles/SearchDataTrip.module.css'

import Table from 'react-bootstrap/Table';
import HeaderTittle from './HeaderTittle';


const SearchDataTrip = ({ data }) => {
    //HOOKS
    const [trips, setTrips] = useState(data);
    const [tripsTable, setTripsTable] = useState(data);
    const [search, setSearch] = useState("");

    //OnChange Method
    const handleChange = (e) => {
        setSearch(e.target.value);
        filter(e.target.value);
    }
    //TABLE FILTER
    const filter = (term) => {
        let searchResult = tripsTable.filter((element) => {
            if (element.name.toString().toLowerCase().includes(term.toLowerCase())
                || element.cellphone.toString().includes(term.toLowerCase())
                || element.email.toString().toLowerCase().includes(term.toLowerCase())) {
                return element;
            }
        })
        setTrips(searchResult);
    }
    //ONCLICK ROW FUNCTION
    const rowClicked = (email) => {

    }
    return (
        <div>
            <div className={Styles.mainContainer}>
                <div className={Styles.inputContainer}>
                    <HeaderTittle tittle={"Buscar Viaje"}></HeaderTittle>
                    <input className={Styles.inputText} onChange={handleChange} placeholder='Ingrese datos del usuario a buscar'></input>
                </div>
                <div className={Styles.tableContainer}>
                    <Table responsive size='sm' striped bordered hover className={Styles.table}>
                        <thead className={Styles.tHead}>
                            <tr>
                                <th>Nombre</th>
                                <th>Lugar</th>
                                <th>Precio Adulto</th>
                                <th>Descuento</th>
                                {console.log(trips[2])}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trips
                                    .map(trips => (

                                        <tr key={trips.tripName} onClick={() => rowClicked("caca")}>
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
