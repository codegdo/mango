# Add AuthGuard

In the `app.guard.tsx` file, add the `AuthGuard` component. Utilize `AuthGuard` to redirect the user from the authentication route to the dashboard when the user is authenticated.

```tsx
export function AuthGuard() {
  const isAuthenticated = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/welcome');
    }

    // Cleanup function to prevent navigation after component unmounts
    return () => {
      // Any cleanup code if needed
    };
  }, [isAuthenticated, navigate]);

  return <Outlet />;
}
```

Navigate to the app.router.tsx file and wrap the authentication route with the AuthGuard component. Additionally, consider renaming the Guard component to AppGuard for better clarity.

This structure ensures that the AuthGuard is applied to the authentication route, providing redirection logic based on the user's authentication status.
