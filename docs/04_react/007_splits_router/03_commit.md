# Summary of Changes

## 1. Auth and Dashboard Routes

### Auth Route (`auth.route.tsx`)

- Created a new file in the `auth` folder named `auth.route.tsx`.
- Defined a route for the `/login` path, associating it with the `Login` component.
- Added a catch-all route (`'*'`) for unmatched paths, displaying a "NOT FOUND" message.

### Dashboard Route (`dashboard.route.tsx`)

- Created a new file in the `dashboard` folder named `dashboard.route.tsx`.
- Defined a route for the `/` path, associating it with the `Welcome` component.

## 2. Update App Router (`app.router.tsx`)

- Removed import statements for the `Login` and `Welcome` components.
- Imported the `AuthRoute` and `DashboardRoute` components.
- Modified the `routes` array to include the new nested routes:
  - The route with `path: 'dashboard/*'` is nested under the `<Guard />` component, using the `DashboardRoute`.
  - The catch-all route with `path: '*'` is associated with the `<AuthRoute />` component.
- Used `createBrowserRouter` to create the router with the updated route configuration.

## 3. Overall Purpose

- The changes aim to refactor the router into multiple nested routes, segregating authentication-related routes under `AuthRoute` and dashboard-related routes under `DashboardRoute`.
- Improves code organization for better manageability and understanding of the routing structure.
- The modifications in the app router reflect the updated route components and their associations, with a more modular and nested structure.
