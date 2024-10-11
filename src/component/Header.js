import React from "react";

const Header = () => {
  return (
    <div>
      <div id="top-bar" className="top-bar">
        <p>Get Shampoo Free on purchase of</p>
      </div>
      <div className="header-sction">
        <div className="search-top">
          <div className="container">
            <div className="row">
              <div className=" xs-col-3 sm-col-3 col-md-3 col-lg-3 ">
                <a href="home.html">
                  <div className="logo-img">
                    <img src="images/logo.png" />
                  </div>
                </a>
              </div>
              <div className=" xs-col-6 sm-col-6 col-md-6 col-lg-6 d-plye">
                <form>
                  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit">
                    <img src="images/search.png" />
                  </button>
                </form>
              </div>
              <div className=" xs-col-3 sm-col-3 col-md-3 col-lg-3 d-plye">
                <div className="icon-search">
                  <div className="icon-accon">
                    <img src="images/shoping.png" />
                    <a href="#"> Cart</a>
                  </div>
                  <div className="icon-accon">
                    <img src="images/user-light.png" />
                    <a href="#">Login</a>
                  </div>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container">
                <div className="navbar-bran"></div>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="home.html"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Best Seller
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="about.html"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        About
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Shop
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Ingredients
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
