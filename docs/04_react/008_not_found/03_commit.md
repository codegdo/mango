# Summary of Changes

## 1. Add 'Not Found' Page

### 1.2. Create 'page.not-found.tsx':

- New file `page.not-found.tsx` in 'pages' folder.
- Implemented `NotFound` functional component.
- Exported `NotFound` as the default export.

### 1.3. Import to `auth.route.tsx`:

- Imported `lazy` and `useRoutes` from 'react'.
- Imported `Layout` from '../../app.layout'.
- Lazily imported `Login` and `NotFound`.
- Modified `AuthRoute` to include a route for `'*'`, rendering `NotFound` inside `Layout`.

### 1.4. Import to `dashboard.route.tsx`:

- Repeated imports and modifications for `DashboardRoute`.

### 1.5. Important Note:

- Emphasized using `export default` for lazy-loaded components.

Enhancements: Added 'Not Found' page dynamically loaded using lazy loading for authentication and dashboard routes.
