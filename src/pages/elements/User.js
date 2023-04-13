import React from 'react'
import { GET_USER } from '../querys/userQuerys';
import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

function User() {
    


    const router = useRouter()

    const { 
        query:{params}
    } = router;
    
    const props={
       params
    }
    const user=props.params
    console.log(user)
    const { loading, error, data } = useQuery(GET_USER,{variables:{user}});
    return (
        <div>
           
            {!loading && !error && (
                console.log(data)
            )}
    </div>
  )
}

export default User
