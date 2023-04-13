import React from 'react'
import { GET_USER } from '../querys/userQuerys';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import UpdateUser from '../sites/UpdateUser';

function User() {

    const router = useRouter()

    const { query:{email} } = router;
    

    console.log(email)

    const { loading, error, data } = useQuery(GET_USER,{variables: {email}});
    return (
        <div>
           
            {!loading && !error && (
                <UpdateUser user={data}></UpdateUser>
            )}
    </div>
  )
}

export default User
