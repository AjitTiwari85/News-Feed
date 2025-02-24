import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Importing the main App component
import { Provider } from "react-redux"; // Redux Provider
import store from "./redux/store.js"; // Import Redux store
import "./index.css"; // Global CSS file

// Get the root element from the DOM
const root = document.getElementById("root");

// Create a React root and render the App component inside Redux Provider
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
