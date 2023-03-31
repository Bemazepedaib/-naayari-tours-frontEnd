import { GET_PREFERENCES } from '../querys/preferenceQuerys'
import { useQuery } from '@apollo/client'
import Styles from '../../styles/Preferences.module.css'
import PreferenceCard from '../elements/PreferenceCard'
import ModalWindow from '../elements/ModalWindow'

function Preferences() {

    const { loading, error, data } = useQuery(GET_PREFERENCES)
    let id = 0
    let preferenceOK = []

    function isOk(name) {
        preferenceOK.push(name)
    }
    function isNotOk(name) {
        let pos = preferenceOK.indexOf(name)
        preferenceOK.splice(pos, 1)
    }
    function send() {
        if (preferenceOK.length === 0) {
            return false;
        } else {
            preferenceOK = []
            return true;
        }
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Something Went Wrong</p>
    return <>
        {!loading && !error && (
            <div className={Styles.PreferenceContainer}>
                <div className={Styles.tittleContainer}>
                    <h1 className={Styles.tittle}>
                        ¿QUE ES LO QUE BUSCAS?
                        <hr />
                        ELIGE DE ACUERDO A TUS GUSTOS
                    </h1>
                </div>
                <div className={Styles.imgCards}>
                    {data.preferences.map(preference => (
                        <PreferenceCard key={id++} cart={preference} isOk={isOk} isNotOk={isNotOk} />
                    ))}
                </div>
                <div>
                    <ModalWindow titleText='Naayari Tours te dice...'
                        text='Da clic a una actividad que sea de tu agrado para poder continuar.' send={send}></ModalWindow>
                </div>
            </div>
        )}</>;
}


export default Preferences;