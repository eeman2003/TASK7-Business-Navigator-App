// update-profile.js

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirmPassword");
    const cityInput = document.getElementById("city");
    const addressInput = document.getElementById("address");
    const updateProfileForm = document.getElementById("update-profile-form");

    // Check if the user is logged in
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (!isLoggedIn || !loggedInUser) {
        // If not logged in, redirect to login page
        window.location.href = "login.html";
        return;
    }

    // Populate form fields with the user's current information
    nameInput.value = loggedInUser.name || '';
    emailInput.value = loggedInUser.email || '';
    cityInput.value = loggedInUser.city || '';
    addressInput.value = loggedInUser.address || '';

    // Handle form submission for profile update
    updateProfileForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (passwordInput.value !== confirmPasswordInput.value) {
            alert("Passwords do not match!");
            return;
        }

        // Create updated user object
        const updatedUser = {
            name: nameInput.value,
            email: emailInput.value,
            password: passwordInput.value ? passwordInput.value : loggedInUser.password,
            city: cityInput.value,
            address: addressInput.value,
        };

        // Update the user's data in local storage
        localStorage.setItem(loggedInUser.email, JSON.stringify(updatedUser));

        // Update the loggedInUser data in local storage
        localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));

        alert("Profile updated successfully!");
        window.location.href = "index.html";  // Redirect to profile page or anywhere else
    });
});
