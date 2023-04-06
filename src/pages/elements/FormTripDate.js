import React, { Component, useState } from 'react'
import Styles from '../../styles/elementStyles/FormTripDate.module.css';

function FormTripDate({ props }) {

    const [date, setDate] = useState(props[0])
    var day = props[0]

    return (
        <div>
            <div>
                <div>
                    <label> Fechas del viaje </label>
                    <select
                        className={Styles.textInput}
                        value={date}
                        onChange={e => { setDate(e.target.value) }}
                        onBlur={e => { setDate(e.target.value) }}>
                        {props.map(d => (
                            <option className={Styles.op} value={d} key={d}> {d} </option>
                        ))}
                    </select>
                </div>
                <div>
                    <button className={Styles.btn} type='submit' onClick={() => { console.log(date) }}> Reservar lugares </button>
                </div>
            </div>

        </div>
    )
}







export default FormTripDate
