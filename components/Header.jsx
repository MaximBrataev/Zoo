const React = require('react');
module.exports = function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent ">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light" href="/students">
                Students
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
