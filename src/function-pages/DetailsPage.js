import React, { Component } from 'react'
import { fetchRoles, updateClass } from '../fetches.js'

export default class CreatePage extends Component {
  state = {
    roles: []
  }

  componentDidMount = async () => {
    const roles = await fetchRoles();
    console.log(roles)

    this.setState({ roles });
 }

  handleSubmit = async (e) =>{
    e.preventDefault();


    await updateClass(
        this.props.match.params.id,
        {
      name: this.state.job,
      cool_factor: this.state.cool_factor,
      role_id: this.state.role,
      base_game: false,
      owner_id: 1
    });
    
    this.props.history.push('/');

  }

  handleChange = (e) => {
    this.setState({ role: e.target.value})
  }
       
       render() {
           return (
               <div>
                 Create a Class
                 <form onSubmit={this.handleSubmit}>
                   <label >
                     Class
                     <input onChange={e => this.setState({ job: e.target.value })} />
                   </label>
                   <label >
                     Cool Factor
                     <input  onChange={e => this.setState({ cool_factor: e.target.value })} />
                   </label>
                   <label>
                     Role
                     <select onChange={this.handleChange}>
                       {this.state.roles.map(role => 
                       <option key={role.id} value={role.id}>
                         {role.name}
                       </option>)}
                     </select>
                   </label>
                   <button type='submit'>Submit</button>
                 </form>
               </div>
           )
       }
    }