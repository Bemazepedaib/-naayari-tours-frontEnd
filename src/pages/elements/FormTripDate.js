import React, { Component, useState } from 'react'
import Styles from '../../styles/elementStyles/FormTripDate.module.css';

function FormTripDate({ props }) {

    const [date, setDate] = useState(props[0])
    var day = props[0]

    return (
        <div>
            <div>
                <div>
                    <label className={Styles.lbl}> Fechas del viaje </label>
                    <div className={Styles.cont}>

                        <select
                            className={Styles.textInput}
                            value={date}
                            onChange={e => { setDate(e.target.value) }}
                            onBlur={e => { setDate(e.target.value) }}>
                            {props.map(d => (
                                <option className={Styles.op} value={d} key={d}> {d} </option>
                            ))}
                        </select>
                        <button className={Styles.btn} type='submit' onClick={() => { console.log(date) }}> Reservar lugares </button>
                    </div>
                        <button className={Styles.btnVIP} type='submit' onClick={() => { console.log('Es un vip') }}> ¡Crea tu grupo VIP! </button>
                </div>

            </div>

        </div>
    )
}







export default FormTripDate
