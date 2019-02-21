console-pretty

---

[![CircleCI](https://circleci.com/gh/oleg-koval/console-pretty-js/tree/master.svg?style=svg)](https://circleci.com/gh/oleg-koval/console-pretty-js/tree/master) [![codecov](https://codecov.io/gh/oleg-koval/console-pretty-js/branch/master/graph/badge.svg)](https://codecov.io/gh/oleg-koval/console-pretty-js)

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
