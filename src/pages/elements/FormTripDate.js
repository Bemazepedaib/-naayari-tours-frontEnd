import React, { useState } from 'react'
import Styles from '../../styles/elementStyles/FormTripDate.module.css';

import Router from 'next/router';

function FormTripDate({ dates, selectedTrip }) {

    const [selectedDate, setselectedDate] = useState(dates[0])

    return (
        <div>
            <div>
                <div>
                    <label className={Styles.lbl}> Fechas del viaje </label>
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
                            Router.push({ pathname: '/sites/Reservations', query: { selectedDate, selectedTrip } })
                        }}> Reservar lugares </button>
                    </div>
                    <button className={Styles.btnVIP} type='submit' onClick={() => { console.log('Es un vip') }}> ¡Crea tu grupo VIP! </button>
                </div>

            </div>

        </div>
    )
}

export default FormTripDate