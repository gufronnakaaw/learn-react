import React from 'react'

export default class LifeCycle extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: 'wildan',
            img: 'https://images.theconversation.com/files/350865/original/file-20200803-24-50u91u.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
        }

        this.handleImg = this.handleImg.bind(this)
        this.handleName = this.handleName.bind(this)
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleImg(e) {
        this.setState({
            img: e.target.value
        })
    }
    
    componentDidMount(){
        document.title = "Profile " + this.state.name
    }
    
    componentDidUpdate(){
        document.title = "Profile " + this.state.name
    }

    render(){
        const { name, img } = this.state

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header">React Hook Test</div>
                            <div className="card-body">
                                <div className="form-group">
                                    <input type="text" value={name} name="name" className="form-control" onChange={this.handleName}/>
                                </div>
                                <div className="form-group">
                                    <input type="text" value={img} name="img_url" className="form-control" onChange={this.handleImg}/>
                                </div>
                                <div className="form-group">
                                    <h3>{name}</h3>
                                </div>
                                <div className="form-group">
                                    <img src={img} width="308" height="308"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}