import React from 'react'
import { useQuery } from '@apollo/client';
import { GET_TRIP } from '../querys/tripQuerys';
import { useRouter } from 'next/router';
import CreateTripView from '../elements/CreateTripView';
import SidebarAdmin from '../elements/AdminDashboard/SidebarAdmin';
import Styles from '../../styles/elementStyles/UpdatingTrip.module.css'
const UpdatingTrip = () => {
    const router = useRouter()
    const { query: { tripNameData } } = router;
    const { loading, error, data } = useQuery(GET_TRIP, { variables: { tripName: tripNameData } });
    return (
        <div>
            {!loading && !error && (
                <div className={Styles.whatever}>
                    <SidebarAdmin />
                    <CreateTripView trip={data}></CreateTripView>
                </div>
            )}
        </div>
    )
}

export default UpdatingTrip
