const React = require('react');
const Layout = require('./Layout');

const Home = ({ title }) => {
  return (
    <Layout title={title}>
      <div className='main'>
        <h1>Урюпинский государственный Зоопарк</h1>
      </div>
      <div className='main2'>
        <img
          src='https://gamerwall.pro/uploads/posts/2022-09/1662335335_5-gamerwall-pro-p-tigritsa-s-tigryatami-pinterest-6.jpg'
          alt='грузим'
        />
      </div>
    </Layout>
  );
};

module.exports = Home;
