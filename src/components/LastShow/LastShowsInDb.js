import React from 'react';


function LastMovieInDb(props){
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Show en la Base de Datos</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={props.image} alt={props.name} />
                    </div>
                    <p>{props.description}</p>
                    <a href={props.url} className="btn btn-danger" target="_blank" rel="noreferrer">Ver más detalles</a>
                </div>
            </div>
        </div>
    )
}




export default LastMovieInDb;
