import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import unusedImports from 'eslint-plugin-unused-imports'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '**/node_modules/**',
  ]),

  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      // Turn off standard unused vars to let the plugin handle it
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',

      // AUTO-REMOVE imports on save
      'unused-imports/no-unused-imports': 'error',

      // Warn about unused variables (but don't delete them automatically)
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
])

export default eslintConfig
