const registerUser = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-regist').value.trim();
  const email = document.querySelector('#email-regist').value.trim();
  const password1 = document.querySelector('#password-register').value.trim();
  const password2 = document.querySelector('#password-register-confirm').value.trim();
  var password;


  if(password1 === password2){
    var match = true;
    password = password1;
    console.log('password successfuly set')

  }else {
    alert("passwords don't match!")
  }


  // if (username) {
  //   const response = await fetch('/api/user/login', {
  //     method: 'POST',
  //     body: JSON.stringify({ username, password }),
  //     headers: { 'Content-Type': 'application/json' },
  //   })

    // if (!response.ok) {
    //   var unique = true;
    // } else {
    //   alert("Username Already Exists!")
    // }

    if(password1 === password2){
      var match = true;
      console.log('passwords match! ')

    }else {
      alert("passwords don't match!")
    }



    if (match) {
      const newUser = await fetch('/api/user/register', {
        method: 'POST',
        body: JSON.stringify({username, password ,email }),
        headers: { 'Content-Type': 'application/json' },
      })
      
      if (newUser.ok) {
        alert("You have successfully registered")
        document.location.replace('/login');
      }
    }
  }

// };

document
  .querySelector('.register-form')
  .addEventListener('submit', registerUser);
