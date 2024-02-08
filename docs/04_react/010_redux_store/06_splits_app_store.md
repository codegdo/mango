# Splits App Store

To organize and maintain our Redux store logic more effectively, we'll split the store into multiple sections. Here's how the structure of our state will look:

```plaintext
configure.store.ts
|-- app.store.ts
|   |-- app.session.ts
```

The root state will have the following structure:

```ts
state = {
  session: {
    isAuthenticated: false,
  },
};
```

### Create `app.store.ts`

In the `stores` folder, create a new file named `app.store.ts`. This file will contain all the states of our application.

```ts
import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

interface SessionState {
  isAuthenticated: boolean;
}

// Define initial app state
export interface AppState {
  session: {
    isAuthenticated: boolean;
  };
}

// Define actions
const loginSuccess = createAction<{ session: SessionState }>('login/SUCCESS');

export const logoutSuccess = createAction<{ session: SessionState }>(
  'logout/SUCCESS'
);

const initialState: AppState = {
  session: {
    isAuthenticated: false,
  },
};

// Define app reducer
export const appReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(
      loginSuccess,
      (state, action: PayloadAction<{ session: SessionState }>) => {
        return { ...state, session: { ...action.payload.session } };
      }
    )
    .addCase(
      logoutSuccess,
      (state, action: PayloadAction<{ session: SessionState }>) => {
        return { ...state, session: { ...action.payload.session } };
      }
    );
});

// Actions
export const actions = {
  loginSuccess,
  logoutSuccess,
};
```
