# parcel-browser-field

Demonstrates a bug where the `browser` field is not being used correctly. See `node_modules\mjolnir.js\package.json` after installation, verify the `browser` field in use.

## setup
`npm install`

### optional steps
* edit `node_modules\mjolnir.js\dist\esm\utils\hammer.js` and add:
```js
console.log('hammer.js');
```
* edit `node_modules\mjolnir.js\dist\esm\utils\hammer.browser.js` and add:
```js
console.log('hammer.browser.js');
```

## see the issue
`npm start`
