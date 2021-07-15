import React, { useState, useEffect } from 'react'

export default function ReactHook() {

    const [name, setName] = useState('wildan')
    const [img, setImg] = useState('https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop')

    useEffect(() => {

        document.title = "Profile " + name

    }, [name, img])

    function handleName(e) {
        setName(e.target.value)
    }

    function handleImg(e) {
        setImg(e.target.value)
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">React Hook Test</div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" value={name} name="name" className="form-control" onChange={handleName}/>
                            </div>
                            <div className="form-group">
                                <input type="text" value={img} name="img_url" className="form-control" onChange={handleImg}/>
                            </div>
                            <div className="form-group">
                                <h3>{name}</h3>
                            </div>
                            <div className="form-group">
                                <img src={img} className="w-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
