# Summary of Changes

## 1. Update in App Router Pattern

In this update to `app.router.tsx`, the route patterns have been modified from 'dashboard/_' and '/_' to 'dashboard' and '\*'. This adjustment eliminates the necessity to import `page.not-found.tsx` for each route, providing a more efficient approach to handling not-found scenarios. The refactored code streamlines the routing pattern, improving maintainability and readability.

## 2. Refactor Nested Route

The existing structure highlighted a lack of organization in `app.layout.tsx`. To enhance organization and flow, `app.layout.tsx` has been moved to `app.router.tsx`, where it can be passed as a prop callback to children routes. This refactor simplifies management in `app.router.tsx` and improves overall code flow. Consequently, modifications were made to `app.route.tsx`, `DashboardRoute`, and `AuthRoute` to accommodate this change. The introduction of an `IProps` interface for `DashboardRoute` and `AuthRoute` further improves code clarity. These changes collectively optimize the code structure, centralizing layout management and enhancing overall maintainability.

## 3. Add Redirect Index To Dashboard

In this update to `app.router.tsx`, a redirect route has been added to enhance navigation. When accessing the index route ('/'), users will now be automatically redirected to the dashboard route, serving as the entry page after login. This improvement streamlines the user experience by providing a seamless redirection to the desired destination.
