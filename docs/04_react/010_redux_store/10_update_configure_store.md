# Update `configure.store.ts`

In `configure.store.ts`, remove the `initialState`, `updateState`, and update the `rootReducer` to combine `appReducer` with `combinedReducers`.

```ts
import { UnknownAction, configureStore } from '@reduxjs/toolkit';
import { AppState, appReducer, combinedReducers } from './app.store';

// Combine appReducer with combinedReducer
const rootReducer = (state: AppState | undefined, action: UnknownAction) =>
  combinedReducers(appReducer(state, action), action);

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
```

With these steps, you've successfully split your Redux store into multiple sections for better organization and maintenance.
