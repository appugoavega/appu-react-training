import React from 'react'
import axios from 'axios'

export default class GitUser extends React.Component {
 state = { users: [] }

 componentDidMount() {
   axios.get('https://api.github.com/users').then(result => this.setState({users: result.data}));
 }

 render() {
   return (
     
     <ul>
      { this.state.users.map(user => 
        <li>User Id: {user.id} -  Name:{user.login}</li>)
      }
     </ul>
   )
 }

}