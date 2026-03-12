# Week 6 React Exercises

This project contains two exercises focused on React development, specifically utilizing hooks and routing. Below are the details for each exercise and setup instructions.

## Project Setup

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd week6-react-exercises
   ```

2. **Install dependencies**:
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Exercises Overview

### Exercise 1: Catalog Browser

- **Description**: This exercise implements a catalog browser that fetches product data from a JSON file and displays it in a user-friendly format. It includes features such as a search box and handles loading, empty, and error states.
- **Components**:
  - `CatalogBrowser.jsx`: Main component for displaying the product catalog.
  - `ProductCard.jsx`: Component for rendering individual product details.
- **Styles**: Located in `src/exercises/ex1-catalog-browser/styles.css`.
- **Documentation**: More details can be found in `src/exercises/ex1-catalog-browser/README.md`.

### Exercise 2: useFetchJSON Hook

- **Description**: This exercise demonstrates the use of a custom hook, `useFetchJSON`, which abstracts the logic for fetching JSON data. It includes error handling and loading states.
- **Components**:
  - `ExampleFetchComponent.jsx`: Example component that utilizes the `useFetchJSON` hook.
- **Styles**: Located in `src/exercises/ex2-useFetchJSON/styles.css`.
- **Documentation**: More details can be found in `src/exercises/ex2-useFetchJSON/README.md`.

## Additional Information

- **Dependencies**: This project uses React, React Router, and other necessary libraries. Check `package.json` for the complete list.
- **Contributions**: Feel free to contribute by submitting issues or pull requests.

Happy coding!