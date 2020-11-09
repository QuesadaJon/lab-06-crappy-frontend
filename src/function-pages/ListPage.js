import React, { Component } from 'react'
import { fetchClasses } from '../fetches.js'
import { Link } from 'react-router-dom';


export default class ListPage extends Component {
    state = {
        classes: []
      }
    
      componentDidMount = async () => {
        const classes = await fetchClasses();  

        this.setState({ classes });
     }
    render() {
      const { classes } = this.state;
        return (
            <div className="main-body">
             {
               classes.length === 0
               ? 'loading'
               :classes.map(ffclass => <Link to={`details/${ffclass.id}`}><div className="class-render" height="200" width="200">
                 <div>Id: {ffclass.id}</div>
                 <div>Class: {ffclass.class}</div>
                 <div>Cool Factor: {ffclass.cool_factor}</div>
                 <div>Role: {ffclass.role}</div>
                 </div></Link>)
             }
           </div>
        )
    }
}
