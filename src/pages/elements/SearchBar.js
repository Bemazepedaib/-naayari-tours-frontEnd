import { React, useEffect, useState } from 'react'
import Styles from '../../styles/elementStyles/SearchBar.module.css'

import Table from 'react-bootstrap/Table';


function SearchBar({dat}) {


   
    const [users, setUsers] = useState(dat);
    const [usersTable, setUsersTable] = useState(dat);
    const [search, setSearch] = useState("");
console.log("Eri gey ")
    console.log(users)

    const handleChange=e=>{
        setSearch(e.target.value);
        filter(e.target.value);
    }

    const filter=(term)=>{
        var searchResult=usersTable.filter((element)=>{
            if(element.name.toString().toLowerCase().includes(term.toLowerCase())
            || element.cellphone.toString().includes(term.toLowerCase())
            || element.email.toString().toLowerCase().includes(term.toLowerCase())){
                return element;
            }
        })
        setUsers(searchResult);
    }

    return (
        <div>
                <div>
                    <div>
                        <input onChange={handleChange}></input>
                    </div>
                    <div className={Styles.tableContainer}>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Telefono</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    users.map(user => (

                                        <tr key={user.email}>
                                            <td>
                                                {user.name}
                                            </td>
                                            <td>
                                                {user.cellphone}
                                            </td>
                                            <td>
                                                {user.email}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>

                        </Table>
                    </div>
                </div>
        </div>
    )
}

export default SearchBar
