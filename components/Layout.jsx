const React = require('react');
const Header = require('./Header');
const Footer = require('./Footer');

module.exports = function Layout({ title, children , adminId}) {
  return (
    <html lang='en'>
      <head>

        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/getStyle.css" />
        <link rel="stylesheet" href="/styles/slider.css" />
        <script defer src="/js/reg.js" />
        <script defer src="https://unpkg.com/react/umd/react.development.js" />
        <script defer src="/js/dell.js" />

        <script
          defer
          src='https://unpkg.com/react-dom/umd/react-dom.development.js'
        />
        <title>{title}</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer adminId={adminId}/>
      </body>
    </html>
  );
};
