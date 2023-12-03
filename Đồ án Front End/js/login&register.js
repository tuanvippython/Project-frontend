const container = document.getElementById('container');

const registerBtn = document.getElementById('register');

const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


const signInButton = document.getElementById('sign-in');

signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = '/Shoes_shop.html';
});

const signUpButton = document.getElementById('sign');

signUpButton.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/Shoes_shop.html';
});
