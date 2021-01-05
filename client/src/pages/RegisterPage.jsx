import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6">
            <div className="h1 text-center mt-5">Register</div>
            <div className="d-flex justify-content-center">
              <form className="mt-5">
                <div class="form-group row">
                  <label class="col-sm-3 col-form-label">Name</label>
                  <div class="col-sm-9">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputEmail3" class="col-sm-3 col-form-label">
                    Email
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail3"
                      placeholder="john@doe.com"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputPassword3" class="col-sm-3 col-form-label">
                    Password
                  </label>
                  <div class="col-sm-9">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword3"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="text-center mt-5">
                  <button type="submit" class="btn btn-primary px-5">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-6">
            <img src="./shop.svg" alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
