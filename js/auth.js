// JavaScript for Authentication
document.addEventListener('DOMContentLoaded', function() {
// Signup Form Submission
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const city = document.getElementById('city').value;
        const address = document.getElementById('address').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const user = { name, email, password, city, address };

        localStorage.setItem(email, JSON.stringify(user));
        alert('User registered successfully!');
        signupForm.reset();
    });
}

// Login Form Submission
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const user = JSON.parse(localStorage.getItem(email));

        if (!user) {
            alert('User not found!');
            return;
        }

        if (user.password !== password) {
            alert('Incorrect password!');
            return;
        }

        alert('Login successful!');
        loginForm.reset();
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        window.location.href = 'index.html';  // Change 'index.html' to the desired page
        
    });
}

// JavaScript for Authentication (auth.js)

const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const authLinks = document.getElementById('auth-links');
  const userLinks = document.getElementById('user-links');

  if (isLoggedIn) {
    authLinks.style.display = 'none';
    userLinks.style.display = 'block';
  } else {
    authLinks.style.display = 'block';
    userLinks.style.display = 'none';
  }

  // Add event listener for logout
  const logoutButton = document.querySelector('a[href="logout.html"]');
  if (logoutButton) {
    logoutButton.addEventListener('click', function(event) {
      event.preventDefault();
      localStorage.setItem('isLoggedIn', 'false');
      window.location.href = 'index.html';
    });
  }
});