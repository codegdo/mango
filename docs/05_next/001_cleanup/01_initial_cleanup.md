# Perform Initial Cleanup

## Remove Unnecessary Files

Navigate to the "app" directory and remove unnecessary files, leaving only "page.tsx", "layout.tsx." and favicon.ico

## App Router

In Next.js 14, utilize the App Router, which organizes routes based on folder and file structure. Each route is associated with predefined components for layout, page, error, and loading.

```plaintext
app/
|-- login/
|   |-- page.tsx
|-- signup/
|   |-- page.tsx
|-- dashboard/
|   |-- page.tsx

|-- page.tsx
|-- layout.tsx
```

```route
/login
/signup
/dashboard
/
```

By default, layout.tsx and page.tsx are defined as server components. These server components retain the ability to utilize metadata to define page behavior. Additionally, for each route, a client page component is created.

Create a New File home.page.tsx:
Create a new file named home.page.tsx in the "src" directory.

Add the following code to app.component.tsx:

```jsx
'use client';

import { ComponentProps } from './template.layout';

export default function Home(props: ComponentProps) {
  return <>HOME</>;
}
```

Import home.page.tsx to page.tsx:
In your existing page.tsx file, import the Home component:

```jsx
import React from 'react';
import { Metadata } from 'next';
import Home from './home.page';

export const metadata: Metadata = {
  title: 'Home',
  description: '',
};

export default function HomePage() {
  return <Home />;
}
```

Adjust the file paths accordingly based on your project structure. This ensures that the Home component is imported and rendered within the page.tsx file.
