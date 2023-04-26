import React from 'react'
import { ME } from '../querys/userQuerys';
import { useQuery } from '@apollo/client'
import Preferences from '../sites/Preferences';

const MePreferences = () => {
    const { loading, error, data } = useQuery(ME)

    let array = []
    data.me.preferences.map(preference => (
        array.push(preference.preferenceType)
    ))
    return (
        <>
            {!loading && !error && (
                <Preferences preferences={array}>
                    </Preferences>
            )}
        </>
    )
}

export default MePreferences