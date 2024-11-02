import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config({
    files: ['*.ts'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.strict,
        eslintConfigPrettier,
    ],
});
