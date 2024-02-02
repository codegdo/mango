# Add Types

1. **Navigate to the 'src' Directory:**

   - Open your terminal.
   - Change to the 'src' directory using the `cd` command:
     ```bash
     cd path/to/your/project/src
     ```

2. **Create 'types' Folder:**

   - Inside the 'src' directory, create a new folder named 'types':
     ```bash
     mkdir types
     ```

3. **Create 'index.ts' and 'app.type.ts' Files:**

   - Inside the 'types' folder, create two files: 'index.ts' and 'app.type.ts':
     ```bash
     touch types/index.ts types/app.type.ts
     ```

4. **Define 'ContextProps' Interface in 'app.type.ts':**

   - Open 'app.type.ts' and define the 'ContextProps' interface:
     ```typescript
     // src/types/app.type.ts
     export interface ContextProps {
       module: string;
       view?: string;
       object?: string;
       action?: string[];
     }
     ```

5. **Export 'app.type.ts' in 'index.ts':**

   - Open 'index.ts' inside the 'types' folder and export the 'ContextProps' interface:
     ```typescript
     // src/types/index.ts
     export * from './app.type';
     ```

6. **Enhance Project Organization:**
   - Creating a 'types' folder helps abstract project types, enhancing organization as the project grows.
   - This step sets the groundwork for a clean and organized project structure.

Adjust the file paths and names as necessary for your project structure. This addition improves code organization by separating types into a dedicated 'types' folder.
