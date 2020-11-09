import React, { Component } from 'react'
import { 
  fetchClass, 
  fetchRoles, 
  updateClass, 
  deleteClass,
} from '../fetches.js'

export default class CreatePage extends Component {
  state = {
    roles: [],
    job: {},
    class: '',
    cool_factor: 0,
    role_id: 0
  }

  componentDidMount = async () => {
    const roles = await fetchRoles();
    const job = await fetchClass(this.props.match.params.id);
    
    this.setState({ 
      roles, 
      job, 
      class: job.class,
      cool_factor: job.cool_factor,
      role_id: job.class,
    });
    console.log(this.state)
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

  handleClick = async (e) =>{
    e.preventDefault();

    await deleteClass(
      this.props.match.params.id
    );

    this.props.history.push('/');
  }

  handleDelete = (e) => {
    this.setState({ role: e.target.value})
  }
       
       render() {
           return (
               <div>
                 Create a Class
                 <form onSubmit={this.handleSubmit} >
                   <label >
                     Class
                     <input 
                     onChange={e => this.setState({ job: e.target.value })} 
                     value={this.state.class}
                     />
                   </label>
                   <label >
                     Cool Factor
                     <input  
                     onChange={e => this.setState({ cool_factor: e.target.value })} 
                     value={this.state.cool_factor}
                     />
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
                   <button type='submit'>Update Class</button>
                 </form>
                  <form onSubmit={this.handleDelete}>
                    <button type='submit'>Delete Button</button>
                  </form>
               </div>
           )
       }
    }