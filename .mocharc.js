module.exports = {
  recursive: true,
  slow: 1000,
  timeout: 2000,
  color: true,
  reporter: 'spec',
  spec: ['tests', 'src/**/*.test.js'],
  ui: 'bdd',
  file: ['src/test/bootstrap.test.js'],
  exit: true
}
