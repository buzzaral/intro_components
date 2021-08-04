const form = document.getElementById('form');
const email = document.getElementById('email');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailVal = email.value;
  //email format check

  if (!validateEmail(emailVal)) {
    form.classList.add('error');
    form.classList.remove('success');
    
  } else {
    form.classList.remove('error');
    form.classList.add('success');
  }

})

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}



// CHANGES TYPEE BETWEEN TEXT AND PASSWORD TO HIDE //

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 