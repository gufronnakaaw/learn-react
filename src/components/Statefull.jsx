import React, { Component } from 'react'

export default class Statefull extends Component {
    constructor(){
        super()

        this.state = {
            firstname: '',
            lastname: '',
            name: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.setState({
            name: `${this.state.firstname} ${this.state.lastname}`,
            firstname: '',
            lastname: ''
        })
    }

    handleInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const { firstname, lastname, name } = this.state

        return (
            <div className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header">Learn React Class Component</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit} autoComplete="off">
                                        <div className="mb-5">
                                            <label htmlFor="firstname" className="form-label">Firstname</label>
                                            <input type="text" value={firstname} onInput={this.handleInput} name="firstname" className="form-control" />
                                        </div>
                                        <div className="mb-5">
                                            <label htmlFor="lastname" className="form-label">Lastname</label>
                                            <input type="text" value={lastname} onInput={this.handleInput} name="lastname" className="form-control" />
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
}