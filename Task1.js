// Cart Icon Update Logic
const cartIcon = document.querySelector('.fa-shopping-cart');
let cartCount = 0;

// Add to Cart Function
function addToCart(productName, productPrice) {
    cartCount++;
    cartIcon.setAttribute('data-count', cartCount);
    localStorage.setItem(productName, JSON.stringify({ name: productName, price: productPrice }));
    alert(`${productName} added to cart!`);
}

// Sample Products & Button Event Listeners
const addButtons = document.querySelectorAll('.shop-link');

addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productName = e.target.closest('.category-card').querySelector('h3').textContent;
        const productPrice = "$" + (Math.floor(Math.random() * 100) + 50); // Random price for demo
        addToCart(productName, productPrice);
    });
});

// Cart Count Display Update (on page load)
window.onload = () => {
    if (localStorage.length > 0) {
        cartCount = Object.keys(localStorage).length;
        cartIcon.setAttribute('data-count', cartCount);
    }
};
