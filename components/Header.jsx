const React = require('react');
module.exports = function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
      <div className="container-fluid">
        <div className="header" id="navbarSupportedContent ">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="headerLogoDiv">
              <a className="ZooLogo" aria-current="page" href="/">
                <img
                  className="headerLogo"
                  src="https://img.icons8.com/ios-filled/512/group-of-animals.png"
                  alt="headerLogo"
                />
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-light" href="/animals">
                ЖИВОТНЫЕ
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-light" href="/guests">
                ПОСЕТИТЕЛЯМ
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link text-light" href="/about">
                О ЗООПАРКЕ
              </a>
            </div>
          </div>
        </div>
      <div id='logOut'></div>
      </div>
    </nav>
  );
};
