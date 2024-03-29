# Add WebPage Guard

Navigate to app.guard.tsx and export a function named WebPageGuard. This guard is responsible for handling the scenario where a page is not found when the user is authenticated.

```tsx
export function WebPageGuard({ renderNotFound }: WebPageProps) {
  const { isAuthenticated } = useOutletContext<ContextOutletProps>();
  return !isAuthenticated ? <Outlet /> : renderNotFound();
}
```

We define the WebPageGuard function.
The function takes an object as its props, which includes a renderNotFound function that returns a JSX element. This function will be used to render the not-found page.
Inside the WebPageGuard function, we check if the user is authenticated.
If the user is not authenticated, we render the Outlet, allowing the routing to proceed as usual.
If the user is authenticated, we call the renderNotFound function to render the not-found page.
