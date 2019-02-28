# console-pretty-print

---

[![CircleCI](https://circleci.com/gh/oleg-koval/console-pretty-print/tree/master.svg?style=svg)](https://circleci.com/gh/oleg-koval/console-pretty-print/tree/master) [![codecov](https://codecov.io/gh/oleg-koval/console-pretty-js/branch/master/graph/badge.svg)](https://codecov.io/gh/oleg-koval/console-pretty-js) [![Greenkeeper badge](https://badges.greenkeeper.io/oleg-koval/console-pretty-print.svg)](https://greenkeeper.io/)

# Description

Adds "console-pretty-print" functionality for `console`

# Install

```sh
npm install console-pretty-print
```

# Usage

Add `require("console-pretty-print");` as the first line of the app's main module.

```js
require("console-pretty-print");

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
