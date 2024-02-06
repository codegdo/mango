# Clean Up App Guard

## Update AppGuard

Navigate to the app.guard.tsx file and update the AppGuard function as follows:

```tsx
export function AppGuard() {
  const isAuthenticated = isAuth;

  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
}
```

## Update AuthGuard

In the same app.guard.tsx file, update the AuthGuard function as follows:

```tsx
export function AuthGuard() {
  const isAuthenticated = isAuth;

  return !isAuthenticated ? <Outlet /> : <Navigate to='/dashboard' />;
}
```

These updates simplify the AppGuard and AuthGuard functions by directly returning the appropriate JSX elements based on the user's authentication status.
