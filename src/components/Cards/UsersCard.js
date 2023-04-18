import React, { Component } from 'react';
import SmallCard from './SmallCard';

export default class UsersCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Total de Usuarios',
      cuantity: 0,
      color: 'primary',
      icon: 'fas fa-user'
    };
  }

  getAllUsers(){
    fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => {
      this.setState({ cuantity: data.meta.total })
    })
    .catch(error => console.log(error));
  }

  componentDidMount(){
    this.getAllUsers();
  }

  render() {
    return (
      <React.Fragment>
        <SmallCard title={this.state.title} cuantity={this.state.cuantity} icon={this.state.icon} color={this.state.color} />
      </React.Fragment>
    )
  }
}