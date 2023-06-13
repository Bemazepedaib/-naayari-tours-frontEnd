//IMPORTS
import { React, useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import SearchTripView from "../elements/SearchTripView"
import ReactDatePicker from 'react-datepicker'
//APOLLO REQUEST
import { ADD_TRIP, UPDATE_TRIP } from '../../backendOperations/mutations/tripMutations';
import { ADD_EVENT } from '../../backendOperations/mutations/eventMutations';

//COMPONENTS
import HeaderTittle from './HeaderTittle'

//GET PREFERENCES
import { GET_PREFERENCES } from '../../backendOperations/querys/preferenceQuerys'

//CSS
import Styles from '../../styles/elementStyles/CreateTripView.module.css'

//COMPONENTS
import InputComponent from './Input'

const CreateTripView = ({ trip }) => {
    //MUTATION
    const miniFunction = (date) => {
        const [dia, mes, anio] = date.split("/");
        return new Date(anio, mes - 1, dia);
    }

    const [addEvent] = useMutation(ADD_EVENT);
    const [addTrip] = useMutation(ADD_TRIP);
    const [updateTrip] = useMutation(UPDATE_TRIP);
    //HOOKS
    const [name, setName] = useState(trip ? { value: trip.trip.tripName + '', valid: true } : { value: "", valid: true });
    const [photo, setPhoto] = useState(trip ? { value: 'https://drive.google.com/file/d/' + trip.trip.tripInformation.photo + '/view?usp=share_link', valid: true } : { value: "", valid: true });
    const [price, setPrice] = useState(trip ? { value: trip.trip.tripInformation.price[0].priceAmount + '', valid: true } : { value: "", valid: true });
    const [duration, setDuration] = useState(trip ? { value: trip.trip.tripInformation.duration + '', valid: true } : { value: "", valid: true });
    const [place, setPlace] = useState(trip ? { value: trip.trip.tripInformation.place + '', valid: true } : { value: "", valid: true });
    const [amount, setAmount] = useState(trip ? { value: trip.trip.tripInformation.discount.amount, valid: true } : { value: "", valid: true });
    const [dateAdd, setDateAdd] = useState({ value: "", valid: true });
    const [action, setAction] = useState(trip ? true : false);
    const [newTrip, setNewTrip] = useState();
    const [successful, setSuccessful] = useState("")
    const [dateStart, setDateStart] = useState(trip ? (trip.trip.tripInformation.discount
        ? (trip.trip.tripInformation.discount.available == true ? {
            value: miniFunction(trip.trip.tripInformation.discount.dateStart)
            , valid: true
        } :
            { value: "", valid: true }) : { value: "", valid: true }) : { value: "", valid: true });
    const [dateEnd, setDateEnd] = useState(trip ? (trip.trip.tripInformation.discount
        ? (trip.trip.tripInformation.discount.available == true ? {
            value: miniFunction(trip.trip.tripInformation.discount.dateEnd), valid: true
        } :
            { value: "", valid: true }) : { value: "", valid: true }) : { value: "", valid: true });
    const [discount, setDiscount] = useState(trip ? (trip.trip.tripInformation.discount
        ? (trip.trip.tripInformation.discount.available === true ? true : false)
        : false) : false)

    const [dates, setDates] = useState(trip ? trip.trip.tripInformation.date : []);
    const [auxDates, setAuxDates] = useState((trip ? trip.trip.tripInformation.date.join('\n') : ""));
    const [description, setDescription] = useState(trip ? trip.trip.tripInformation.description : "");
    const [itinerary, setItinerary] = useState(trip ? trip.trip.tripInformation.itinerary : "");
    const [recomendations, setRecomendations] = useState(trip ? trip.trip.tripInformation.recomendations : "");
    const [kit, setKit] = useState(trip ? trip.trip.tripKit : "");
    const [activities, setActivities] = useState(trip ? trip.trip.tripInformation.activities : []);

    const expresiones = {
        link: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        number: /^[0-9]+$/,
        letters: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    }

    //QUERY
    const { loading, error, data } = useQuery(GET_PREFERENCES)

    //FUNCTIONS

    const getFecha = (fecha) => {
        if (fecha) {
            return new Date(fecha).toISOString().split("T")[0].split("-").reverse().join("/")
        }
    }
    //ON SUBMIT
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(dateStart.value)
        if (!action === true && (name.value !== "" && photo.value !== "" && price.value !== ""
            && duration.value !== "" && place.value !== "" && dates.length > 0 &&
            description !== "" && itinerary !== "" && recomendations !== "" && kit !== ""
            && activities.length > 0) && (discount ? dateStart.value !== "" : dateStart.value === "")
            && (discount ? dateEnd.value !== "" : dateEnd.value === "") && (discount ? amount.value !== "" : amount.value === "")) {
            try {
                await addTrip({
                    variables: {
                        tripName: name.value,
                        tripInformation: {
                            description: description,
                            date: dates,
                            place: place.value,
                            price: [{
                                priceType: "Adulto",
                                priceAmount: parseInt(price.value, 10)
                            }, {
                                priceType: "Bebé",
                                priceAmount: 100
                            }],
                            duration: duration.value,
                            activities: activities,
                            discount: discount ? {
                                dateStart: getFecha(dateStart.value),
                                dateEnd: getFecha(dateEnd.value),
                                amount: parseInt(amount.value, 10),
                                available: true
                            } : {},
                            itinerary: itinerary,
                            recomendations: recomendations,
                            photo: photo.value.split("/")[5]
                        },
                        tripKit: kit,
                        tripRating: 0,
                        tripStatus: false,
                        tripReview: []
                    }
                }
                )
                dates.map(async date => (await addEvent({
                    variables:
                    {
                        eventDate: date, eventTrip: name.value, eventType: "Public", eventStatus: "active",
                        eventGuide: "Guia", users: []
                    }
                })
                ))
                setNewTrip({
                    tripName: name.value,
                    tripInformation: {
                        place: place.value,
                        price: [{
                            priceType: "Adulto",
                            priceAmount: parseInt(price.value, 10)
                        }],
                        discount: discount ? {
                            dateStart: getFecha(dateStart.value),
                            dateEnd: getFecha(dateEnd.value),
                            amount: parseInt(amount.value, 10),
                            available: true
                        } : {}
                    }, tripStatus: false
                })
                setSuccessful("Viaje Creado Exitosamente")
            } catch (err) {
            }
        } else if (!action === false && (name.value !== "" && photo.value !== "" && price.value !== ""
            && duration.value !== "" && place.value !== "" && dates.length > 0 &&
            description !== "" && itinerary !== "" && recomendations !== "" && kit !== ""
            && activities.length > 0)
            && (discount ? dateStart.value !== "" : dateStart.value === "")
            && (discount ? dateEnd.value !== "" : dateEnd.value === "")
            && (discount ? amount.value !== "" : amount.value === "")) {
            try {
                await updateTrip({
                    variables: {
                        tripName: name.value,
                        tripInformation: {
                            description: description,
                            date: dates,
                            place: place.value,
                            price: [{
                                priceType: "Adulto",
                                priceAmount: parseInt(price.value, 10)
                            }, {
                                priceType: "Bebé",
                                priceAmount: 100
                            }],
                            duration: duration.value,
                            activities: activities.map(({ __typename, ...rest }) => { return rest }),
                            discount: discount ? {
                                dateStart: getFecha(dateStart.value),
                                dateEnd: getFecha(dateEnd.value),
                                amount: parseInt(amount.value, 10),
                                available: true
                            } : {},
                            itinerary: itinerary,
                            recomendations: recomendations,
                            photo: photo.value.split("/")[5]
                        },
                        tripKit: kit,
                        tripRating: parseInt(trip.trip.tripRating),
                        tripStatus: false,
                        tripReview: trip.trip.tripReview.map(({ __typename, ...rest }) => { return rest })
                    }
                }
                )
                dates.map(async date => {
                    try {
                        (await addEvent({
                            variables:
                            {
                                eventDate: date, eventTrip: name.value, eventType: "Public", eventStatus: "active",
                                eventGuide: "Guia", users: []
                            }
                        })
                        )
                    } catch (err) {
                        console.log("Ocurrio Una duplicación")
                    }
                })
            } catch (err) {
            }
            window.location.href = "/sites/TripView";
        } else {
            setSuccessful("Porfavor Completa Todos los campos")
        }

    }
    //CHANGE INPUT VALUES
    const onChange = (e) => {
        switch (e.target.name) {
            case "description": setDescription(e.target.value)
                break;
            case "itinerary": setItinerary(e.target.value)
                break;
            case "recomend": setRecomendations(e.target.value)
                break;
            case "kit": setKit(e.target.value)
                break;
        }

    }
    const onChangeCheckbox = (e) => {
        if (e.target.checked) {
            setActivities(activities.concat({ activityName: e.target.name + "", activityPhoto: e.target.id + "" }))
        } else if (!e.target.checked) {
            const newActivities = activities.filter((activity) => activity.activityName !== e.target.name)
            setActivities(newActivities)
        }
    }
    //ADD A DATE
    const addADate = (e) => {
        e.preventDefault();
        let splitChain = getFecha(dateAdd.value)
        setDates(dates.concat(splitChain));
        if (!trip) {
            setAuxDates(auxDates + splitChain + '\n')
        }
        else if (trip && dates.length === 0) {
            setAuxDates(auxDates + splitChain)
        } else {
            setAuxDates(auxDates + '\n' + splitChain)
        }
    }

    //DELETE A DATE
    const deleteADate = (e) => {
        e.preventDefault();
        setAuxDates("");
        setDates([])
    }
    const handleOnChange = () => {
        setDiscount(!discount);
        setDateStart({ value: "", valid: true });
        setDateEnd({ value: "", valid: true });
        setAmount({ value: "", valid: true });

    }
    const checkPreferences = (name) => {
        let variable = false
        activities.map(activity => { if (activity.activityName === name) { variable = true; } })
        return variable
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>
    return <>
        {!loading && !error && (
            <div className={Styles.main}>
                <HeaderTittle tittle={action ? "Actualizar Viaje" : "Crear Viaje"}></HeaderTittle>
                <div className={Styles.infoContainer}>
                    {/*FORM*/}
                    <form onSubmit={onSubmit} className={Styles.formulario} autoComplete="off" >
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
                                noEditable={action}
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
                                        {!trip
                                            ?
                                            <>
                                                <label htmlFor={preference.preferenceType}>{preference.preferenceType}</label>
                                                <input type="checkbox" name={preference.preferenceType}
                                                    id={preference.preferenceIcon} onChange={onChangeCheckbox}></input>
                                            </>
                                            :
                                            <>
                                                <label htmlFor={preference.preferenceType}>{preference.preferenceType}</label>
                                                <input type="checkbox" name={preference.preferenceType}
                                                    id={preference.preferenceIcon} onChange={onChangeCheckbox}
                                                    defaultChecked={checkPreferences(preference.preferenceType)}></input>
                                            </>
                                        }
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
                                        placeholder="Fecha de inicio"
                                        name="dateStart"
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
                                        placeholder="Fecha de termino"
                                        name="dateEnd"
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
                                    label="Fechas"
                                    placeholder="Agregar Fecha"
                                    name="dateEnd"
                                    errorMsg=""
                                    regExp={""}
                                />
                                <button className={Styles.btnDate} onClick={addADate}>Agregar Fecha</button>
                                <button className={Styles.btnDate} onClick={deleteADate}>Borrar Fechas</button>
                            </div>
                            <div className={Styles.dateContainerR}>
                                <label className={Styles.areaTitle} htmlFor="addDate">Fechas Agregadas</label>
                                <textarea className={Styles.areaDate} value={auxDates} name="addDate" id="addDate" cols="1" rows="1"
                                    placeholder={"22/22/2000"} readOnly>
                                </textarea>
                            </div>
                        </div>
                        {/*DESCRIPTION AND ITINERARY*/}
                        <fieldset>
                            <div className={Styles.areaContainer}>
                                <div className={Styles.areaSubContainer}>
                                    <label className={Styles.areaTitle} htmlFor="description">Descripción</label>
                                    <textarea className={Styles.area} name="description" id="description" cols="30" rows="10"
                                        placeholder="Escribe la descripción del viaje" value={description} onChange={onChange}></textarea>
                                </div>
                                <div className={Styles.areaSubContainer}>
                                    <label className={Styles.areaTitle} htmlFor="itinerary">Itinerario</label>
                                    <textarea className={Styles.area} name="itinerary" id="itinerary" cols="30" rows="10"
                                        placeholder={" • Salida: 07:00 am de nuestra oficina \n" +
                                            "• 8:00 Llegada a Tequila \n" + "• Tiempo libre en pueblo Tequila."}
                                        value={itinerary} onChange={onChange}>
                                    </textarea>
                                </div>
                            </div>
                            {/*RESTRICTIONS AND TRIP KIT*/}
                            <div className={Styles.areaContainer}>
                                <div className={Styles.areaSubContainer}>
                                    <label className={Styles.areaTitle} htmlFor="recomend">Recomendaciones</label>
                                    <textarea className={Styles.area} name="recomend" id="recomend" cols="30" rows="10"
                                        placeholder={" • LLevar ropa comoda \n" +
                                            "• Abrigo para la noche \n" + "• Calzado comodo para caminar"}
                                        value={recomendations} onChange={onChange}>
                                    </textarea>
                                </div>
                                <div className={Styles.areaSubContainer}>
                                    <label className={Styles.areaTitle} htmlFor="kit">Kit de viaje</label>
                                    <textarea className={Styles.area} name="kit" id="kit" cols="30" rows="10"
                                        placeholder={" •Llevar Agua \n" +
                                            "• Pisto bengala \n" + "• Casco protector"}
                                        value={kit} onChange={onChange}>
                                    </textarea>
                                </div>
                            </div>
                        </fieldset>
                        {/*SEND INFORMATION*/}
                        <div className={Styles.btnSendContainer}>
                            <button type="submit"
                                className={Styles.btnSend}>{action ? "Actualizar Viaje" : "Crear Viaje"}</button>
                        </div>
                        <div className={Styles.sucessfullMessage}>{successful}</div>
                    </form>
                </div>
                <div className={!action ? "" : Styles.noUpdateWindow}>
                    <SearchTripView newTrip={newTrip} />
                </div>
            </div>
        )}</>;
}

export default CreateTripView
