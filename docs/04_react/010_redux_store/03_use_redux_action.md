# Use Redux Actions

1. **Create a Hooks Folder:**
   Navigate to the `src` folder in your project directory. Inside the `src` folder, create a new folder named `hooks`.

2. **Create a Hook File:**
   Inside the `hooks` folder, create a new TypeScript file called `use-action.hook.ts`.

```ts
// hooks/use-action.hook.ts
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '@/stores';

// Custom hook to bind action creators to dispatch
export const useActions = (): typeof actions => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
```

This hook `useActions` simplifies the process of accessing and dispatching Redux actions within your React components. It binds action creators to the dispatch function provided by Redux, allowing you to easily manage state updates in your application.

## Using the useActions Hook

1. **Import the Hook:**
   In any React component where you want to use Redux actions, import the `useActions` hook.

```typescript
import { useActions } from '../hooks/use-action.hook';
```

### Invoke the Hook

Inside your component, invoke the useActions hook to access the bound action creators.

```ts
const actions = useActions();
```

### Dispatch Actions

You can now call the action creators directly from the actions object obtained from the hook and dispatch them.

```ts
actions.updateSession();
```

### Example Usage

Here's an example of how you can use the useActions hook in a React functional component:

```ts
import React from 'react';
import { useActions } from '../hooks/use-action.hook';

const MyComponent: React.FC = () => {
  const actions = useActions();

  const handleLogin = () => {
    actions.updateSession({ isAthenticated: true });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default MyComponent;
```

In this example, we import the `useActions` hook, which provides access to the Redux action creators. We then invoke the hook to get the actions object and call the `loginUser` action creator when the login button is clicked.
