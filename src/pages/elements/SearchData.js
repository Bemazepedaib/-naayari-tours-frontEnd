import React, { useState } from 'react'
import { GET_PI_USERS } from '../querys/userQuerys';
import { useQuery } from '@apollo/client';
import SearchBar from './SearchBar';

function SearchData() {

    const { loading, error, data } = useQuery(GET_PI_USERS);
    return (
        <div>
           
            {!loading && !error && (
                <SearchBar dat={data.users }></SearchBar>
        )}
        </div>
    )
}

export default SearchData
