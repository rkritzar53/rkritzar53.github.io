// Get references to the elements
const priceElement = document.getElementById('price');

// Set the constant price
const constantPrice = 21.07;

// Update the displayed price when the page loads
priceElement.textContent = `Price: $${constantPrice.toFixed(2)}`;

// Function to update price (currently does nothing since the price is constant)
function updatePrice() {
    priceElement.textContent = `Price: $${constantPrice.toFixed(2)}`;
}

// Event listeners for model and surface selection (optional)
document.getElementById('product-models').addEventListener('change', updatePrice);
document.getElementById('surface-options').addEventListener('change', updatePrice);

// Add to cart functionality
document.getElementById('add-to-cart').addEventListener('click', function() {
    alert('Added to cart at price: $' + constantPrice.toFixed(2));
});
