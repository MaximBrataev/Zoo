const React = require('react');
const Header = require('./Header');

module.exports = function Layout({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="stylesheet" href="/styles/style.css" />
        <link rel="stylesheet" href="/styles/slider.css" />
        <script defer src="https://unpkg.com/react/umd/react.development.js" />
        <script
          defer
          src="https://unpkg.com/react-dom/umd/react-dom.development.js"
        />
        <title>{title}</title>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};
