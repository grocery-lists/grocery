import React from "react";

const LoginPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <div className="h1 text-center mt-5">Login</div>
          <div className="d-flex justify-content-center">
            <form className="mt-5">
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
              <div class="form-group text-center">
                <label class="col-form-label mt-4">
                  <h5>Login as</h5>
                </label>
              </div>
              <div class="col-sm-9 d-flex justify-content-center text-center ml-5">
                <div className="col-6">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="parent"
                    />
                    <label class="form-check-label" for="inlineRadio1">
                      Parent
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="child"
                    />
                    <label class="form-check-label" for="inlineRadio2">
                      Child
                    </label>
                  </div>
                </div>
              </div>
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-info px-5">
                  Login
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
  );
};

export default LoginPage;
