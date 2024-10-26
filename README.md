

# Master Project Repository

Welcome to the Master Project repository! This README provides an overview of the repository branches and instructions on accessing each branch.

## Repository URL

Access the repository at: [https://github.com/gaveone/Master-project.git](https://github.com/gaveone/Master-project.git)

## Branches

This repository contains several branches, each dedicated to specific aspects of the project:

### 1. `BI` Branch (Bruno Iradukunda)

- **Description**: This branch is assigned to Bruno Iradukunda.
- **Access Command**:

   ```bash
   git pull origin BI
   ```

### 2. `SK` Branch (Samuel Kanja)

- **Description**: This branch is assigned to Samuel Kanja.
- **Access Command**:

   ```bash
   git pull origin SK
   ```

## How to Access Branches

To switch to a specific branch in the repository, follow these steps:

1. **Clone the Repository** (if you haven't already):

   ```bash
   git clone https://github.com/gaveone/Master-project.git
   ```

   ```bash
   gh repo clone gaveone/Master-project
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Master-project
   ```

3. **Switch to the Desired Branch**:

   ```bash
   git checkout <branch-name>
   ```

Replace `<branch-name>` with `BI` or `SK` as required.

---

# Project Setup with TypeScript

This section will guide you through setting up a TypeScript environment for the project. TypeScript provides optional static typing, enhancing your development workflow with improved tooling and error checking.

## Prerequisites

Ensure that Node.js and npm are installed on your system. Verify this by running:

```bash
node -v
npm -v
```

You can install TypeScript globally with the following command:

```bash
npm install -g typescript
```

## Project Structure

Your project directory should follow this structure:

```
├── TS/
│   └── main.ts
│
├── JS/
│   └── main.js
│
├── HTML/
├── CSS/
│
└── tsconfig.json
```

This configuration:

- Sets the output directory for compiled JavaScript files to `./JS`
- Sets the root directory for TypeScript files to `./TS`
- Enables strict type-checking
- Specifies the `commonjs` module system and targets ES6 syntax

## Initialize TypeScript Configuration

Add the following to `tsconfig.json` to set up TypeScript compilation options:

```json
{
  "compilerOptions": {
    "outDir": "./JS",
    "rootDir": "./TS",
    "strict": true,
    "module": "commonjs",
    "target": "es6"
  },
  "include": ["TS/**/*"]
}
```

## Enable Watch Mode with `tsc`

To automatically compile TypeScript files whenever you make changes, run:

```bash
tsc --watch
```

With `--watch` mode, TypeScript will monitor changes to your `.ts` files and recompile them as needed, generating updated JavaScript files in real time.

