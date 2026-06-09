// Food Data - Array of Objects
const foodData = [
    // Burgers
    {
        id: 1,
        name: "Classic Cheeseburger",
        category: "burger",
        image: "https://via.placeholder.com/300x200/ff6b35/ffffff?text=Cheeseburger",
        description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce",
        price: 8.99,
        rating: 4.5,
        reviews: 245,
        isSpecial: false,
        specialDiscount: 0
    },
    {
        id: 2,
        name: "Double Bacon Burger",
        category: "burger",
        image: "https://via.placeholder.com/300x200/ff6b35/ffffff?text=Bacon+Burger",
        description: "Premium burger with double bacon, cheddar cheese, and crispy onions",
        price: 10.99,
        rating: 4.7,
        reviews: 312,
        isSpecial: true,
        specialDiscount: 20
    },
    {
        id: 3,
        name: "Mushroom Swiss Burger",
        category: "burger",
        image: "https://via.placeholder.com/300x200/ff6b35/ffffff?text=Mushroom+Burger",
        description: "Savory burger with sautéed mushrooms and melted Swiss cheese",
        price: 9.99,
        rating: 4.4,
        reviews: 198,
        isSpecial: false,
        specialDiscount: 0
    },
    {
        id: 4,
        name: "Spicy Jalapeño Burger",
        category: "burger",
        image: "https://via.placeholder.com/300x200/ff6b35/ffffff?text=Jalapeno+Burger",
        description: "Hot and spicy burger with jalapeños, pepper jack cheese, and chipotle mayo",
        price: 9.49,
        rating: 4.3,
        reviews: 167,
        isSpecial: true,
        specialDiscount: 15
    },

    // Pizza
    {
        id: 5,
        name: "Margherita Pizza",
        category: "pizza",
        image: "https://via.placeholder.com/300x200/f7931e/ffffff?text=Margherita",
        description: "Classic pizza with tomato sauce, mozzarella, and fresh basil",
        price: 12.99,
        rating: 4.6,
        reviews: 289,
        isSpecial: false,
        specialDiscount: 0
    },
    {
        id: 6,
        name: "Pepperoni Pizza",
        category: "pizza",
        image: "https://via.placeholder.com/300x200/f7931e/ffffff?text=Pepperoni",
        description: "Traditional pizza loaded with pepperoni and mozzarella cheese",
        price: 13.99,
        rating: 4.8,
        reviews: 456,
        isSpecial: false,
        specialDiscount: 0
    },
    {
        id: 7,
        name: "Deluxe Veggie Pizza",
        category: "pizza",
        image: "https://via.placeholder.com/300x200/f7931e/ffffff?text=Veggie+Pizza",
        description: "Loaded with bell peppers, mushrooms, olives, onions, and tomatoes",
        price: 14.99,
        rating: 4.5,
        reviews: 234,
        isSpecial: true,
        specialDiscount: 25
    },
    {
        id: 8,
        name: "Meat Lovers Pizza",
        category: "pizza",
        image: "https://via.placeholder.com/300x200/f7931e/ffffff?text=Meat+Pizza",
        description: "Packed with pepperoni, sausage, bacon, and ham",
        price: 15.99,
        rating: 4.7,
        reviews: 378,
        isSpecial: false,
        specialDiscount: 0
    },

    // Desserts
    {
        id: 9,
        name: "Chocolate Cake",
        category: "dessert",
        image: "https://via.placeholder.com/300x200/8B4513/ffffff?text=Chocolate+Cake",
        description: "Rich and moist chocolate cake with chocolate frosting",
        price: 5.99,
        rating: 4.9,
        reviews: 512,
        isSpecial: false,
        specialDiscount: 0
    },
    {
        id: 10,
        name: "Strawberry Cheesecake",
        category: "dessert",
        image: "https://via.placeholder.com/300x200/8B4513/ffffff?text=Cheesecake",
        description: "Creamy cheesecake with fresh strawberry topping",
        price: 6.99,
        rating: 4.8,
        reviews: 389,
        isSpecial: true,
        specialDiscount: 30
    },
    {
        id: 11,
        name: "Brownie Sundae",
        category: "dessert",
        image: "https://via.placeholder.com/300x200/8B4513/ffffff?text=Brownie",
        description: "Warm brownie with vanilla ice cream and chocolate sauce",
        price: 4.99,
        rating: 4.6,
        reviews: 276,
        isSpecial: false,
        specialDiscount: 0
    },
    {
        id: 12,
        name: "Tiramisu",
        category: "dessert",
        image: "https://via.placeholder.com/300x200/8B4513/ffffff?text=Tiramisu",
        description: "Traditional Italian tiramisu with coffee and mascarpone",
        price: 5.49,
        rating: 4.7,
        reviews: 203,
        isSpecial: false,
        specialDiscount: 0
    },

    // Beverages
    {
        id: 13,
        name: "Coca Cola",
        category: "beverage",
        image: "https://via.placeholder.com/300x200/dc143c/ffffff?text=Coca+Cola",
        description: "Refreshing cold cola drink",
        price: 2.49,
        rating: 4.5,
        reviews: 1200,
        isSpecial: false,
        specialDiscount: 0
    },
    {
        id: 14,
        name: "Fresh Orange Juice",
        category: "beverage",
        image: "https://via.placeholder.com/300x200/ffa500/ffffff?text=Orange+Juice",
        description: "Freshly squeezed orange juice",
        price: 3.99,
        rating: 4.7,
        reviews: 567,
        isSpecial: true,
        specialDiscount: 10
    },
    {
        id: 15,
        name: "Iced Coffee",
        category: "beverage",
        image: "https://via.placeholder.com/300x200/8B4513/ffffff?text=Iced+Coffee",
        description: "Cold brew coffee with ice and cream",
        price: 3.49,
        rating: 4.6,
        reviews: 434,
        isSpecial: false,
        specialDiscount: 0
    },
    {
        id: 16,
        name: "Mango Smoothie",
        category: "beverage",
        image: "https://via.placeholder.com/300x200/ffd700/ffffff?text=Mango+Smoothie",
        description: "Creamy mango smoothie with yogurt",
        price: 4.49,
        rating: 4.8,
        reviews: 345,
        isSpecial: false,
        specialDiscount: 0
    }
];

// Cart Array - will store items added by user
let cart = [];

// Delivery Fee
const DELIVERY_FEE = 3.00;
