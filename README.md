# lebanon-utils
## Description
js utility library for lebanese applications
## Features
- phone number utilites
## Getting started
### Installation
```shell
npm i lebanon-utils
```
or
```shell
yarn install lebanon-utils
```
### Usage
```js
const getOperator = require('lebanon-utils/phone/getOperator'); // recommended, it takes less size than the 2nd line
// or const { getOperator } = require('lebanon-utils/phone')

console.log(getOperator('76543210')); /* Alfa */
```
