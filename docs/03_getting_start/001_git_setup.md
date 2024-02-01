### Install Git CLI:

Before you begin, make sure you have Git installed on your machine. If not, you can download and install Git from the official website: Git Downloads.

```bash
# Verify Git installation
git --version
```

### Create a Git Account:

If you don't have a Git account, create one on GitHub or the Git hosting service of your choice.

### Initialize Git Repository:

# Create a new repository on GitHub:

Go to GitHub and log in.
Click on the "+" icon in the top right corner and select "New repository."
Fill in the repository name, description, and other settings.
Click "Create repository."

# Make a folder to clone the repository:

```bash
# Create a new folder for your project
mkdir project-name
cd project-name
```

# Open the folder in Visual Studio Code:

```bash
# Open the folder in Visual Studio Code
code .
```

# Clone the repository:

In Visual Studio Code terminal, run:

```bash
# Clone the repository
git clone [repository_url]
```

Replace [repository_url] with the URL of your newly created repository on GitHub.

# Open folder from the repository:

```bash
# Open the folder from the cloned repository
code path/to/your/project-name
```

# Initialize a new Git repository:

In Visual Studio Code terminal, run:

```bash
# Initialize a new Git repository (if not already initialized)
git init
```

Now, you have successfully set up a new project, cloned the repository, and initialized a Git repository for version control. You can start working on your project, commit changes, and push them to the remote repository on GitHub.
