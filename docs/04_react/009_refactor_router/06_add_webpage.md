# Add WebPage

In the `pages` folder, add a new page called `page.webpage.tsx`. This page will handle generic content, serving the purpose of providing information about the website.

```tsx
import { Link } from 'react-router-dom';

function WebPage() {
  return (
    <div>
      <p>WebPage</p>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  );
}

export default WebPage;
```

This WebPage component renders a simple webpage with a paragraph and links to the login and signup pages. You can customize the content and links based on your specific needs.

Make sure to import and use this WebPage component in your routes or layouts as necessary.
