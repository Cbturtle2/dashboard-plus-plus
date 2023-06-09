module.exports = {
    "env": {
        "es2021": true,
        "jest": true
    },
    "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
    "overrides": [],
    "ignorePatterns": ["dist/**/*", "docs/**/*", "src/**/*.test.ts"],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint"],
    "rules": {
        "no-unused-vars": "off",
        "no-extra-boolean-cast": "off",
        "@typescript-eslint/no-array-constructor": "off",
        "@typescript-eslint/no-unused-vars": [
            "warn",
            {
                // allow `_`
                "argsIgnorePattern": "^_",
                "varsIgnorePattern": "^_",
                "caughtErrorsIgnorePattern": "^_"
            }
        ]
    }
}