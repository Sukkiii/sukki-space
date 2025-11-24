import { defineConfig, globalIgnores } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import stylistic from "@stylistic/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";

const ERROR = 2;

export default defineConfig([
  // ------------------------------------------------------
  // Next.js 기본 ESLint 설정
  // ------------------------------------------------------
  ...nextCoreWebVitals,
  ...nextTypescript,

  // ------------------------------------------------------
  // 글로벌 ignore
  // ------------------------------------------------------
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // ------------------------------------------------------
  // 우리 프로젝트 전용 룰
  // ------------------------------------------------------
  {
    plugins: {
      "@stylistic": stylistic,
      react: reactPlugin,
      "react-hooks": reactHooks,
      import: importPlugin,
    },

    rules: {
      // ------------------------------------------------------
      // Stylistic Rules (JSX Formatting)
      // ------------------------------------------------------
      "@stylistic/jsx-child-element-spacing": ERROR,
      "@stylistic/jsx-closing-bracket-location": ERROR,
      "@stylistic/jsx-closing-tag-location": ERROR,
      "@stylistic/jsx-curly-brace-presence": [
        ERROR,
        {
          props: "never",
          children: "never",
          propElementValues: "always",
        },
      ],
      "@stylistic/jsx-curly-newline": [ERROR, "consistent"],
      "@stylistic/jsx-curly-spacing": ERROR,
      "@stylistic/jsx-equals-spacing": ERROR,
      "@stylistic/jsx-first-prop-new-line": ERROR,
      "@stylistic/jsx-function-call-newline": ERROR,
      "@stylistic/indent": [ERROR, 2],
      "@stylistic/jsx-indent-props": [ERROR, 2],
      "@stylistic/jsx-max-props-per-line": [
        ERROR,
        {
          maximum: {
            single: 3,
            multi: 1,
          },
        },
      ],
      "@stylistic/jsx-newline": [ERROR, { prevent: true }],
      "@stylistic/jsx-one-expression-per-line": [
        ERROR,
        { allow: "single-child" },
      ],
      "@stylistic/no-multi-spaces": ERROR,
      "@stylistic/jsx-pascal-case": ERROR,
      "@stylistic/jsx-self-closing-comp": [
        ERROR,
        {
          component: true,
          html: true,
        },
      ],
      "@stylistic/jsx-sort-props": [
        ERROR,
        {
          shorthandFirst: true,
          reservedFirst: true,
          ignoreCase: false,
          multiline: "last",
          callbacksLast: true,
          noSortAlphabetically: true,
        },
      ],
      "@stylistic/jsx-tag-spacing": [ERROR, { beforeClosing: "never" }],
      "@stylistic/jsx-wrap-multilines": [
        ERROR,
        {
          declaration: "parens-new-line",
          assignment: "parens-new-line",
          return: "parens-new-line",
          arrow: "parens-new-line",
          condition: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
        },
      ],
      "@stylistic/jsx-quotes": ERROR,

      // ------------------------------------------------------
      // React Rules
      // ------------------------------------------------------
      "react/react-in-jsx-scope": "off",
      "react/destructuring-assignment": "off",
      "react/button-has-type": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/require-default-props": "off",
      "react/jsx-props-no-spreading": "off",
      "react/no-array-index-key": "error",
      "react/no-unknown-property": ["error", { ignore: ["css"] }],

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // ------------------------------------------------------
      // Import Order Rules
      // ------------------------------------------------------
      "import/order": [
        "error",
        {
          pathGroups: [
            {
              pattern:
                "{react*,react*/**,redux*,redux*/**,zustand*,zustand*/**}",
              group: "builtin",
              position: "before",
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------
    // Settings
    // ------------------------------------------------------
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
      },
    },
  },
]);
