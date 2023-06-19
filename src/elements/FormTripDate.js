import React, { useState } from 'react'
import Styles from '../styles/elementStyles/FormTripDate.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import ModalVIP from './ModalVIP';
import Router from 'next/router';
import InputComponent from './Input';

import { useQuery } from '@apollo/client';
import { ME } from '../backendOperations/querys/userQuerys';

function FormTripDate({ dates, selectedTrip }) {

    
    const [dateAdd, setDateAdd] = useState({ value: "", valid: true });
    const [selectedDate, setselectedDate] = useState(dates[0])
    const [selectedDateVIP, setselectedDateVIP] = useState(dates[0])
    const { loading: userLoading, error: userError, data: userData } = useQuery(ME);

    async function send() {
            return false;
    }

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
                                Router.push({ pathname: '/Reservations', query: { selectedDate, selectedTrip } })
                            } else {
                                Router.push({ pathname: '/Login', query: { place: "reservations", selectedDate, selectedTrip } })
                            }
                        }}> Reservar lugares
                         </button>
                    </div>
                    <div >
                        <div className={Styles.inputDate}>
                    <InputComponent
                                    estado={dateAdd}
                                    cambiarEstado={setDateAdd}
                                    tipo="date"
                                    label="Seleccionar fecha para grupo VIP"
                                    placeholder=""
                                    name="dateEnd"
                                    errorMsg=""
                                />
                                </div>
                        <ModalVIP 
                        titleText='Solicitud VIP '
                        text={ selectedTrip +" con fecha: "+ dateAdd.value}
                        send={ send }
                        date={ dateAdd.value }
                        trip={ selectedTrip }>
                        </ModalVIP>
            </div>
                </div>

            </div>

        </div>
    )
}

export default FormTripDate