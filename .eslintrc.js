module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        indent: ['error', 4],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                next: 'return',
                prev: '*',
            },
            {
                blankLine: 'always',
                next: '*',
                prev: ['const', 'let', 'var'],
            },
            {
                blankLine: 'any',
                next: ['const', 'let', 'var'],
                prev: ['const', 'let', 'var'],
            },
        ],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'react/display-name': 'error',
    },
}
