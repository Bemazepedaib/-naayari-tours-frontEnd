import React from 'react'
import { ME } from '../querys/userQuerys';
import { useQuery } from '@apollo/client'
import Preferences from '../sites/Preferences';

const MePreferences = () => {
    const { loading, error, data } = useQuery(ME)
    return (
        <>
            {!loading && !error && (
                <Preferences preferences={(data.me.preferences.map(preference => preference.preferenceType))}>
                </Preferences>
            )}
        </>
    )
}

export default MePreferences