/* Dark Mode */

var Dark = document.querySelector('.card_toggle');
var All = document.querySelector('.top');

Dark.onclick = ()=> {
    All.classList.toggle('is-dark');
}

/* Contact Form Validation */

var fullName = document.querySelector("[name='Full Name']");
var email = document.querySelector("[name='Email']");
var message = document.querySelector("[name='Message']");

document.forms[0].onsubmit = function (e) {
   var nameValid = false;
   var emailValid = false;
   var messageValid = false;

   if (fullName.value !== "") {
   nameValid = true;
   }

   if (email.value !== "" && email.value.includes('.') && email.value.includes('@')) {
   emailValid = true;
   }

   if (message.value !== "" && message.value.length <= 10) {
   messageValid = true;
   }

   if (fullName === false || email === false || message === false) {
      e.preventDefault();
   }
};
/*
let userInput = document.querySelector("[name='username']");
let ageInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
   let userValid = false;
   let ageValid = false;

   if (userInput.value !== "" && userInput.value.length <= 10) {
   userValid = true;
   }

   if (ageInput.value !== "") {
   ageValid = true;
   }

   if (userValid === false || ageValid === false) {
      e.preventDefault();
   }
};
*/
/*
const name = document.querySelector('name');
const email = document.querySelector('email');
const message = document.querySelector('message');
const contactForm = document.querySelector('contact-form');
const errorElement = document.querySelector('error');
const successMsg = document.querySelector('success-msg');
const submitBtn = document.querySelector('submit');
  
const validate = (e) => {
  e.preventDefault();
 
  if (name.value.length < 3) {
    errorElement.innerHTML = 'Your name should be at least 3 characters long.';
    return false;
  } 
  
  if (!(email.value.includes('.') && (email.value.includes('@')))) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  } 

  if (!emailIsValid(email.value)) {
    errorElement.innerHTML = 'Please enter a valid email address.';
    return false;
  }

  if (message.value.length < 15) {
    errorElement.innerHTML = 'Please write a longer message.';
    return false;
  }

  errorElement.innerHTML = '';
  successMsg.innerHTML = 'Thank you! I will get back to you as soon as possible.'; 

  e.preventDefault();
  setTimeout(function () {
    successMsg.innerHTML = '';
    document.getElementById('contact-form').reset();
  }, 6000);

  return true;

}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);
*/

/* Images Carousel */