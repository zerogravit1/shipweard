import { defineConfig } from 'eslint/config';
import globals from 'globals';

import baseConfig from '../../eslint.config.js';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [baseConfig],

    languageOptions: {
      globals: globals.browser,
    },
  },
]);
