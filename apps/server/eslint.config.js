import { defineConfig } from 'eslint/config';
import globals from 'globals';

import baseConfig from '../../eslint.config.js';

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],
    extends: [baseConfig],

    languageOptions: {
      globals: globals.node,
    },
  },
]);
