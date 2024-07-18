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

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/super0618/React-Boilerplate.git
   cd react-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Running the Development Server

Start the development server to serve the application locally with hot reloading:

```bash
npm start
```

or

```bash
yarn start
```

Open your browser and navigate to `http://localhost:3000` to see the application running.

### Building for Production

To create a production build of the application:

```bash
npm run build
```

or

```bash
yarn build
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
│   ├── App.js
│   ├── index.js
│   └── ...
├── .babelrc
├── .gitignore
├── package.json
├── webpack.config.js
└── README.md
```

- **public/**: Contains the static assets and the HTML template.
- **src/**: Contains the application source code.
  fonts.
  - **components/**: React components.
  - **pages/**: React pages.
  - **App.js**: Main application component.
  - **index.js**: Entry point for the React application.
- **.babelrc**: Babel configuration file.
- **webpack.config.js**: Webpack configuration file.

## Scripts

The following scripts are available in the project:

- `start`: Runs the development server.
- `build`: Creates a production build of the application.
- `lint`: Runs ESLint to check for linting errors.
- `test`: Runs the test suite.

## Dependencies

### Main Dependencies

- `react`
- `react-dom`

### Development Dependencies

- `webpack`
- `webpack-cli`
- `webpack-dev-server`
- `babel-loader`
- `@babel/core`
- `@babel/preset-env`
- `@babel/preset-react`
- `ts-loader`
- `sass`
- `sass-loader`
- `css-loader`
- `style-loader`
- `eslint`
- `eslint-plugin-react`

## Configuration

### Babel

The Babel configuration is located in the `.babelrc` file. It includes presets for transpiling modern JavaScript and React JSX syntax.

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### Webpack

The Webpack configuration is located in the `webpack.config.js` file. It includes settings for bundling JavaScript, processing Sass files, and serving the application during development.

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.?(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    port: 3000,
  },
};
```
