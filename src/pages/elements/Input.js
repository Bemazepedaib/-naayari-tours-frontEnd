import React from 'react'
import styles from '../../styles/elementStyles/Input.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const InputComponent = ({ estado, cambiarEstado, tipo, label, placeholder, name, errorMsg, regExp, funcion, auto }) => {

    const onChange = (e) => { cambiarEstado({ ...estado, value: e.target.value })}

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
        <div className={styles.grupoInput}>
            <label htmlFor={name} className={estado.valid ? styles.text : styles.textError}>{label}</label>
            <div className={styles.inputIcono}>
                <input
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.value}
                    onChange={onChange}
                    onKeyUp={validacion}
                    onBlur={validacion}
                    className={estado.valid ? styles.textInput : styles.textInputError}
                    autoComplete={auto}
                />
                <FontAwesomeIcon
                    icon={estado.valid ? faCheckCircle : faTimesCircle}
                    className={estado.valid ? styles.icono : styles.iconoError}>
                </FontAwesomeIcon>
            </div>
            <Fade top oposite when={!estado.valid}>
                <div className={estado.valid ? styles.error : styles.errorActivo}>{errorMsg}</div>
            </Fade>
        </div>
    );
}

export default InputComponent