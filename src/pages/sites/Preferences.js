import { GET_PREFERENCES } from '../querys/preferenceQuerys'
import { useQuery } from '@apollo/client'
import Styles from '../../styles/Preferences.module.css'
import PreferenceCard from '../elements/PreferenceCard'
import ModalWindow from '../elements/ModalWindow'

import { useMutation } from '@apollo/client';
import { UPDATE_USER_PREFERENCES } from '../mutations/userMutations';

function Preferences({ preferences }) {

    const { loading, error, data } = useQuery(GET_PREFERENCES)
    let id = 0
    let preferenceOK = []
    preferences?.map(index => {
        let object = { preferenceType: index }
        preferenceOK.push(object)
    })
    console.log(preferenceOK)

    const [updatePreferences] = useMutation(UPDATE_USER_PREFERENCES)

    function isOk(object) {
        preferenceOK.push(object)
    }
    function isNotOk(object) {
        let pos = preferenceOK.map(e => e.preferenceType).indexOf(object.preferenceType);
        preferenceOK.splice(pos, 1)
    }
    async function send() {
        if (preferenceOK.length === 0) {
            return false;
        } else {
            try {
                console.log(preferenceOK)
                await updatePreferences({ variables: { newPref: preferenceOK } })
                preferenceOK = []
                return true;
            } catch (error) {
                console.log(error.message)
            }
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
                        <PreferenceCard key={id++} cart={preference} isOk={isOk} isNotOk={isNotOk} selected={preferences} />
                    ))}
                </div>
                <div className={Styles.send}>
                    <ModalWindow titleText='Naayari Tours te dice...'
                        text='Da clic a una actividad que sea de tu agrado para poder continuar.' send={send}>
                    </ModalWindow>
                </div>
            </div>
        )}</>;
}


export default Preferences;