module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "node": true
  },
  "extends": ["airbnb", "plugin:jsx-a11y/recommended", "plugin:react-hooks/recommended", "prettier"],
  "plugins": ["react", "react-hooks", "prettier"],
  "parserOptions": {
    "ecmaVersion": 12,
    "requireConfigFile": false,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "jsx": true
    }
  },
  "globals": {
    "localStorage": "writable",
    "document": "writable",
    "sessionStorage": "writable",
    "FileReader": "writable",
    "window": "writable",
    "process": "writable"
  },
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "max-depth": ["warn", 6],
    "max-lines": [
      "warn",
      {
        "max": 2500,
        "skipBlankLines": true
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-new": 0,
    "complexity": 0,
    "no-shadow": 0,
    "no-console": 0,
    "react/jsx-key": 1,
    "import/no-cycle": 0,
    "arrow-body-style": 1,
    "react/prop-types": 1,
    "consistent-return": 1,
    "no-param-reassign": 0,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "react/button-has-type": 1,
    "react/no-children-prop": 0,
    "react/forbid-prop-types": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/react-in-jsx-scope": 0,
    "react/no-array-index-key": 0,
    "react/no-unused-prop-types": 1,
    "react-hooks/rules-of-hooks": 2,
    "no-promise-executor-return": 0,
    "no-unsafe-optional-chaining": 0,
    "react/require-default-props": 0,
    "react/no-unescaped-entities": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-no-useless-fragment": 0,
    "react/jsx-curly-brace-presence": 0,
    "react/destructuring-assignment": 0,
    "import/no-extraneous-dependencies": 0,
    "react/no-unstable-nested-components": 0,
    "react/function-component-definition": 0,
    "react/jsx-no-constructed-context-values": 0,
    "no-async-promise-executor": 0,
    "no-await-in-loop": "warn",
    "space-before-blocks": ["error"],
    "no-return-await": 0,
    "no-unused-vars": [
      1,
      {
        "ignoreRestSiblings": false
      }
    ],
    "prefer-destructuring": [
      1,
      {
        "object": true,
        "array": false
      }
    ]
  }

};