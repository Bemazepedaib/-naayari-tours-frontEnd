import React, { use, useState } from 'react';
import Styles from '../../styles/elementStyles/Companion.module.css';

const CompanionComponent = ({ tipo, funcion }) => {

    const [name, setName] = useState("")
    const [cell, setCell] = useState("")

    const onChangeName = (e) => { setName(e.target.value); }
    const onChangeCell = (e) => { setCell(e.target.value); }
    const onBlur = (e) => { funcion(e.target.value); }

    return (
        <div>
            <div className={Styles.grupoCompanion}>
                <div>
                    NOMBRE COMPLETO
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Nombre completo'
                        onChange={onChangeName}
                        onBlur={onBlur}
                        value={name}
                    />
                </div>
            </div>
            {tipo === "adult" ? <div className={Styles.grupoCompanion}>
                <div>
                    NÚMERO DE CELULAR
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Número de celular'
                        onChange={onChangeCell}
                        onBlur={onBlur}
                        value={cell}
                    />
                </div>
            </div> : <div />}
        </div>
    )
}

export default CompanionComponent;