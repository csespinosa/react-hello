import React from "react";

const Card = () => {
    return  <div className="container my-5">
    <div className="row">
      {[...Array(4)].map((_, index) => (
        <div className="col-md-3" key={index}>
          <div className="card text-center">
            <div className="card-body">
              <div className="placeholder" style={{ height: "200px", background: "#ddd" }}>500 x 325</div>
              <h5 className="card-title mt-3">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
          </div>
        </div>
      ))}
    </div>
</div>
}

export default Card;