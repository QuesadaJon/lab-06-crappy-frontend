import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link
} from 'react-router-dom';
import './App.css'
import ListPage from './function-pages/ListPage.js';
import CreatePage from './function-pages/CreatePage.js';
import DetailsPage from './function-pages/DetailsPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <nav>
                        <ul className="nav-links">
                          <li>
                            <Link to="/">Classes</Link>
                          </li>
                          <li>
                            <Link to="/create">Make New Class</Link>
                          </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <ListPage {...routerProps} />} 
                        />
                        <Route 
                            path="/create" 
                            exact
                            render={(routerProps) => <CreatePage {...routerProps} />} 
                        />
                        <Route 
                            path="/details/:id" 
                            exact
                            render={(routerProps) => <DetailsPage {...routerProps} />} 
                        />
                        </Switch>
                </Router>
            </div>
        )
    }
}