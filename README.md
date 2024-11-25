### Agrego Eslint:

```
npm install --save-dev babel-eslint eslint-config-standard eslint-config-standard-jsx eslint-config-standard-rea
ct eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-plugin-react
```

###Configuro Eslint:
```
"devDependencies": {
   ...
  },
  "private": true,
  "eslintConfig": {
    "parser": "babel-eslint",
    "extends": ["standard", "standard-jsx", "standard-react"]
  }
}
```
