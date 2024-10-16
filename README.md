# Cart Management System

A simple Cart Management System built with **React** and **Redux Toolkit**, featuring product fetching from the [Fake Store API](https://fakestoreapi.com/products). This project includes adding items to the cart, updating quantities, removing items.

## Features

- **View Products**: Fetch and display a list of products from the Fake Store API.
- **Add to Cart**: Allow users to add products to their cart from the product list.
- **View Cart**: Display cart items, including product title, price, quantity, and total cost.
- **Remove Items from Cart**: Remove specific items from the cart.
- **Update Quantity**: Increase or decrease product quantity in the cart.
- **Product Sorting**: Users can sort products by price, name, or category

(optional feature).

## Tech Stack

- **React**: Frontend JavaScript library for building the user interface.
- **Redux Toolkit**: State management tool for managing the cart state.
- **Tailwind CSS**: Utility-first CSS framework for styling the app.
- **Fake Store API**: Used for fetching product data.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Soab42/algostar
   ```

2. Navigate to the project folder:

```bash
 cd cart-management-system
```

3. Install dependencies:

```bash
 npm install
```

4. Start the development server:

```bash
 npm start
```

The app will be available at `http://localhost:5173`.

## Usage

### Viewing Products

- On the homepage, you'll see a list of products fetched from the Fake Store API.
- Each product will display its title, price, and an "Add to Cart" button.

### Adding Items to Cart

- To add a product to the cart, click the "Add to Cart" button.
- The cart icon in the navbar will update with the current number of items.

### Viewing the Cart

- Click on the cart icon in the navbar to view your cart.
- You'll see a list of products with their title, price, quantity, and total price.

### Updating Quantity

- In the cart, you can increase or decrease the quantity of any item using the "+" and "-" buttons.

### Removing Items

- You can remove an item from the cart by clicking the "Remove" button next to the product.

### Persisting Cart Data

- The cart's state is automatically saved in `localStorage`. This means that even if you refresh the page, the items in your cart will remain until you remove them.

## Demo

You can see a live demo of the project [here](https://algostar-rho.vercel.app/).

## Additional Features

- **Sorting**: You can sort the product list by price, name, or category for an improved shopping experience.
- **Filtering**: You can filter the product category.
- **Search**: You can the product list by description, name, or category.

Thanks You!
