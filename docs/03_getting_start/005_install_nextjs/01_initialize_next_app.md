# Initialize "nest" Application

Open your terminal.

Navigate to the "apps" application folder:

```bash
cd apps
```

Run npm init to initialize a new Nest.js project:

```bash
npx create-next-app@latest
```

Choose the following options when prompted:

```terminal
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

Change directory to the newly created "next" folder:

```bash
cd next
```

IMPORTANT: Remove the existing .git folder to clear any previous Git history:

```bash
rm -rf .git
```

Go back to the root folder of your project:

```bash
cd ../../
```

Initialize a new Git repository:

```bash
git init
```

Now, you have successfully initialized a new Nest.js application within the "apps" folder, removed the previous Git history, and reinitialized a new Git repository for your Nest.js project. Adjust the instructions as needed based on your specific project requirements.
