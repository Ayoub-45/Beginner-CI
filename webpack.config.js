// webpack.config.js

const path = require('path');
// This is critical for a Node.js API to prevent bundling native Node modules like 'express'
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // 1. Target Node.js environment
  target: 'node',

  // 2. Set mode for minification and optimization
  mode: 'production',

  // 3. Define the main entry point (e.g., your Express server file)
  // Ensure you have a 'server.js' file in your project root.
  entry: './server.js', 

  // 4. Define output settings
  output: {
    filename: 'server.bundle.js', // The bundled file name
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Cleans the 'dist' folder before each build
  },

  // 5. Do not bundle node_modules dependencies
  externals: [nodeExternals()],

  // 6. Optional: Add rules for Babel if you are using ES6+ features
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // Adjust presets based on your specific needs
            presets: ['@babel/preset-env'], 
          },
        },
      },
    ],
  },
};