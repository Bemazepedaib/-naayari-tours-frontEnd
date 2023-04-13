import React from 'react'
import { GET_USER } from '../querys/userQuerys';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

function User() {

    const router = useRouter()

    const { query:{email} } = router;
    

    console.log(email)

    const { loading, error, data } = useQuery(GET_USER,{variables: {email}});
    return (
        <div>
           
            {!loading && !error && (
                console.log(data)
            )}
    </div>
  )
}

export default User
