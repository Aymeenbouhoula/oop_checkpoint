class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    toString() {
        return `Product ID: ${this.id}, Name: ${this.name}, Price: $${this.price.toFixed(2)}`;
    }
}

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    totalPrice() {
        return this.product.price * this.quantity;
    }

    toString() {
        return `${this.product.name} (x${this.quantity}) - Total: $${this.totalPrice().toFixed(2)}`;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push(new ShoppingCartItem(product, quantity));
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.totalPrice(), 0);
    }

    displayCart() {
        if (this.items.length === 0) {
            console.log("Your cart is empty.");
            return;
        }
        this.items.forEach(item => console.log(item.toString()));
        console.log(`Total: $${this.getTotal().toFixed(2)}`);
    }
}

// Testing the implementation
const product1 = new Product(1, "Apple", 0.99);
const product2 = new Product(2, "Banana", 0.59);
const product3 = new Product(3, "Orange", 0.79);

const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 3);  // 3 Apples
cart.addItem(product2, 5);  // 5 Bananas
cart.addItem(product3, 2);  // 2 Oranges

// Display the cart
console.log("Cart items after adding:");
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2);  // Remove Bananas

// Display the cart after removal
console.log("\nCart items after removing Bananas:");
cart.displayCart();
