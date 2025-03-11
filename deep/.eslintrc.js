// .eslintrc.js
module.exports = {
    // Extend from default ESLint recommended configuration
    extends: [
      'eslint:recommended',
      'plugin:react/recommended', // If using React
    ],
    
    // Define the environment (you can modify this if you have different settings)
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
    
    // Add additional settings if needed
    settings: {
      react: {
        version: 'detect',
      },
    },
  
    // Rules to apply
    rules: {
      'no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }], // Set to 'warn' instead of 'error'
      // You can also completely turn off the rule with:
      // 'no-unused-vars': 'off',
    },
  };
  