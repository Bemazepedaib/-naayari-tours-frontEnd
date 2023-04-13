import React from 'react';
import Styles from '../../styles/elementStyles/Companion.module.css';

const CompanionComponent = ({ dato, cambiarDato, tipo }) => {

    const onChangeName = (e) => { cambiarDato(e.target.value); console.log(dato) }
    //const onChangeCell = (e) => { cambiarDato }

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
                        value={dato}
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
                        onChange={onChangeName}
                        value={dato}
                    />
                </div>
            </div> : <div />
            }
        </div>
    )
}

export default CompanionComponent;