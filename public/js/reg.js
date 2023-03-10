const formRegistration = document.querySelector('#formReg');

if (formRegistration) {
  formRegistration.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { action, method, email, password, password2 } = event.target;

    const resOfReq = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
        password2: password2.value,
      }),
    });

    const answer = await resOfReq.json();
    if (answer.message === 'ok') {
      window.location.assign('/');
    } else {
      document.querySelector('.error').innerHTML = answer.message;
    }
  });
}
