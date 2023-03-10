const formAdd = document.querySelector('#formAdd');

if(formAdd) {
  formAdd.addEventListener('submit', async (event) => {
    const ( { action, method, name, img}) = event.target;
  })

  const result = await fetch('action' , {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      name: name.value,
      img: img.value,
    }),
  });

  const acsess = await result.json();
  if (acsess.message) {
    document.querySelector('.errorAdd').innerHTML = acsess.message;
  } else {
    formAdd.insertAdjacentHTML('beforeend', acsess.html);
  }
}