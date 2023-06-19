import React from 'react'
import Styles from '../styles/elementStyles/Input.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const InputComponent = ({ estado, cambiarEstado, tipo, label, placeholder, name, errorMsg, regExp, funcion, auto, noEditable }) => {

    const onChange = (e) => { cambiarEstado({ ...estado, value: e.target.value }) }
    const onChangeDate = (e) => { cambiarEstado({ ...estado, value: e }); }

    const validacion = () => {
        if (funcion) {
            funcion();
        }
        if (regExp) {
            if (regExp.test(estado.value)) {
                cambiarEstado({ ...estado, valid: true })
            } else {
                cambiarEstado({ ...estado, valid: false })
            }
        }
    }

    return (
        <div className={Styles.grupoInput}>
            <label htmlFor={name} className={estado.valid ? Styles.text : Styles.textError}>{label}</label>
            <div className={Styles.inputIcono}>
                {tipo !== 'date' ?
                    <input
                        type={tipo}
                        placeholder={placeholder}
                        id={name}
                        value={estado.value}
                        onChange={onChange}
                        onKeyUp={validacion}
                        onBlur={validacion}
                        className={estado.valid ? Styles.textInput : Styles.textInputError}
                        autoComplete={auto}
                        readOnly={noEditable}
                    /> :
                    <ReactDatePicker
                        className={estado.valid ? Styles.textInput : Styles.textInputError}
                        placeholderText={placeholder}
                        onChange={onChangeDate}
                        onKeyUp={validacion}
                        onBlur={validacion}
                        dateFormat="dd/MM/yyyy"
                        selected={estado.value}
                    />
                }
                <FontAwesomeIcon
                    icon={estado.valid ? faCheckCircle : faTimesCircle}
                    className={estado.valid ? Styles.icono : Styles.iconoError}>
                </FontAwesomeIcon>
            </div>
            <div className={estado.valid ? Styles.error : Styles.errorActivo}>{errorMsg}</div>
        </div>
    );
}

export default InputComponent