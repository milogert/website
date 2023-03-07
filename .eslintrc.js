module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    // TODO run `npm install --save-dev @next/eslint-plugin-next`
    // 'plugin:@next/next/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.ts'],
      plugins: ['jsx-a11y'],
      rules: {
        'jsx-a11y/no-onchange': 'off', // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/398
        'jsx-a11y/no-redundant-roles': [
          'error',
          {
            dialog: ['dialog'],
            img: ['img'], // SVGs as img src can go into the SVG unexpectedly
            li: ['listitem'], // VoiceOver loses list semantics with list-style: none
            ol: ['list'], // VoiceOver loses list semantics with list-style: none
            ul: ['list'], // VoiceOver loses list semantics with list-style: none
          },
        ],
      },
    },
    {
      // Pages (html and api) have to export default for next.
      files: ['./pages/**/*.{ts,tsx}', 'jest.config.ts'],
      rules: {
        'import/no-default-export': 0,
      },
    },
    {
      files: ['jest.config.js', 'next.config.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 0,
      },
    },
  ],
  settings: {
    react: { version: 'detect' },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // TODO add jsx-a11y here.
  plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks', 'unicorn'],
  ignorePatterns: ['features/content/list-view/**'],
  rules: {
    camelcase: 'error',
    curly: ['error', 'all'],
    'global-require': 'error',
    'no-console': ['warn', { allow: ['error'] }],
    'no-duplicate-imports': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-template-curly-in-string': 'error',
    'no-useless-constructor': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'error',
    'react/display-name': 'off',
    'react/no-deprecated': 'off',
    'react/no-find-dom-node': 'off',
    'react/no-is-mounted': 'off',
    'react/no-string-refs': 'off',
    'react/no-unknown-property': 'off',
    'import/order': [
      'error',
      { alphabetize: { order: 'asc', caseInsensitive: true } },
    ],
    'react/prop-types': 'off', // For now until clean up propTypes
    // 'rise-frontend/static-prop-types': 'error',
    // TODO 'import/no-cycle': 'warn',
    'import/no-self-import': 'warn',
    // 'no-relative-import-paths/no-relative-import-paths': 'error',
    'import/no-default-export': 'error',
    'import/no-relative-parent-imports': 'error',
    'unicorn/filename-case': ['error', { case: 'kebabCase' }],
  },
}
