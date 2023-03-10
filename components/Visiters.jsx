const React = require('react');
const Layout = require('./Layout');

const Visiters = ({ title, priceWeekday, priceWeekend }) => {
  return (
    <Layout title={title}>
      <div className='prices'></div>
    </Layout>
  );
};

module.exports = Visiters;
