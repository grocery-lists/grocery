import React from "react";

const HomePage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <div className="h1 text-right mt-5 mr-5">Welcome to Grocery</div>
          <div className="h5 text-right text-secondary mr-5">
            Manage your grocery needs with your beloved family.
          </div>
          <div className="d-flex justify-content-center ">
            <button className="btn-lg btn-info mt-5 px-5 shadow">Login</button>
          </div>
        </div>
        <div className="col-6">
          <img src="./shop.svg" alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
