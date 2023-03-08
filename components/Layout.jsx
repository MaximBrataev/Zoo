const React = require('react');

module.exports = function SiteFormCreate({ title, children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};
