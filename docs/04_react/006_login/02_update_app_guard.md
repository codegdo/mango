# Update App Guard

Navigate to app.guard.tsx

```tsx
import { Outlet } from 'react-router-dom';

export function Guard() {
  return <Outlet />;
}
```

Enhance the Guard component by adding an isAuthenticated boolean. This boolean will later be replaced with a session.isAuthenticated implementation in the store. In the useEffect, check if !isAuthenticated and redirect to '/login':

```tsx
import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export function Guard() {
  const isAuthenticated = false;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }

    // Cleanup function to prevent navigation after component unmounts
    return () => {
      // Any cleanup code if needed
    };
  }, [isAuthenticated, navigate]);

  return <Outlet />;
}
```

These changes introduce a placeholder isAuthenticated boolean, and the useEffect now checks this boolean for redirection to '/login'. Adjust the code further based on your session management implementation.
