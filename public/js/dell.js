const dell = document.querySelector('.trashUrl');
if (dell) {
  dell.addEventListener('click', async (e) => {
    if (e.target.classList.contains('img')) {
      const res = await fetch(`/animals/${e.target.dataset.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.animalNum) {
    e.target.closest('.anya').remove();
    }
    }
  });
}
