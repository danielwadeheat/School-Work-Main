# Exercise 2: useFetchJSON Hook

## Overview
This exercise focuses on creating a custom React hook called `useFetchJSON` that simplifies the process of fetching JSON data from an API. The hook will handle loading states, error handling, and data retrieval, making it easier to manage asynchronous data fetching in React components.

## Features
- **Custom Hook**: `useFetchJSON` that abstracts the logic for fetching JSON data.
- **Loading State**: Displays a loading indicator while data is being fetched.
- **Error Handling**: Manages error states and displays appropriate messages when fetching fails.
- **Example Component**: An example component (`ExampleFetchComponent`) that demonstrates how to use the `useFetchJSON` hook.

## Setup Instructions
1. **Install Dependencies**: Ensure you have the necessary dependencies installed. You can do this by running:
   ```
   npm install
   ```

2. **Using the Hook**: Import the `useFetchJSON` hook in your component:
   ```jsx
   import useFetchJSON from '../hooks/useFetchJSON';
   ```

3. **Fetch Data**: Call the hook within your component to fetch data:
   ```jsx
   const { data, loading, error } = useFetchJSON('https://api.example.com/data');
   ```

4. **Render States**: Use the `loading`, `error`, and `data` states to render your component accordingly:
   ```jsx
   if (loading) return <Loader />;
   if (error) return <ErrorMessage message={error.message} />;
   return <div>{JSON.stringify(data)}</div>;
   ```

## Example Component
Refer to `ExampleFetchComponent.jsx` for a complete implementation of how to use the `useFetchJSON` hook in a functional component.

## Additional Notes
- Ensure that your API endpoint is correct and accessible.
- Customize the loading and error components as needed to fit your application's design.

## License
This project is licensed under the MIT License.