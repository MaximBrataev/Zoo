const React = require('react');
const Header = require('./Header');
const Footer = require('./Footer')

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};
