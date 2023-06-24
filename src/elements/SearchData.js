import { React } from 'react'
import { GET_PI_USERS } from '../backendOperations/querys/userQuerys';
import { useQuery } from '@apollo/client';
import SearchBar from './SearchBar';

function SearchData({ newU }) {

    const { loading, error, data } = useQuery(GET_PI_USERS);

    return (
        <div>
            {!loading && !error && (
                <SearchBar dat={data.users} newD={newU}></SearchBar>
            )}
        </div>
    )
}

export default SearchData
