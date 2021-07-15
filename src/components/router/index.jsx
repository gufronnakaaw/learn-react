import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from '../Navbar'
import About from '../views/About'
import Home from '../views/Home'
import NotFound from '../views/NotFound'
import Users from '../views/Users'
import UsersProfile from '../views/UsersProfile'

export default function Router() {
    return (
        <Switch>
            <Route exact path="/">
                <Navbar>
                    <Home />
                </Navbar>
            </Route>

            <Route path="/about">
                <Navbar>
                    <About />
                </Navbar>
            </Route>
            
            <Route exact path="/users">
                <Navbar>
                    <Users />
                </Navbar>
            </Route>
            
            <Route path="/users/:userID">
                <Navbar>
                    <UsersProfile />
                </Navbar>
            </Route>          

            <Route path="*" component={NotFound}/>
        </Switch>
    )
}
