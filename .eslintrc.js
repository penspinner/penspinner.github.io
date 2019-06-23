module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/media-has-caption': 0,
    'linebreak-style': 0,
    'no-debugger': 0,
    'no-mixed-operators': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': [
      2,
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
      },
    ],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-multi-comp': 0,
    'react/no-unused-prop-types': 1,
  },
};
