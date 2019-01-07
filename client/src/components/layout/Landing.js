import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Shadow Scribe</h1>
                <p className="lead1">
                  {" "}
                  Connecting like minded individuals to the forefront of our
                  planets future.
                </p>
                <p className="lead2">
                  {" "}
                  Shadow Scribe is a safe haven for Journalists, Developers, and
                  Writers to exchange free information.
                </p>
                <p className="lead3">
                  {" "}
                  We value knowledge, teamwork and progressive communities above
                  all else. Join us today!
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
