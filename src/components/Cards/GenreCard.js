import React, { Component } from 'react';
import SmallCard from './SmallCard';

export default class GenreCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Total de generos',
      cuantity: 0,
      color: 'warning',
      icon: 'fas fa-music'
    };
  }

  getAllGenre(){
    fetch('http://localhost:3005/api/categories')
    .then(response => response.json())
    .then(data => {
      this.setState({ cuantity: data.meta.total })
    })
    .catch(error => console.log(error));
  }

  componentDidMount(){
    this.getAllGenre();
  }

  render() {
    return (
      <React.Fragment>
        <SmallCard title={this.state.title} cuantity={this.state.cuantity} icon={this.state.icon} color={this.state.color} />
      </React.Fragment>
    )
  }
}

