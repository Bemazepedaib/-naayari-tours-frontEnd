import React from 'react'
import { useQuery } from '@apollo/client';
import { ME } from '../querys/userQuerys';
import Navbar from './Navbar';
import Styles from '../../styles/Me.module.css'

function Me() {

    const { loading, error, data } = useQuery(ME);

    if (error) return (<div><Navbar/>{error.message}</div>)
    if (loading) return (<div><Navbar/>Loading...</div>)

    return <>{!loading && !error &&
        (
            <div>
                <Navbar></Navbar>
                <div>
                    {console.log(data)}
                </div>
            </div>
        )
    }</>;
}

export default Me