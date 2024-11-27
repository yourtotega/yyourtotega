// Function to show the selected section
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Function to add items to the cart
function addToCart(productName) {
    const cartItems = document.getElementById('cart-items');
    const listItem = document.createElement('li');
    listItem.textContent = productName;
    cartItems.appendChild(listItem);
    alert(`${productName} has been added to your cart!`);
}

// Function to search products
function searchProducts() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productName = product.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}


// Simple JavaScript to handle form submission
    document.getElementById('checkout-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    alert('Order placed successfully!');
    // Implement further functionality (e.g., backend integration) here.
     });
