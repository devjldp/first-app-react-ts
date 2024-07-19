import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  },
  {
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: ['react', 'react-refresh'],
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off', // Disable rule for React 17+
      // Add other rules or customizations here
    },
  },
  pluginReactConfig,
];