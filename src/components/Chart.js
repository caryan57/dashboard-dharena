import React, { Component } from 'react'

import ChartRow from "./ChartRow";




export class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          ShowsList: [], // Traer todos los shows
        };
      }
    
      getAllShows() {
        fetch("http://localhost:3005/api/shows")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.setState({
              ShowsList: data.data, // actualizar a showslist
            });
          })
          .catch((error) => console.log(error));
      }
    
      componentDidMount() {
        this.getAllShows();
      }
  
  
  
    render() {
    
        return (
            <React.Fragment>
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Título</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Género</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Título</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Género</th>
                <th>Precio</th>
              </tr>
            </tfoot>
            <tbody>
              {this.state.ShowsList.map((row, i) => {
                return <ChartRow {...row} key={i} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </React.Fragment>)
 
  }
}

export default Chart


