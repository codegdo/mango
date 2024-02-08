# Installing Redux DevTools Extension

Redux DevTools Extension is a browser extension that allows you to inspect and debug your Redux state and actions in real-time. Here's how to install it:

## Step 1: Install Extension

1. **Chrome:** Go to the [Chrome Web Store](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) and search for "Redux DevTools". Click on "Add to Chrome" to install the extension.

2. **Firefox:** Go to the [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/redux-devtools/) website and search for "Redux DevTools". Click on "Add to Firefox" to install the extension.

3. **Edge:** Go to the [Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/redux-devtools/nihefkbdcfbmoofkjfkhjnikpdhbfbpc) website and search for "Redux DevTools". Click on "Get" to install the extension.

## Step 2: Enable Extension

Once installed, the Redux DevTools Extension should appear as a new icon in your browser's toolbar.

## Step 3: Configure Redux Store

To enable the Redux DevTools Extension for your Redux store, you need to add it as an enhancer when configuring your store.

```typescript
// store/configure.store.ts
import { configureStore, createReducer, createAction } from '@reduxjs/toolkit';

// Define actions
const updateState = createAction<{ isAuthenticated: boolean }>('updateState');

// Define initial state
const initialState = { isAuthenticated: false };

// Create reducer
const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(updateState, (state, action) => {
    return { ...state, isAuthenticated: action.payload.isAuthenticated };
  });
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  // Add any additional middleware or enhancers here
});
```

In this example, we use the enhancers option to add the Redux DevTools Extension. This ensures that the extension is only enabled in development mode and won't affect your production build.

## Step 4: Open DevTools

Now, when you run your React application in development mode and open the browser's DevTools (typically by pressing F12 or right-clicking and selecting "Inspect"), you should see a new "Redux" tab. Clicking on this tab will open the Redux DevTools Extension, allowing you to inspect and debug your Redux state and actions.

That's it! You've successfully installed and configured the Redux DevTools Extension for your Redux store.
