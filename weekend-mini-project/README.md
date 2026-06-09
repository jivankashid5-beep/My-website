# Online Food Ordering System - FoodHub

A fully functional, responsive Online Food Ordering System built with HTML, CSS, and JavaScript.

## Features Implemented ✅

### 1. **Responsive Navigation Bar**
   - Home, Order Foods, Cart, and Special Menu links
   - Mobile-friendly hamburger menu
   - Cart item counter
   - Sticky navigation bar

### 2. **Food Data Management**
   - Array of Objects containing 16 food items
   - Food categories: Burgers, Pizza, Desserts, Beverages
   - Each food item includes: Name, Image, Description, Price, Rating, Reviews
   - Data stored in `data.js` file

### 3. **Dynamic Food Display**
   - JavaScript DOM manipulation to dynamically render food items
   - Food cards with hover effects
   - Filter functionality (All, Burgers, Pizza, Desserts, Beverages)
   - Special menu with discounted items

### 4. **Food Details Modal**
   - Click on any food item to view complete details
   - Product image, name, description, rating, and reviews
   - Quantity selector (increase/decrease)
   - Add to cart functionality

### 5. **Shopping Cart**
   - Add items from food details modal
   - View all cart items with:
     - Product image
     - Product name and price
     - Quantity selector with increase/decrease buttons
     - Individual item total
     - Remove item button
   - Automatic cart count update in navbar
   - Display subtotal, delivery fee, and total amount
   - Update bill automatically when quantity changes

### 6. **Order Checkout**
   - Order Summary page showing:
     - All selected items with quantity and price
     - Subtotal and delivery fee
     - Total amount
   - Delivery information form:
     - Full name, email, phone number
     - Delivery address

### 7. **Payment Gateway Simulation**
   - Payment form with card details:
     - Card holder name
     - Card number
     - Expiry date
     - CVV
   - No real payment processing (simulation only)

### 8. **Async/Await & Promise Implementation**
   - Payment processing uses Promise-based simulation
   - "Processing Order..." message with loading animation
   - 3-second delay to simulate server processing
   - Automatic transition to order confirmation

### 9. **Order Confirmation**
   - Displays "Order Confirmed" message
   - Generates unique Order ID (timestamp-based)
   - Shows total amount
   - Estimated delivery time (30-45 minutes)
   - Order tracking steps
   - Back to Home button to restart shopping

### 10. **Additional Features**
   - **Home Page**: Hero section with call-to-action and features showcase
   - **Special Menu**: Dedicated page showing discounted items with savings badge
   - **Notifications**: Toast notifications for user actions
   - **Responsive Design**: Works on desktop, tablet, and mobile devices
   - **Smooth Animations**: Page transitions, card hover effects, loading spinner
   - **Form Validation**: Ensures all required fields are filled

## Project Structure

```
weekend-mini-project/
├── index.html      # Main HTML file with all page sections
├── style.css       # Complete styling and responsive design
├── script.js       # JavaScript functionality and DOM manipulation
├── data.js         # Food data (Array of Objects) and cart management
└── README.md       # This file
```

## How to Use

1. **Open the Project**
   - Open `index.html` in a web browser

2. **Home Page**
   - View welcome message and features
   - Click "Start Ordering" to browse menu

3. **Order Foods**
   - Browse all food items or filter by category
   - Click "View Details" on any food item
   - Select quantity and click "Add to Cart"
   - Success notification will confirm addition

4. **View Cart**
   - Navigate to Cart from navbar
   - Adjust quantities with +/- buttons
   - Remove items if needed
   - View total with delivery fee
   - Click "Proceed to Checkout"

5. **Checkout**
   - Review order summary
   - Fill in delivery information
   - Click "Proceed to Payment"

6. **Payment**
   - Enter card details (dummy data works)
   - Click "Place Order"
   - Watch the processing animation
   - View order confirmation with Order ID

## JavaScript Concepts Used

✅ **Array of Objects**: Food data stored in array with object properties
✅ **DOM Manipulation**: Dynamic creation and modification of elements
✅ **Events**: Click handlers for navigation and interactions
✅ **Promise**: Used in payment simulation
✅ **Async/Await**: Async function for payment processing
✅ **setTimeout**: Delay in payment processing simulation
✅ **Array Methods**: map(), filter(), find(), reduce()
✅ **Local Variables**: Cart array for managing items
✅ **Functions**: Modular code with specific purposes
✅ **Conditional Logic**: if/else for cart and validation

## Key JavaScript Functions

- `displayFoodItems()` - Render food items dynamically
- `filterFood()` - Filter items by category
- `viewFoodDetails()` - Show food details in modal
- `addToCart()` - Add items to shopping cart
- `displayCart()` - Render cart items
- `updateQuantity()` - Modify item quantities
- `processPayment()` - Async payment simulation
- `showOrderConfirmation()` - Display order success
- `showPage()` - Page navigation and display

## Responsive Breakpoints

- **Desktop**: Full layout with all features
- **Tablet (≤768px)**: Optimized grid and navigation
- **Mobile (≤480px)**: Single column layout, compact elements

## Sample Food Data

The system includes 16 pre-loaded food items:
- 4 Burgers (Classic, Double Bacon, Mushroom Swiss, Spicy Jalapeño)
- 4 Pizzas (Margherita, Pepperoni, Veggie, Meat Lovers)
- 4 Desserts (Chocolate Cake, Cheesecake, Brownie Sundae, Tiramisu)
- 4 Beverages (Coke, Orange Juice, Iced Coffee, Mango Smoothie)

## Styling Highlights

- Modern color scheme (Orange primary, White backgrounds)
- Gradient effects on hero section
- Smooth transitions and hover animations
- Card elevation effects on hover
- Mobile-first responsive design
- Accessibility-friendly forms

## Future Enhancement Ideas

1. Add user authentication/login system
2. Integrate real payment gateway (Stripe, PayPal)
3. Add order tracking in real-time
4. Implement user reviews and ratings
5. Add search functionality
6. Implement wishlist feature
7. Add coupon/promo code system
8. Store orders in local storage or database
9. Add push notifications
10. Implement multiple language support

## Browser Compatibility

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All images use placeholder images (via.placeholder.com)
- Payment gateway is simulated - no real transactions
- Order IDs are generated using timestamps
- Cart data persists during the session but resets on page reload
- Responsive design works on all screen sizes

## Assignment Completion Checklist

- ✅ Responsive HTML structure with navbar
- ✅ Array of Objects for food data
- ✅ Dynamic DOM manipulation
- ✅ Food items with all required properties
- ✅ Click to view food details
- ✅ Add to Cart functionality
- ✅ Cart page with items, quantity, price, total
- ✅ Increase/decrease quantity with auto update
- ✅ Order Summary page
- ✅ Payment Gateway Simulation
- ✅ Promise and Async/Await implementation
- ✅ "Processing Order..." message
- ✅ Order confirmation with Order ID
- ✅ All core JavaScript concepts used
- ✅ Responsive design
- ✅ Additional features (Special Menu, Notifications, Animations)

---

**Happy Coding!** 🎉
