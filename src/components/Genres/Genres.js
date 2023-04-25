import React, { Component } from "react";
import Genres from "./GenresInDb";

export default class GenresShows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      genresList: [], // actualizar a genresList
    };
  }

  getAllGenres() {
    fetch("http://localhost:3005/api/categories")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          genresList: data.data, // actualizar a genresList
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getAllGenres();
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4 ">
            <div className="card-header py-3">
              <h6>Genres in Data Base</h6>
            </div>
            <div className="card-body fondoCaja">
              <div className="row">
                {
                  //console.log(this.state.genresList)
                  this.state.genresList.map((genre, index) => {
                    return <Genres {...genre} key={index} />;
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
