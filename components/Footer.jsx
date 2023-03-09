const React = require('react');
function Footer({}) {
  return (
    <div className="footer">
      <a className="adminLogo" href="/admin/login">
        <img src="/logo/icons.png" alt="logo" />
      </a>
    </div>
  );
}

module.exports = Footer;
