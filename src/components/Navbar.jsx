import React from "react";

function Navbar({ setCategory }) {
  return <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbarHeight" data-bs-theme="dark">
      <div className="container-fluid">
        <p className="navbar-brand navbarLogo" onClick={() => setCategory('general')}>NEWS</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navbarItems">
            {/* <a className="nav-link" onClick={() => setCategory('')}>General</a> */}
            <p className="nav-link" onClick={() => setCategory('science')}>Science</p>
            <p className="nav-link" onClick={() => setCategory('technology')}>Technology</p>
            <p className="nav-link" onClick={() => setCategory('sports')}>Sports</p>
            <p className="nav-link" onClick={() => setCategory('entertainment')}>Entertainment</p>
            <p className="nav-link" onClick={() => setCategory('health')}>Health</p>
            <p className="nav-link" onClick={() => setCategory('business')}>Business</p>
          </div>
        </div>
      </div>
    </nav>
  </div>;
}

export default Navbar;
// business
// entertainment
// general
// health
// science
// sports
// technology