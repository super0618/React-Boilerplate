# React Boilerplate

This React boilerplate provides a ready-to-use setup for building React applications with modern tools and best practices. It includes Webpack for bundling, Babel for JavaScript transpilation, Sass for styling, and essential utility packages.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Configuration](#configuration)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v20.11.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/super0618/React-Webpack.git
   cd React-Webpack
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

Start the development server to serve the application locally with hot reloading:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

### Building for Production

To create a production build of the application:

```bash
npm run build
```

The build output will be located in the `dist` directory.

## Folder Structure

The project structure is as follows:

```
react-boilerplate/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── types/
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .babelrc
├── .gitignore
├── .nvmrc
├── .prettierignore
├── .prettierrc
├── .vercelignore
├── tsconfig.json
├── package.json
├── webpack.config.js
└── README.md
```

- **public/**: Contains the static assets and the HTML template.
- **src/**: Contains the application source code.
  fonts.
  - **components/**: React components.
  - **pages/**: React pages.
  - **styles/**: Stylesheets.
  - **types/**: Types & Interfaces.
  - **App.tsx**: Main application component.
  - **index.tsx**: Entry point for the React application.
- **.babelrc**: Babel configuration file.
- **.nvmrc**: NVM configuration file.
- **.prettierrc**: Prettier configuration file.
- **.prettierignore**: Prettier ignore file.
- **tsconfig.json**: TypeScript configuration file.
- **webpack.config.js**: Webpack configuration file.

## Scripts

The following scripts are available in the project:

- `start`: Runs the development server.
- `build`: Creates a production build of the application.

## Dependencies

### Main Dependencies

- `react`
- `react-dom`
- `react-router-dom`

### Development Dependencies

- `webpack`
- `webpack-cli`
- `webpack-dev-server`
- `babel-loader`
- `@babel/core`
- `@babel/preset-env`
- `@babel/preset-react`
- `@babel/preset-typescript`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `typescript`
- `ts-loader`
- `sass`
- `sass-loader`
- `css-loader`
- `style-loader`

## Configuration

### Babel

The Babel configuration is located in the `.babelrc` file. It includes presets for transpiling modern JavaScript and React JSX syntax.

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

### Webpack

The Webpack configuration is located in the `webpack.config.js` file. It includes settings for bundling JavaScript, processing Sass files, and serving the application during development.

```javascript
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.?(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.(css|scss)$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
};
```
