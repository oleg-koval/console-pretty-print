console-pretty

---

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
