# Generate Visual Graph for Project Dependencies

## Install Graphviz

### Mac OSX:

```bash
brew install graphviz
```

### Window:

```bash
choco install graphviz
```

### Add 'madge' Package Globally

```bash
npm install -g madge
```

## Generate First Graph

In the terminal, run the following command:

```bash
npx madge src/app.component.tsx --image src/app.graph.png --warning
```

This command generates a visual graph of project dependencies using 'madge' and saves it as an image file named 'app.graph.png' in the 'src' directory.

## Generated Graph Structure:

```plaintext
app.component.tsx
|-- app.router.tsx
|   |-- pages/dashboard/dashboard.welcome.tsx
```

![app_graph_1](../_images/app.graph_1.png)
