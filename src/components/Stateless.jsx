import React, { useState } from 'react'

export default function Stateless(){
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [name, setName] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        setName(`${firstname} ${lastname}`)
        setFirstname('')
        setLastname('')
    }

    return (
        <div className="p-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">Learn React Function Component</div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} autoComplete="off">
                                    <div className="mb-5">
                                        <label htmlFor="firstname" className="form-label">Firstname</label>
                                        <input type="text" value={firstname} onInput={(e) => setFirstname(e.target.value)} name="firstname" className="form-control" />
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="lastname" className="form-label">Lastname</label>
                                        <input type="text" value={lastname} onInput={(e) => setLastname(e.target.value)} name="lastname" className="form-control" />
                                    </div>
                                    <button type="submit" className="btn btn-block btn-info">Show</button>
                                </form>
                            </div>
                            <div className="card-footer">My name is { name ? name : '. . .'}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}