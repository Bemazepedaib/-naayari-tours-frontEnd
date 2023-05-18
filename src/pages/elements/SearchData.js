import React, { useState } from 'react'
import { GET_PI_USERS } from '../querys/userQuerys';
import { useQuery } from '@apollo/client';
import SearchBar from './SearchBar';
import { useEffect } from 'react';

function SearchData({newU}) {


    const { loading,  error, data } = useQuery(GET_PI_USERS);
    const [users,setUsers]=useState();


    return (
        <div>
           
            {!loading && !error && (
                <SearchBar dat={data.users} newD={newU}></SearchBar>
        )}
        </div>
    )
}

export default SearchData
