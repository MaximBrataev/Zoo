const React = require('react');
const Layout = require('./Layout');
const AnimalCard = require('./AnimalCard');

const AnimalList = ({ title, animals, gallery, adminId }) => {
  return (
    <Layout title={title} animals={animals}>
      <div className="d-flex flex-wrap justify-content-between" id="divAnimals">
        {animals.length > 0 ? (
          animals.map((animal) => (
            <AnimalCard
              key={animal.id}
              animal={animal}
              gallery={gallery}
              adminId={adminId}
            />
          ))
        ) : (
          <p>загружаю</p>
        )}
        {adminId && (
          <div id="addC">
          <a href='/animals/form'>
            <img alt="add" src="/logo/addIcon.png" />
            </a>
          </div>
        )}
      </div>
    </Layout>
  );
};

module.exports = AnimalList;
