// search.js

document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");

    // Function to fetch businesses from local storage
    function getBusinesses() {
        const businesses = localStorage.getItem('businesses');
        return businesses ? JSON.parse(businesses) : [];
    }

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const query = searchInput.value.trim().toLowerCase();

        // Clear previous results
        searchResults.innerHTML = "";

        // Get businesses from local storage
        const businesses = getBusinesses();

        // Filter results based on query
        const filteredResults = businesses.filter(business => 
            business.name.toLowerCase().includes(query) || 
            business.category.toLowerCase().includes(query)
        );

        // Display results
        if (filteredResults.length > 0) {
            filteredResults.forEach(result => {
                const resultItem = document.createElement("div");
                resultItem.className = "search-result-item";
                resultItem.innerHTML = `
                    <h2>${result.name}</h2>
                    <p><strong>Category:</strong> ${result.category}</p>
                    <p><strong>Location:</strong> ${result.location}</p>
                    <p><strong>Phone Number:</strong> ${result.phone}</p>
                    <p>${result.description}</p>
                `;
                searchResults.appendChild(resultItem);
            });
        } else {
            searchResults.innerHTML = "<p>No results found.</p>";
        }
    });
});
