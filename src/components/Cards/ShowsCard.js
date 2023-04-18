import React, { Component } from 'react';
import SmallCard from './SmallCard';

export default class ShowsCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Total de Shows',
      cuantity: 0,
      color: 'success',
      icon: 'fas fa-ticket-alt'
    };
  }

  getAllShows(){
    fetch('http://localhost:3005/api/shows')
    .then(response => response.json())
    .then(data => {
      this.setState({ cuantity: data.meta.total })
    })
    .catch(error => console.log(error));
  }

  componentDidMount(){
    this.getAllShows();
  }

  render() {
    return (
      <React.Fragment>
        <SmallCard title={this.state.title} cuantity={this.state.cuantity} icon={this.state.icon} color={this.state.color} />
      </React.Fragment>
    )
  }
}

