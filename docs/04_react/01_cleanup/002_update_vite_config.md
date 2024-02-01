Locate the vite.config.ts file in the root directory of your Vite project.

Open the vite.config.ts file for editing.

Update file add server option with port: 3000 and add resolve options with alias:'@': path.resolve(\_\_dirname, './src'):

```javascript
import { ConfigEnv, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd(), '');

  console.log('Port:', env.PORT);

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
```

Save the changes to the vite.config.ts file.

To fix a typing complaint by installing the @types/node package. Here's the correct command:

```bash
npm install --save-dev @types/node
```

This command installs the TypeScript type declarations for Node.js, which can help resolve typing issues in your project. Make sure to run this command in your project's root directory.
