const React = require('react');

const AnimalCard = ({ animal }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      {/* <img src={animal.img} className="card-img-top" alt="..."/> */}
      <div className='card-body'>
        <h5 className='card-title'>{animal.name}</h5>
      </div>
    </div>
  );
};

module.export = AnimalCard;
