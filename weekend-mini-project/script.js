// Variables
let currentFood = null;
let currentQuantity = 1;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayFoodItems(foodData);
    displaySpecialItems();
    setupHamburgerMenu();
});

// Setup Hamburger Menu
function setupHamburgerMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Show/Hide Pages
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }

    // Close mobile menu
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = 'none';

    // Update page title
    window.scrollTo(0, 0);
}

// Display Food Items Dynamically
function displayFoodItems(foods) {
    const foodItemsContainer = document.getElementById('food-items');
    foodItemsContainer.innerHTML = '';

    foods.forEach(food => {
        const foodCard = createFoodCard(food);
        foodItemsContainer.appendChild(foodCard);
    });
}

// Create Food Card Element
function createFoodCard(food) {
    const card = document.createElement('div');
    card.className = 'food-card';
    
    const rating = '⭐'.repeat(Math.floor(food.rating));
    
    card.innerHTML = `
        <img src="${food.image}" alt="${food.name}" class="food-image">
        <div class="food-info">
            <p class="food-name">${food.name}</p>
            <p class="food-description">${food.description}</p>
            <div class="food-rating">
                <span class="stars">${rating}</span>
                <span>(${food.reviews} reviews)</span>
            </div>
            <p class="food-price">$${food.price.toFixed(2)}</p>
            <button class="btn-primary" onclick="viewFoodDetails(${food.id})">View Details</button>
        </div>
    `;
    
    card.addEventListener('click', function(e) {
        if (!e.target.classList.contains('btn-primary')) {
            viewFoodDetails(food.id);
        }
    });
    
    return card;
}

// View Food Details in Modal
function viewFoodDetails(foodId) {
    currentFood = foodData.find(food => food.id === foodId);
    currentQuantity = 1;

    if (currentFood) {
        const rating = '⭐'.repeat(Math.floor(currentFood.rating));
        
        document.getElementById('modalImg').src = currentFood.image;
        document.getElementById('modalName').textContent = currentFood.name;
        document.getElementById('modalDescription').textContent = currentFood.description;
        document.getElementById('modalRating').innerHTML = `${rating} (${currentFood.rating}/5)`;
        document.getElementById('modalReviews').textContent = `${currentFood.reviews} reviews`;
        document.getElementById('modalPrice').textContent = `$${currentFood.price.toFixed(2)}`;
        document.getElementById('quantity').value = 1;

        document.getElementById('foodModal').style.display = 'block';
    }
}

// Close Food Modal
function closeFoodModal() {
    document.getElementById('foodModal').style.display = 'none';
}

// Increase/Decrease Quantity
function increaseQty() {
    document.getElementById('quantity').value = parseInt(document.getElementById('quantity').value) + 1;
}

function decreaseQty() {
    const qty = document.getElementById('quantity');
    if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
    }
}

// Add to Cart
function addToCart() {
    if (!currentFood) return;

    const quantity = parseInt(document.getElementById('quantity').value);
    
    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === currentFood.id);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: currentFood.id,
            name: currentFood.name,
            price: currentFood.price,
            image: currentFood.image,
            quantity: quantity
        });
    }

    // Update cart count
    updateCartCount();

    // Show success message
    showNotification(`${currentFood.name} added to cart!`);

    // Close modal
    closeFoodModal();
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4caf50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Filter Food Items
function filterFood(category) {
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filter and display
    if (category === 'all') {
        displayFoodItems(foodData);
    } else {
        const filtered = foodData.filter(food => food.category === category);
        displayFoodItems(filtered);
    }
}

// Display Special Menu Items
function displaySpecialItems() {
    const specialContainer = document.getElementById('special-items');
    const specialItems = foodData.filter(food => food.isSpecial);
    
    specialContainer.innerHTML = '';
    
    specialItems.forEach(food => {
        const card = document.createElement('div');
        card.className = 'food-card';
        
        const rating = '⭐'.repeat(Math.floor(food.rating));
        const discountPrice = (food.price * (100 - food.specialDiscount) / 100).toFixed(2);
        
        card.innerHTML = `
            <div style="position: relative;">
                <img src="${food.image}" alt="${food.name}" class="food-image">
                <div class="special-badge">Save ${food.specialDiscount}%</div>
            </div>
            <div class="food-info">
                <p class="food-name">${food.name}</p>
                <p class="food-description">${food.description}</p>
                <div class="food-rating">
                    <span class="stars">${rating}</span>
                    <span>(${food.reviews} reviews)</span>
                </div>
                <p class="food-price">
                    <span style="text-decoration: line-through; color: #999; font-size: 0.9rem;">$${food.price.toFixed(2)}</span>
                    <span style="margin-left: 10px;">$${discountPrice}</span>
                </p>
                <button class="btn-primary" onclick="viewFoodDetails(${food.id})">View Details</button>
            </div>
        `;
        
        specialContainer.appendChild(card);
    });
}

