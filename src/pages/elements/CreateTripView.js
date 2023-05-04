//IMPORTS
import { React, useState } from 'react'
import { useQuery } from '@apollo/client'

//COMPONENTS
import HeaderTittle from './HeaderTittle'

//GET PREFERENCES
import { GET_PREFERENCES } from '../querys/preferenceQuerys'

//CSS
import Styles from '../../styles/elementStyles/CreateTripView.module.css'

//COMPONENTS
import InputComponent from './Input'

const CreateTripView = () => {

    //HOOKS
    const [name, setName] = useState({ value: "", valid: true });
    const [photo, setPhoto] = useState({ value: "", valid: true });
    const [price, setPrice] = useState({ value: "", valid: true });
    const [duration, setDuration] = useState({ value: "", valid: true });
    const [place, setPlace] = useState({ value: "", valid: true });
    const [dateStart, setDateStart] = useState({ value: "", valid: true });
    const [dateEnd, setDateEnd] = useState({ value: "", valid: true });
    const [amount, setAmount] = useState({ value: "", valid: true });
    const [dateAdd, setDateAdd] = useState({ value: "", valid: true });
    const [discount, setDiscount] = useState(false);
    const [dates, setDates] = useState("");

    const expresiones = {
        link: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        number: /^[0-9]+$/,
        letters: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

    }

    //QUERY
    const { loading, error, data } = useQuery(GET_PREFERENCES)

    //FUNCTIONS
    const onChangeTerminos = (e) => {
        setTerminos(e.target.checked);
    }
    //ADD A DATE
    const addADate = (e) => {
        e.preventDefault();
        var separarCadena = dateAdd.value.split('-');
        setDates((dates + separarCadena[2] + '/' + separarCadena[1] + '/' + separarCadena[0] + "\n"));
    }
    //DELETE A DATE
    const deleteADate = (e) => {
        e.preventDefault();
        setDates("");
    }
    const handleOnChange = () => {
        setDiscount(!discount);
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>
    return <>
        {!loading && !error && (
            <div className={Styles.main}>
                <HeaderTittle tittle={"Crear nuevo viaje"}></HeaderTittle>
                <div className={Styles.infoContainer}>
                    {/*FORM*/}
                    <form action="" className={Styles.formulario} autoComplete="off" >
                        <div className={Styles.tp}>
                            {/*TRIP NAME*/}
                            <InputComponent
                                estado={name}
                                cambiarEstado={setName}
                                tipo="text"
                                label="Nombre del viaje"
                                placeholder="Ej. Real de acuitapilco"
                                name="nombre"
                                errorMsg="El nombre solo debe incluir letras"
                                regExp={expresiones.letters}
                            />
                            {/*PHOTO*/}
                            <InputComponent
                                estado={photo}
                                cambiarEstado={setPhoto}
                                tipo="text"
                                label="Dirección Url de foto"
                                placeholder="https://drive.google.com/file/d/14gE1m9trO_XCBbPC8jBy1vvQpVGnak3A/view?usp=share_link"
                                name="photo"
                                errorMsg="Incluya una dirección de url valida"
                                regExp={expresiones.link}
                            />
                        </div>
                        {/*ACTIVITIES*/}
                        <fieldset>
                            <legend className={Styles.activitiesTitle}>ACTIVIDADES</legend>
                            <div className={Styles.activities}>
                                {data.preferences.map(preference => (
                                    <div className={Styles.subActivities} key={preference.preferenceType}>
                                        <label htmlFor="otherPet">{preference.preferenceType}</label>
                                        <input type="checkbox" name={preference.preferenceType} id={preference.preferenceType}
                                            value={preference.preferenceType}></input>
                                    </div>
                                ))}
                            </div>
                        </fieldset>
                        <div className={Styles.pdp}>
                            {/*PRICE / DURATION / PLACE*/}
                            <InputComponent
                                estado={price}
                                cambiarEstado={setPrice}
                                tipo="text"
                                label="Precio"
                                placeholder="Ej. 650"
                                name="price"
                                errorMsg="Incluya un precio valido"
                                regExp={expresiones.number}
                            />
                            <InputComponent
                                estado={duration}
                                cambiarEstado={setDuration}
                                tipo="text"
                                label="Duración del viaje"
                                placeholder="23 Horas"
                                name="duration"
                                errorMsg=""
                                regExp={""}
                            />
                            <InputComponent
                                estado={place}
                                cambiarEstado={setPlace}
                                tipo="text"
                                label="Lugar de viaje"
                                placeholder="Santa María del oro"
                                name="place"
                                errorMsg="Introduce solo letras"
                                regExp={expresiones.letters}
                            />
                        </div>
                        {/*DISCOUNT*/}
                        <fieldset>
                            <div className={Styles.discountContainer}>
                                <label htmlFor="discount">¿Descuento?</label>
                                <input type="checkbox" name="discount"
                                    id="discount" value={"discount"}
                                    checked={discount} onChange={handleOnChange}></input>
                            </div>
                            {discount
                                ?
                                <div className={Styles.discountContainer}>
                                    <InputComponent
                                        estado={dateStart}
                                        cambiarEstado={setDateStart}
                                        tipo="date"
                                        label="Fecha de inicio"
                                        placeholder=""
                                        name="dateStart"
                                        errorMsg=""
                                        regExp={""}
                                    />
                                    <InputComponent
                                        estado={amount}
                                        cambiarEstado={setAmount}
                                        tipo="text"
                                        label="Monto de descuento"
                                        placeholder="Ej. 150"
                                        name="amount"
                                        errorMsg="Incluya un precio valido"
                                        regExp={expresiones.number}
                                    />
                                    <InputComponent
                                        estado={dateEnd}
                                        cambiarEstado={setDateEnd}
                                        tipo="date"
                                        label="Fecha de termino"
                                        placeholder=""
                                        name="dateEnd"
                                        errorMsg=""
                                        regExp={""}
                                    />
                                </div>
                                : ""}
                        </fieldset>
                        {/*DATES*/}
                        <div className={Styles.dateContainer}>
                            <div className={Styles.dateContainerL}>
                                <InputComponent
                                    estado={dateAdd}
                                    cambiarEstado={setDateAdd}
                                    tipo="date"
                                    label="Fecha de termino"
                                    placeholder=""
                                    name="dateEnd"
                                    errorMsg=""
                                    regExp={""}
                                />
                                <button className={Styles.btnDate} onClick={addADate}>Agregar Fecha</button>
                                <button className={Styles.btnDate} onClick={deleteADate}>Borrar Fechas</button>
                            </div>
                            <div className={Styles.dateContainerR}>
                                <label className={Styles.areaTitle} htmlFor="addDate">Fechas Agregadas</label>
                                <textarea className={Styles.areaDate} value={dates} name="addDate" id="addDate" cols="30" rows="10"
                                    placeholder={"22/22/2000"} readOnly>
                                </textarea>
                            </div>
                        </div>
                        {/*DESCRIPTION AND ITINERARY*/}
                        <fieldset>
                            <div className={Styles.areaContainer}>
                                <div className={Styles.areaSubContainer}>
                                    <label className={Styles.areaTitle} htmlFor="descripcion">Descripción</label>
                                    <textarea className={Styles.area} name="descripcion" id="descripcion" cols="30" rows="10"
                                        placeholder="Escribe la descripción del viaje"></textarea>
                                </div>
                                <div className={Styles.areaSubContainer}>
                                    <label className={Styles.areaTitle} htmlFor="descripcion">Itinerario</label>
                                    <textarea className={Styles.area} name="itinerary" id="itinerary" cols="30" rows="10"
                                        placeholder={" • Salida: 07:00 am de nuestra oficina \n" +
                                            "• 8:00 Llegada a Tequila \n" + "• Tiempo libre en pueblo Tequila."}>
                                    </textarea>
                                </div>
                            </div>
                            {/*RESTRICTIONS AND TRIP KIT*/}
                            <div className={Styles.areaContainer}>
                                <div className={Styles.areaSubContainer}>
                                    <label className={Styles.areaTitle} htmlFor="descripcion">Recomendaciones</label>
                                    <textarea className={Styles.area} name="descripcion" id="descripcion" cols="30" rows="10"
                                        placeholder={" • LLevar ropa comoda \n" +
                                            "• Abrigo para la noche \n" + "• Calzado comodo para caminar"}>
                                    </textarea>
                                </div>
                                <div className={Styles.areaSubContainer}>
                                    <label className={Styles.areaTitle} htmlFor="descripcion">Kit de viaje</label>
                                    <textarea className={Styles.area} name="descripcion" id="descripcion" cols="30" rows="10"
                                        placeholder={" •Llevar Agua \n" +
                                            "• Pisto bengala \n" + "• Casco protector"}>
                                    </textarea>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        )}</>;
}

export default CreateTripView
