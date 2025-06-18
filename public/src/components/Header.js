import React from "react";
import { FaHeart, FaUser } from "react-icons/fa";
// import logo from "../images/logo.png"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-md bg-light px-3 py-2 shadow-sm">
      <div className="container-fluid">
        {/* Logo (Left) */}
        <a className="navbar-logo fw-bold" href="#">
            <img src='/images/logo.png' alt="Logo" />
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Right Side Items */}
        <div className=" navbar-collapse justify-content-end" id="navbarContent">
          <div className="d-flex align-items-center gap-3 flex-wrap">
            {/* Buttons */}
            <button className="btn bg-warning">Profile & Prices</button>
            <button className="btn btn-dark text-white">list your property</button>

            {/* Heart Icon */}
            <FaHeart className="text-danger fs-5 cursor-pointer" />

            {/* Country Dropdown */}
            <select className="form-select w-auto" defaultValue="PK">
              <option value="US">🇺🇸 US</option>
              <option value="UK">🇬🇧 UK</option>
              <option value="PK">🇵🇰 PK</option>
            </select>

            {/* Profile Icon */}
            <FaUser className="fs-5 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