// Display Cart Items
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <h3>Your cart is empty</h3>
                <p>Add some delicious items to get started!</p>
                <button class="btn-primary" onclick="showPage('order')">Start Shopping</button>
            </div>
        `;
        document.getElementById('checkout-btn').style.display = 'none';
        return;
    }

    document.getElementById('checkout-btn').style.display = 'block';
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        const itemTotal = (item.price * item.quantity).toFixed(2);

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <p class="cart-item-name">${item.name}</p>
                <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            </div>
            <div class="quantity-selector">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <input type="number" value="${item.quantity}" readonly>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <p style="font-weight: bold; min-width: 80px; text-align: right;">$${itemTotal}</p>
            <button class="qty-btn" onclick="removeFromCart(${item.id})" style="background-color: #f44336; color: white;">✕</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    updateCartSummary();
}

// Update Item Quantity
function updateQuantity(foodId, change) {
    const item = cart.find(item => item.id === foodId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(foodId);
        } else {
            displayCart();
            updateCartCount();
        }
    }
}

// Remove from Cart
function removeFromCart(foodId) {
    cart = cart.filter(item => item.id !== foodId);
    displayCart();
    updateCartCount();
    showNotification('Item removed from cart');
}

// Update Cart Summary
function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;

    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('delivery-fee').textContent = '$' + DELIVERY_FEE.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
}

// Proceed to Checkout
function proceedToCheckout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }

    displayOrderSummary();
    showPage('checkout');
}

// Display Order Summary
function displayOrderSummary() {
    const summaryContainer = document.getElementById('summary-items');
    summaryContainer.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span class="summary-item-name">${item.name}</span>
            <span class="summary-item-qty">x${item.quantity}</span>
            <span class="summary-item-price">$${itemTotal}</span>
        `;
        summaryContainer.appendChild(summaryItem);
    });

    // Update totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;

    document.getElementById('sum-subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('sum-delivery').textContent = '$' + DELIVERY_FEE.toFixed(2);
    document.getElementById('sum-total').textContent = '$' + total.toFixed(2);
}

// Proceed to Payment
function proceedToPayment() {
    const form = document.getElementById('delivery-form');
    if (!form.checkValidity()) {
        showNotification('Please fill all delivery details!');
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;
    document.getElementById('pay-total').textContent = '$' + total.toFixed(2);

    showPage('payment');
}

// Process Payment (using async/await with Promise)
async function processPayment() {
    const form = document.getElementById('payment-form');
    if (!form.checkValidity()) {
        showNotification('Please fill all payment details!');
        return;
    }

    const button = event.target;
    const originalText = button.textContent;
    
    // Disable button and show processing message
    button.disabled = true;
    button.textContent = 'Processing...';

    try {
        // Simulate payment processing with Promise
        const paymentResult = await simulatePayment();

        if (paymentResult.success) {
            // Show confirmation page
            showOrderConfirmation(paymentResult.orderId);
        } else {
            showNotification('Payment failed. Please try again.');
            button.disabled = false;
            button.textContent = originalText;
        }
    } catch (error) {
        showNotification('An error occurred. Please try again.');
        console.error('Payment error:', error);
        button.disabled = false;
        button.textContent = originalText;
    }
}

// Simulate Payment Processing
function simulatePayment() {
    return new Promise((resolve, reject) => {
        // Show processing message
        const processingDiv = document.createElement('div');
        processingDiv.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            z-index: 2000;
            text-align: center;
        `;
        processingDiv.innerHTML = `
            <h2 style="color: #ff6b35; margin-bottom: 20px;">Processing Order...</h2>
            <div style="display: inline-block; width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #ff6b35; border-radius: 50%; animation: spin 1s linear infinite;"></div>
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        `;
        document.body.appendChild(processingDiv);

        // Simulate processing time (3 seconds)
        setTimeout(() => {
            processingDiv.remove();
            
            // Generate order ID
            const orderId = 'FH' + Date.now();
            
            // Resolve promise with success
            resolve({
                success: true,
                orderId: orderId
            });
        }, 3000);
    });
}

// Show Order Confirmation
function showOrderConfirmation(orderId) {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;

    document.getElementById('order-id').textContent = orderId;
    document.getElementById('conf-total').textContent = '$' + total.toFixed(2);

    showPage('confirmation');

    // Clear cart after successful order
    cart = [];
    updateCartCount();
}

// Go Home
function goHome() {
    showPage('home');
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('foodModal');
    if (event.target === modal) {
        closeFoodModal();
    }
});

// Update cart display when viewing cart page
const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.target.id === 'cart' && mutation.target.style.display === 'block') {
            displayCart();
        }
    });
});

observer.observe(document.body, { subtree: true, attributes: true });

// Alternative: Add event listener to show cart page
document.addEventListener('DOMContentLoaded', function() {
    const originalShowPage = showPage;
    showPage = function(pageId) {
        originalShowPage(pageId);
        if (pageId === 'cart') {
            displayCart();
        }
    };
});
