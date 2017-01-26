var username = document.getElementById('username');
var password = document.getElementById('password');
var confirm_password = document.getElementById('confirm-password');
var email = document.getElementById('email');
var confirm_email = document.getElementById('confirm-email');
//var submitForm = document.getElementById('submitForm');
var mainForm = document.getElementById('main-form');
mainForm.addEventListener('submit', function() {
  if(username.value === '' ||
    password.value === '' ||
    confirm_password === ''||
    email.value === '' ||
    confirm_email === ''
  ) {
    alert('Form tidak boleh kosong');
    return false;
  } else if(password.value !== confirm_password.value) {
    alert('Konfirmasi password harus sama dengan password');
    return false;
  } else if(email.value !== confirm_email.value) {
    alert('Konfirmasi email harus sama dengan email');
    return false;
  }
});
