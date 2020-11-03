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
        <div>
          {
            this.state.classes.length === 0
            ? 'loading'
            :this.state.classes.map(ffclass => <div>
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
