import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  ignores: ['dist'],
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          ecmaVersion: 'latest',
          ecmaFeatures: { jsx: true },
          sourceType: 'module',
        },
      },
      settings: {
        // Adding the import resolver for aliasing
        'import/resolver': {
          alias: {
            map: [
              ['@', './src'],
            ],
            extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add any other extensions if needed
          },
        },
      },
      plugins: [
        'react-hooks',
        'react-refresh',
      ],
      rules: {
        ...js.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
  ],
};
