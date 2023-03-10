const React = require('react');
const Layout = require('./Layout');
const AnimalCard = require('./AnimalCard');

const AnimalList = ({ title, animals, gallery }) => {
  return (
    <Layout title={title}>
      <div className='d-flex flex-wrap justify-content-between' id='divAnimals'>
        {animals.length > 0 ? (
          animals.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} gallery={gallery} />
          ))
        ) : (
          <p>загружаю</p>
        )}
      </div>
    </Layout>
  );
};

module.exports = AnimalList;
