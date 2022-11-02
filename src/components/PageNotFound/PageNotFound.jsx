import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="t display-1 fw-bold">404</h1>
          <p className="fs-3">
            <span className="text-danger">Opps! </span>
            <span className="t">Page not found.</span>
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <Link to="/" className="test btn btn-outline-dark">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
