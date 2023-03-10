const React = require('react');

const AnimalCard = ({ animal, gallery, admin }) => {
  const photos = gallery.filter((photo) => photo.animalId === animal.id);
  return (
    <div>
      <div className="card anya">
        <img
          src={photos[3].photo}
          className="card-img-top anya2"
          alt="photoOfAnimal"
        />

        <div className="card-body">
          <a href="/admin/" className="redir" alt="animalImg">
            <h5 className="card-title">{animal.name}</h5>
          </a>
          <a href="/" className='trashUrl'>
            <img className="trash" alt="trash" src="/logo/trash.png" />
          </a>
        </div>
      </div>
      {/* {admin.email ? (
        <a href="/">
          <img alt="trash" src="/logo/trash.png" />
        </a>
      ) : (
        <h1>fffffff</h1>
      )} */}
    </div>
  );
};

module.exports = AnimalCard;
