// JavaScript for Home Page

// Function to check user login status
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const categoriesSection = document.getElementById('categories');
    const exploreButton = document.getElementById('exploreButton');
    const loginLink = document.getElementById('loginLink');
    const signupLink = document.getElementById('signupLink');
    const logoutLink = document.getElementById('logoutLink');

    if (isLoggedIn) {
        // Show categories and other content
        categoriesSection.style.display = 'block';
        exploreButton.style.display = 'none'; // Hide the button if logged in
        loginLink.style.display = 'none';
        signupLink.style.display = 'none';
        logoutLink.style.display = 'inline-block';
    } else {
        // Hide categories and show login link
        categoriesSection.style.display = 'none';
        exploreButton.style.display = 'inline-block';
        loginLink.style.display = 'inline-block';
        signupLink.style.display = 'inline-block';
        logoutLink.style.display = 'none';
    }
}

// Event listener for category item click
document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (!isLoggedIn) {
            alert('Please log in to view this category.');
            return;
        }

        const category = item.getAttribute('data-category');
        window.location.href = `${category}.html`;
    });
});

// Event listener for logout
document.getElementById('logoutLink')?.addEventListener('click', () => {
    localStorage.removeItem('isLoggedIn');
    location.reload(); // Reload page to update UI
});

// Initial login check
checkLoginStatus();
