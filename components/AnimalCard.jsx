const React = require('react');


const AnimalCard = ({ animal, gallery, adminId }) => {
  const photos = gallery.filter((photo) => photo.animalId === animal.id);

  return (
    <div className="card anya" style={{ width: '18rem' }}>
      <div className="divImg">
        {photos.length > 0 && (
          <img
            src={photos[1].photo}
            className="card-img-top anya2"
            alt="photoOfAnimal"
          />
        )}
      </div>

      <div className="card-body">
        <h5 className="card-title">{animal.name}</h5>


        {adminId &&
          <a href={`/animals/:animalId`} className="trashUrl">
            <img className="trash" alt="trash" src="/logo/trash.png" />
          </a>
          }

      </div>
    </div>
  );
};

module.exports = AnimalCard;
