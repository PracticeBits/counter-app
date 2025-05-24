# Set up the Redux toolkit project

- Install `@reduxjs/toolkit` and `react-redux` npm dependencies
- Set up store.ts
  - File where the reducer is registered.
- Set up the slice - this is nothing the states and actions.
- Wrap the main file where we have the components listed with

  - check the `Provider store = {store}`

  ```JavaScript
  import { StrictMode } from "react";
  import { createRoot } from "react-dom/client";
  import "./index.css";
  import App from "./App.tsx";
  import { Provider } from "react-redux";
  import { store } from "./state/store.ts";


    <StrictMode>
    <Provider store={store}>
    <App />
    createRoot(document.getElementById("root")!).render(
    </Provider>
    </StrictMode>
    );
  ```

---
