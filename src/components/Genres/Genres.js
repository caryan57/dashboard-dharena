import React, { Component } from 'react';
import Genres from './GenresInDb';

export default class Genres extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: [],
     
    };
  }

  getAllGenres(){
    fetch('http://localhost:3005/api/categories')
    .then(response => response.json())
    .then(data => {
      console.log(data)
        this.setState({ 
                    name: data.data.name                 
    })
    })
    .catch(error => console.log(error));
  }

  componentDidMount(){
    this.getAllGenres();
  }

  render() {
    return (
      <React.Fragment>
        <Genres name={this.state.name}  />
      </React.Fragment>
    )
  }
}
