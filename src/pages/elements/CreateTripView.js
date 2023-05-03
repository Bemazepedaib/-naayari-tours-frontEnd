//IMPORTS
import { React, useState } from 'react'
import HeaderTittle from './HeaderTittle'

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

    const expresiones = {
        link: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        number: /^[0-9]+$/,
        letters: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

    }
    const onChangeTerminos = (e) => {
        setTerminos(e.target.checked);
    }

    return (
        <div className={Styles.main}>
            <HeaderTittle tittle={"Crear nuevo viaje"}></HeaderTittle>
            <div className={Styles.infoContainer}>
                {/*FORM*/}
                <form action="" className={Styles.formulario} autoComplete="off" >
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
                    {/*ACTIVITIES*/}
                    <h2 className={Styles.activitiesTitle}>ACTIVIDADES</h2>
                    <div className={Styles.activities}>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                        <div className={Styles.subActivities}>
                            <label htmlFor="otherPet">Cañones</label>
                            <input type="checkbox" name="pets" id="otherPet" value="otherPet"></input>
                        </div>
                    </div>
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
                    {/*DESCRIPTION AREA*/}
                    <div className={Styles.descContainer}>
                        <label className={Styles.descTitle} htmlFor="descripcion">Descripción</label>
                        <textarea className={Styles.desc} name="descripcion" id="descripcion" cols="30" rows="10"
                            placeholder="Escribe la descripción del viaje"></textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTripView
