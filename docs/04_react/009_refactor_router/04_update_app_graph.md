# Update App Graph With Nested Route

Now that we have splitting router that load nested route:

```plaintext
app.component.tsx
|-- app.router.tsx
|   |-- app.guard.tsx
|   |-- app.layout.tsx

|   |-- pages/dashboard/dashboard.route.tsx
|   |   |-- pages/dashboard/dashboard.welcome.tsx

|   |-- pages/auth/auth.route.tsx
|   |   |-- pages/auth/login/login.form.tsx
|   |   |-- pages/page.not-found.tsx

```

![app_graph_7](../_images/app.graph_7.png)
