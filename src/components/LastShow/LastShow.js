import React, { Component } from 'react';
import LastShowInDb from './LastShowsInDb';

export default class LastShow extends Component {

  constructor() {
    super();
    this.state = {
      image: [],
      description: [],
      name: [],
     
    };
  }

  getLastShows(){
    fetch('http://localhost:3005/api/shows/lastshow')
    .then(response => response.json())
    .then(show => {
      console.log(show)
        this.setState({ 
                    image: show.data.image,
                    description: show.data.descriptionHeader,
                    name: show.data.name                  
    })
    })
    .catch(error => console.log(error));
  }

  componentDidMount(){
    this.getLastShows();
  }

  render() {
    return (
      <React.Fragment>
        <LastShowInDb image={this.state.image} description={this.state.description} name={this.state.name}  />
      </React.Fragment>
    )
  }
}

