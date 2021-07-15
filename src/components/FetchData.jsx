import React, { useEffect, useState } from 'react'

export default function FetchData() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    function getuser(){
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
        .finally(() => {
            setLoading(false)
        })
        .then(response => response.json())
        .then(result => setUser(result))
    }

    useEffect(() => {
        getuser()
    }, [])
    
    return (
        <div className="py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Website</th>
                                    <th>Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading 
                                    ? 
                                        <tr>
                                            <td colSpan={5} className="text-center">Loading . . .</td>
                                        </tr>
                                    : 
                                        <tr>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>{user.phone}</td>
                                        </tr> 
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
