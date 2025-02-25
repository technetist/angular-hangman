module.exports = {
  '*/**/*.{js,ts}': ['prettier --write', 'eslint --fix', 'eslint'],
  '*/**/*.{json,css,md}': ['prettier --write'],
}
