import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login"); // redirect after logout
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#ffff" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src="media/images/logo.svg" alt="logo" style={{ width: "30%" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Common links */}
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Conditionally show auth links */}
            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button className="btn btn-outline-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


// import React from 'react'
// import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <nav class="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#ffff" }}>
//             <div class="container p-2">
//                 <Link class="navbar-brand" to="/">
//                     <img src='media/images/logo.svg' alt='logo' style={{ width: "30%" }} />
//                 </Link>
//                 <button class="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">

//                     <form class="d-flex" role="search">
//                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li class="nav-item">
//                                 <Link class="nav-link active" aria-current="page" to="/signup">Signup</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to="/about">About</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to="/products">Products</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to="/pricing">Pricing</Link>
//                             </li>
//                             <li class="nav-item">
//                                 <Link class="nav-link active" to="/support">Support</Link>
//                             </li>
//                         </ul>

//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;