import React, { useState } from 'react';
import Styles from '../styles/elementStyles/Companion.module.css';

import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const CompanionComponent = ({ tipo, funcion }) => {

    const [name, setName] = useState("")
    const [cell, setCell] = useState("")
    const [date, setDate] = useState("")

    const onChangeName = (e) => { setName(e.target.value); }
    const onChangeCell = (e) => { setCell(e.target.value); }
    const onChangeDate = (e) => { setDate(e) }    
    const onBlur = (e) => { funcion(name, cell, date, tipo); }

    return (
        <div className={Styles.companion}>
            <div className={Styles.grupoCompanion}>
                <div className={Styles.label}>Nombre completo</div>
                <input
                    className={Styles.input}
                    type='text'
                    placeholder='Nombre completo'
                    onChange={onChangeName}
                    onBlur={onBlur}
                    value={name}
                />
            </div>
            {tipo === "adult" ? <div className={Styles.grupoCompanion}>
                <div className={Styles.label}>Número de celular</div>
                <input
                    className={Styles.input}
                    type='text'
                    placeholder='Número de celular'
                    onChange={onChangeCell}
                    onBlur={onBlur}
                    value={cell}
                />
            </div> : <div />}
            <div className={Styles.grupoCompanion}>
                <div className={Styles.label}>Fecha de nacimiento</div>
                <ReactDatePicker
                    className={Styles.input}
                    placeholderText='Fecha de nacimiento'
                    onChange={onChangeDate}
                    onBlur={onBlur}
                    dateFormat="dd/MM/yyyy"
                    selected={date}
                />
            </div>
        </div>
    )
}

export default CompanionComponent;