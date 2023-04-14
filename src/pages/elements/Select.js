import React from 'react'
import Styles from '../../styles/elementStyles/Select.module.css'

const SelectComponent = ({ textoLabel, dato, cambiarDato, opciones }) => {

    return (
        <div className={Styles.grupoSelect}>
            <label className={Styles.lbl}> {textoLabel} </label>
            <select
                className={Styles.select}
                value={dato}
                onChange={e => { cambiarDato(e.target.value) }}
                onBlur={e => { cambiarDato(e.target.value) }}>
                {opciones.map(d => (
                    <option className={Styles.op} value={d} key={d}> {d} </option>
                ))}
            </select>
        </div>
    )

}

export default SelectComponent;