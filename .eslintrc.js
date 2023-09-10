module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    env: {
        browser: true,
        es2022: true,
        node: true,
        jest: true
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.eslint.json",
        tsconfigRootDir: __dirname,
    },
    ignorePatterns: ["dist"],
    extends: [
        "prettier",
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    rules: {
        "import/prefer-default-export": "off",
        "@typescript-eslint/quotes": ["error", "double"],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
    },
};
