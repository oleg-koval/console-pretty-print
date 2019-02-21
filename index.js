const DEFAULT_INDENT = 2;
const DEFAULT_TRANSFORMER = null;

module.exports = (() => {
  const _pretty = console.log;

  /**
   * @param  {any} value
   * @param  {any} message
   * @param  {number} indent
   */
  console.pretty = (value, message, indent) => {
    if (!value) {
      return;
    }

    const _indent = indent ? Math.abs(Number(indent)) : DEFAULT_INDENT;

    _pretty.apply(console, [
      JSON.stringify(value, DEFAULT_TRANSFORMER, _indent),
      message ? `\n${message}` : ""
    ]);
  };
})();
