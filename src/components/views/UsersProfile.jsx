import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UsersProfile() {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    const { userID } = useParams()


    function getUser(){
        fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .finally(() => {
            setLoading(false)
        })
        .then(response => response.json())
        .then(result => setUser(result))
    }

    useEffect(() => {
        getUser()
    }, [userID])

    return (
        <div>
            {
                loading 
                ? 
                    <div>Loading . . .</div>
                : 
                <div className="container">
                    <div className="card">
                        <div className="card-header">{user.name}</div>
                        <div className="card-body">
                            <div>{user.username}</div>
                            <div>{user.website}</div>
                            <div>{user.phone}</div>
                            <div>{user.email}</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
