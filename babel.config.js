module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
    // ...other Babel plugins
  ]
};