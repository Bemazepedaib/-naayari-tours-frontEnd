import { React,  useState,useEffect } from 'react'
import { GET_PI_USERS } from '../querys/userQuerys';
import { useQuery } from '@apollo/client';
import SearchBar from './SearchBar';

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
