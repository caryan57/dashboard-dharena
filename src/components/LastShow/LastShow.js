import React, { Component } from 'react';
import LastShowsInDb from './LastShowsInDb';

export default class LastShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: [],
      description: [],
      name: 'Name',
      url: ''
    };
  }

  async getLastShows(){
    fetch('http://localhost:3005/api/shows/lastShow')
    .then(response => response.json())
    .then(show => {
        this.setState({ 
                    image: show.data[0].imageUrl,
                    description: show.data[0].descriptionHeader,
                    name: show.data[0].name,
                    url: `http://localhost:3005/shows/${show.data[0].id}`                  
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
        <LastShowsInDb image={this.state.image} description={this.state.description} name={this.state.name} url={this.state.url}  />
      </React.Fragment>
    )
  }
}

