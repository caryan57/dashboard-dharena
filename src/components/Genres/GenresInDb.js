import React from "react";

function GenresInDb() {
  return (
    <React.Fragment>
    <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow ">
            <div className="card-body">
                {props.name}
            </div>
        </div>
    </div>
</React.Fragment>
  );
}

export default GenresInDb;
