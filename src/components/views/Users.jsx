import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Users() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    function getUsers(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .finally(() => {
            setLoading(false)
        })
        .then(response => response.json())
        .then(result => setUsers(result))
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading 
                                ? 
                                    <tr>
                                        <td colSpan={7} className="text-center">Loading . . .</td>
                                    </tr>
                                : 
                                    users.map((user, index) => {
                                        return(
                                            <tr key={user.id}>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>
                                                    <a href={`http://${user.website}`} target="_blank">{user.website}</a>
                                                </td>
                                                <td>
                                                    <NavLink 
                                                    to={`/users/${user.id}`} 
                                                    className="btn btn-info">
                                                        Profile
                                                    </NavLink>
                                                </td>
                                            </tr> 
                                        )
                                    })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
