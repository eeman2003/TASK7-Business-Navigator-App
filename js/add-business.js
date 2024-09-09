document.getElementById('add-business-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const businessName = document.getElementById('business-name').value;
    const category = document.getElementById('category').value;
    const location = document.getElementById('location').value;
    const phone = document.getElementById('phone').value;
    const description = document.getElementById('description').value;
    const imageUrl = document.getElementById('image-url').value;

    // Create a new business object
    const business = {
        id: Date.now(),
        name: businessName,
        category: category,
        location: location,
        phone: phone,
        description: description,
        imageUrl: imageUrl || 'assets/default-business.jpg', // Fallback image
        reviews: [] // Empty array to hold reviews
    };

    // Get existing businesses from local storage
    let businesses = JSON.parse(localStorage.getItem('businesses')) || [];

    // Add the new business to the array
    businesses.push(business);

    // Save back to local storage
    localStorage.setItem('businesses', JSON.stringify(businesses));

    // Confirm submission and clear form
    alert('Business added successfully!');
    document.getElementById('add-business-form').reset();
});
