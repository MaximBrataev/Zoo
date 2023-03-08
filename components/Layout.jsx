const React = require('react');
const Header = require('./Header');

module.exports = function SiteFormCreate({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
      </head>
      <body>
        <Header />
        {children}
        <h1>Выведи эту хрень</h1>
      </body>
    </html>
  );
};
