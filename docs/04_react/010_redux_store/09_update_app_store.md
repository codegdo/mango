# Upldate App Store

### Combine Reducers in `app.store.ts`

In the stores folder, create a new file named `app.store.ts`. Import `sessionReducer` and combine it with other reducers using `combineReducers` from `@reduxjs/toolkit`.

```ts
export const combinedReducers = combineReducers({
  session: sessionReducer,
});
```

### Export Actions and Combined Reducers

In `app.store.ts`, export all actions and the combined reducers.

```ts
export const actions = {
  loginSuccess,
  logoutSuccess,
  updateSession,
};
```
