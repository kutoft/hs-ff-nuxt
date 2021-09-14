module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'vue/no-v-html': 'off',
    'vue/html-self-closing': 'off',
    'vue/attributes-order': 'off',
    'vue/comment-directive': 'off',
    'vue/require-component-is': 'off',
    'nuxt/no-timing-in-fetch-data': 'off',
    'space-before-function-paren': 'off'
  }
}
