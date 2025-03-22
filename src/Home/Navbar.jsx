import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle Logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("You have been logged out.");
  };

  // Scroll to Home when already on home
  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Scroll to Recipes section when on home page
  const handleRecipesClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      setTimeout(() => {
        const recipesSection = document.getElementById("recipes-section");
        if (recipesSection) {
          recipesSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ position: "sticky", top: "0", zIndex: "100" }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logo.jpg"
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span className="fw-bold">Recipe Box</span>
        </Link>

        {/* Navbar Toggler (For Mobile) */}
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
          <ul className="navbar-nav me-auto">
            {/* Home Button */}
            <li className="nav-item">
              <a href="/" className="nav-link" onClick={handleHomeClick}>
                Home
              </a>
            </li>

            {/* Recipes Button */}
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={handleRecipesClick}>
                Recipes
              </a>
            </li>

            {/* Your Recipes Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="recipeDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Your Recipes
              </a>
              <ul className="dropdown-menu" aria-labelledby="recipeDropdown">
                <li>
                  <Link className="dropdown-item" to="/add-recipe">
                    Add Recipe
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/my-recipes">
                    My Recipes
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search recipes..."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>

          {/* Login/Register/Profile/Logout Buttons */}
          <div className="d-flex">
            {isLoggedIn ? (
              <>
                <NavLink to="/profile" className="btn btn-outline-light me-2">
                  Profile
                </NavLink>
                <button className="btn btn-warning" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-light me-2">
                  Login
                </NavLink>
                <NavLink to="/register" className="btn btn-success">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
