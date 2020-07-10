import React from "react";
import { Link } from "react-router-dom";
const header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            {" "}
            Covid 19 Risk Estimator{" "}
          </Link>{" "}
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <a href="https://github.com/ken1800">@kenny</a>
            </ul>{" "}
          </div>{" "}
        </div>{" "}
      </nav>
    </div>
  );
};

export default header;
