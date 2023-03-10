const React = require('react');




function Footer({adminId}) {
  return (
    <div className="footer">
    {adminId &&
    <p id='foo'>Online</p>}
      <a className="adminLogo" href="/admin/login">
        <img src="/logo/icons.png" alt="logo" />
      </a>
    </div>
  );
}

module.exports = Footer;
