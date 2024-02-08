# Setting Up Redux in Your React Application

## Step 1: Install Redux Packages

To begin, you'll need to install the necessary Redux packages. These include:

- **redux**: The core Redux library.
- **react-redux**: Official React bindings for Redux.
- **@reduxjs/toolkit**: A package that simplifies Redux setup and reduces boilerplate code.

Navigate to your project directory in the terminal and run the following command:

```bash
npm install redux react-redux @reduxjs/toolkit
```

## Step 2: Create a Redux Store

Next, you'll create a Redux store where your application state will be managed. Typically, you'll create the store in a separate file, such as `stores/configure.store.ts`.

In this file, you'll define the initial state of your application and create reducers to handle state updates. Here's an example using Redux Toolkit:

```ts
// store/configure.store.ts
import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

// Define actions
const updateState = createAction<{ isAuthenticated: boolean }>('updateState');

// Define initial state
const initialState = { isAuthenticated: false };

// Create reducer
const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateState, (state, action) => {
    return { ...state, isAuthenticated: action.payload.isAuthenticated };
  });
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  // Add any additional middleware or enhancers here
});
```

This code sets up a Redux store with an initial state and reducers to handle state updates.

## Step 4: Connect Store

In your main file, typically `main.tsx`, you'll connect the Redux store to your React application using the Provider component from `react-redux`.

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './stores';
import { router } from './app.router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
```

This code wraps your entire application with the Provider component, which makes the Redux store available to all components.

Following these steps will enable Redux in your React application, allowing you to manage state effectively.
