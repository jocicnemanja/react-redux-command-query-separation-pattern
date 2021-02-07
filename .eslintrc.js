module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    extends: ['airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint'],
    parserOptions: {
        project: './tsconfig.json',
    },
    rules: {
        "react/prop-types": 0,
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
    }
};