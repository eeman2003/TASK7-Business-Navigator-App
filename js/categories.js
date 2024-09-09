document.addEventListener('DOMContentLoaded', function() {
    const businessList = document.getElementById('business-list');

    // Fetch businesses from local storage
    const businesses = JSON.parse(localStorage.getItem('businesses')) || [];

    // Loop through businesses and display them
    businesses.forEach(business => {
        const businessItem = document.createElement('div');
        businessItem.className = 'category-item';
        businessItem.innerHTML = `
            <img src="${business.imageUrl}" alt="${business.name}">
            <h3>${business.name}</h3>
            <p>${business.location}</p>
            <button onclick="viewBusinessDetails(${business.id})" class="button">View Details</button>
        `;
        businessList.appendChild(businessItem);
    });
});

function viewBusinessDetails(id) {
    // Store the selected business ID in local storage
    localStorage.setItem('selectedBusinessId', id);
    // Redirect to the business details page
    window.location.href = 'business-details.html';
}
