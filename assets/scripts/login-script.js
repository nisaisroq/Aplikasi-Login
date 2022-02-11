/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */
/** @module Login-Script */
/**
* Membuat variabel LoginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');


/**
* Membuat variabel InputEmailElement untuk imput email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');


/**
* Membuat variabel InputPasswordElement untuk input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expentedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';


/**
* Membuat variabel expentedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';


/* Comment : Menambahkan aksi klik pada button. */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /** 
  * Membuat variabel email untuk menyimpan nilai email yang didapatkan saat button ditekan.
  * @constan {string}
  */
  const email = inputEmailElement.value;
  
  
   /** 
  * Membuat variabel password untuk menyimpan nilai password yang didapatkan saat button ditekan.
  * @constan {string}
  */
  const password = inputPasswordElement.value;
  
   /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* Comment : Jika sesuai maka akan berpindah ke halaman HOME*/ 
    goToHome();
  } else {
    
    /* Comeent : Jika tidak maka akan menampilkan informasi bahwa input salah.*/
    showPopUp();
  }
});
