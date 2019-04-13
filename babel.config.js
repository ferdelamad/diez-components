module.exports = {
  presets: [
    [ '@babel/env', { loose: true } ],
    '@babel/react'
  ],
  overrides: [{
    test: "./src",
    compact: true,
  }],
}
