import React, {Component} from 'react'
import Heading from '../../components/Heading'
import SearchContainer from '../SearchContainer'
import Saved from '../Saved'
import Nav from '../../components/Nav'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class Main extends Component{

    render() {

        return (
            <Router>
            <div>
                <Nav />
                <div className="container">
                    <Heading />
                    <Route exact path='/' component={SearchContainer} />
                    <Route path='/saved' component={Saved} />
                </div>
            </div>
            </Router>
        )
    }

}
export default Main 