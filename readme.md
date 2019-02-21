console-pretty

---

[![CircleCI](https://circleci.com/gh/oleg-koval/console-pretty-js/tree/master.svg?style=svg)](https://circleci.com/gh/oleg-koval/console-pretty-js/tree/master) [![Coverage Status](https://coveralls.io/repos/github/oleg-koval/console-pretty-js/badge.svg?branch=master)](https://coveralls.io/github/oleg-koval/console-pretty-js?branch=master)

# Description

Adds "pretty print" functionality for `console`

# Install

```sh
npm install console-pretty
```

# Usage

Add `require("console-pretty");` as the first line of the app's main module.

```js
require("console-pretty");

console.pretty({
  one: 1,
  two: 2,
  nested: {
    one: 1,
    two: 2
  }
});
```

Output:

```json
{
  "one": 1,
  "two": 2,
  "nested": {
    "one": 1,
    "two": 2
  }
}
```

**Arguments**:

`value` : any js object

`message`: some description

`indent`: spaces to indent
