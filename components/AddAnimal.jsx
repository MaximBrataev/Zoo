const React = require('react');

function FormAddAnimal() {
  return (
    <div>
    <form action='/animals' method='POST' id='formAdd'>
  <div className="mb-3">
    <label for="name" className="form-label">Животное</label>
    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name'/>
  </div>
  <div className="mb-3">
    <label for="img" className="form-label">Фото</label>
    <input type="text" className="form-control" id="img" name='img'/>
  </div>
  <button type="submit" className="btn btn-primary">Добавить</button>
</form>
    </div>
  )
}

module.exports = FormAddAnimal