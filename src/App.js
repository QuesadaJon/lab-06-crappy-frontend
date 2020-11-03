import React, { Component } from 'react'
import request from 'superagent'
import './App.css';

export default class App extends Component {
  state = {
    classes: []
  }

  componentDidMount = async () => {
    const response = await request.get(`https://pacific-reaches-64332.herokuapp.com/classes`);
    this.setState({ 
        classes: response.body
    });
}

  render() {
    return (
        <div className="main-body">
          {
            this.state.classes.length === 0
            ? 'loading'
            :this.state.classes.map(ffclass => <div className="class-render" height="200" width="200">
              <div>{ffclass.name}</div>
              <div>{ffclass.cool_factor}</div>
              <div>{ffclass.role}</div>
              </div>
              )
          }
        </div>
  )
}
}
