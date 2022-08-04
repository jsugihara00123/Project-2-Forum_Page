const registerUser = async (event) => {
  event.preventDefault();

  const userName = document.querySelector('#username-regist').value.trim();
  const email = document.querySelector('#email-regist').value.trim();
  const password1 = document.querySelector('#password-register').value.trim();
  const password2 = document.querySelector('#password-register-confirm').value.trim();

  if(passwor1 === password2){
    var match = true;
  }else {
    alert("passwords don't match!")
  };

  if (userName) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ userName }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      alert("Username Already Exists!")
    
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
