document.addEventListener('DOMContentLoaded', function() {
    // Get the selected business ID from local storage
    const selectedBusinessId = localStorage.getItem('selectedBusinessId');

    // Fetch businesses from local storage
    const businesses = JSON.parse(localStorage.getItem('businesses')) || [];

    // Find the selected business by ID
    const selectedBusiness = businesses.find(business => business.id == selectedBusinessId);

    if (selectedBusiness) {
        // Display business details
        document.getElementById('business-name').textContent = selectedBusiness.name;
        document.getElementById('business-image').src = selectedBusiness.imageUrl;
        document.getElementById('business-category').textContent = selectedBusiness.category;
        document.getElementById('business-location').textContent = selectedBusiness.location;
        document.getElementById('business-phone').textContent = selectedBusiness.phone;
        document.getElementById('business-description').textContent = selectedBusiness.description;

        // Display existing reviews
        const reviewsList = document.getElementById('reviews-list');
        selectedBusiness.reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.innerHTML = `
                <p>${review.text}</p>
                <p><strong>Rating:</strong> ${review.rating} / 5</p>
            `;
            reviewsList.appendChild(reviewItem);
        });

        // Handle adding a new review
        document.getElementById('add-review-form').addEventListener('submit', function(e) {
            e.preventDefault();

            // Get review values
            const reviewText = document.getElementById('review-text').value;
            const reviewRating = document.getElementById('review-rating').value;

            // Create a new review object
            const review = {
                text: reviewText,
                rating: reviewRating
            };

            // Add the new review to the selected business's reviews array
            selectedBusiness.reviews.push(review);

            // Save the updated businesses array back to local storage
            localStorage.setItem('businesses', JSON.stringify(businesses));

            // Display the new review on the page
            const newReviewItem = document.createElement('div');
            newReviewItem.className = 'review-item';
            newReviewItem.innerHTML = `
                <p>${review.text}</p>
                <p><strong>Rating:</strong> ${review.rating} / 5</p>
            `;
            reviewsList.appendChild(newReviewItem);

            // Clear the form
            document.getElementById('add-review-form').reset();
        });
    } 
});
