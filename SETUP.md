# React Project with Vite & Tailwind

## 1. Create a project using Vite

```console
Project name: <name>
Select a framework: React
Select a variant: Javascript
```

## 2. Install & Setup Tailwind

### Install Tailwind

```console
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configure your template paths

```json
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ...
}
```

### Add the Tailwind directives to your CSS (./src/index.css file)

```console
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Test Tailwind

```js
npm run dev
```

## 3. Prettier

### Install

```
npm i --save-dev prettier
npm i --save-dev --save-exact prettier
```

### Configure .prettierrc file

```json
{
	"trailingComma": "es5",
	"semi": true,
	"singleQuote": true,
	"bracketSpacing": true,
	"bracketSameLine": false,
	"useTabs": true
}
```

### Configure .prettierignore file

```json
.yarn
.next
dist
node_modules
```

### Add a script to package.json file

```js
{
  ...
  "scripts": {
    ...
    "prettier": "prettier --write ."
  }
}
```

### Test Prettier

```js
npm run prettier
```
