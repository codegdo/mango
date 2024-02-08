# Splits Session Store

### Create `store.session.ts`

In the stores folder, create a new file named `session.store.ts`. This file will contain the session state logic.

```ts
import { PayloadAction, createAction, createReducer } from '@reduxjs/toolkit';

// Define initial state
export interface SessionState {
  isAuthenticated: boolean;
}

// Define actions
export const updateSession = createAction<{ isAuthenticated: boolean }>(
  'session/UPDATE'
);

export const sessionState: SessionState = {
  isAuthenticated: false,
};

// Define session reducer
export const sessionReducer = createReducer(sessionState, (builder) => {
  builder.addCase(
    updateSession,
    (state, action: PayloadAction<{ isAuthenticated: boolean }>) => {
      return { ...state, isAuthenticated: action.payload.isAuthenticated };
    }
  );
});
```
