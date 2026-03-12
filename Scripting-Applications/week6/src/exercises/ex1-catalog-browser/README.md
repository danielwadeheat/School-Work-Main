# Week 6 - Exercise 1: Catalog Browser

## Overview
This exercise implements a Catalog Browser that fetches and displays a list of products from a JSON file. It includes features such as a search box, loading states, error handling, and the ability to display an empty state when no products match the search criteria.

## Features
- **Product Listing**: Displays a list of products fetched from `data/catalog.json`.
- **Search Functionality**: Allows users to filter products by name.
- **Loading State**: Shows a loading indicator while data is being fetched.
- **Error Handling**: Displays an error message if there is an issue fetching the data.
- **Empty State**: Informs users when no products match the search criteria.

## Setup Instructions
1. **Clone the Repository**: 
   ```bash
   git clone <repository-url>
   cd week6-react-exercises
   ```

2. **Install Dependencies**: 
   ```bash
   npm install
   ```

3. **Run the Application**: 
   ```bash
   npm start
   ```

4. **Access the Catalog Browser**: Open your browser and navigate to `http://localhost:3000/ex1-catalog-browser`.

## File Structure
- `CatalogBrowser.jsx`: Main component for fetching and displaying products.
- `ProductCard.jsx`: Component for rendering individual product details.
- `styles.css`: Styles specific to the Catalog Browser exercise.
- `data/catalog.json`: Contains the product data used in this exercise.

## Usage
- Navigate to the Catalog Browser section of the application.
- Use the search box to filter products by name.
- Observe loading indicators and error messages as applicable.

## Additional Notes
Ensure that the JSON data in `data/catalog.json` is correctly formatted and contains the necessary fields (`id`, `name`, `price`, `category`) for the application to function properly.