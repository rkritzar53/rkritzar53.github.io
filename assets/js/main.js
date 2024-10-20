// Light and Dark Mode Toggle
const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('mode', 'dark');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        localStorage.setItem('mode', 'light');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
});

// Load mode from localStorage
window.addEventListener('DOMContentLoaded', () => {
    const mode = localStorage.getItem('mode') || 'light';
    body.classList.toggle('dark-mode', mode === 'dark');
    toggleButton.textContent = mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Account Management
const accounts = []; // Store user accounts in an array (for demo purposes)

document.getElementById('create-account-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username && password) {
        accounts.push({ username, password });
        alert('Account created successfully!');
        event.target.reset(); // Reset the form
    } else {
        alert('Please fill in all fields.');
    }
});

document.getElementById('login-form')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const account = accounts.find(acc => acc.username === username && acc.password === password);
    if (account) {
        alert('Login successful!');
        // Redirect to user account page or perform further actions
    } else {
        alert('Invalid username or password.');
    }
});

// Product Page Functionality
const productOptions = document.getElementById('product-options');
const priceDisplay = document.getElementById('price');

// Update price based on selected option
if (productOptions) {
    productOptions.addEventListener('change', () => {
        const selectedOption = productOptions.options[productOptions.selectedIndex];
        const price = selectedOption.getAttribute('data-price');
        priceDisplay.textContent = `Price: $${price}`;
    });
}

// Optionally, you can add functionality for the "Add to Cart" button
document.getElementById('add-to-cart')?.addEventListener('click', () => {
    const selectedProduct = productOptions.value;
    const selectedOption = productOptions.options[productOptions.selectedIndex];
    const selectedPrice = selectedOption.getAttribute('data-price');
    alert(`Added ${selectedProduct} to cart for $${selectedPrice}`);
});
