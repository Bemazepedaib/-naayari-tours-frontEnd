import React, { useState } from 'react'
import Styles from '../../styles/elementStyles/FormTripDate.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router';

import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';

function FormTripDate({ dates, selectedTrip }) {

    const [selectedDate, setselectedDate] = useState(dates[0])
    const { loading: userLoading, error: userError, data: userData } = useQuery(ME);

    return (
        <div>
            <div>
                <div>
                    <label className={Styles.lbl}> Fechas del viaje  <i className={Styles.icons}><FontAwesomeIcon icon={faCalendarDays} /></i></label>
                    <div className={Styles.cont}>
                        <select
                            className={Styles.textInput}
                            value={selectedDate}
                            onChange={e => { setselectedDate(e.target.value) }}
                            onBlur={e => { setselectedDate(e.target.value) }}>
                            {dates.map(d => (
                                <option className={Styles.op} value={d} key={d}> {d} </option>
                            ))}
                        </select>
                        <button className={Styles.btn} type='submit' onClick={() => {
                            if (!userError){
                                Router.push({ pathname: '/sites/Reservations', query: { selectedDate, selectedTrip } }, '/sites/Reservations')
                            } else {
                                Router.push({ pathname: '/sites/Login', query: { place: "reservations", selectedDate, selectedTrip } }, '/sites/Login')
                            }
                        }}> Reservar lugares </button>
                    </div>
                    <button className={Styles.btnVIP} type='submit' onClick={() => { console.log('Es un vip') }}> ¡Crea tu grupo VIP! </button>
                </div>

            </div>

        </div>
    )
}

export default FormTripDate