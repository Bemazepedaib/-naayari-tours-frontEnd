import {React,useEffect} from 'react'
import { GET_USER } from '../backendOperations/querys/userQuerys';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import UpdateUser from '../pages/sites/UpdateUser';
import SidebarAdmin from './AdminDashboard/SidebarAdmin';
import Styles from "../styles/elementStyles/UpdateUser.module.css" 

function User() {

    const router = useRouter()

    const { query:{email} } = router;

    const { loading, error, data } = useQuery(GET_USER,{variables: {email}});


    return (
        <div>
            {!loading && !error && (
                <div className={Styles.updUser}>
                <SidebarAdmin/>
                <UpdateUser user={data}></UpdateUser>
                </div>
            )}
    </div>
  )
}

export default User
