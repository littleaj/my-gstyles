








/**
 * @typedef SavedGStyle
 * @property {string} id Unique name for this style
 * @property {string} [fontFamily] - Font family name (e.g. "Arial").
 * @property {number} [fontSize] - Font size in points.
 * @property {boolean} [bold] - Whether text is bold.
 * @property {boolean} [italic] - Whether text is italic.
 * @property {boolean} [underline] - Whether text is underlined.
 * @property {boolean} [strikethrough] - Whether text is struck through.
 * @property {string} [foregroundColor] - Text color in hex (e.g. "#ff0000") or CSS-like string.
 * @property {string} [backgroundColor] - Background color in hex (e.g. "#ffff00") or CSS-like string.
 *
 * // Sheets-specific
 * @property {"LEFT"|"CENTER"|"RIGHT"} [horizontalAlign] - Horizontal alignment for cell text.
 * @property {"TOP"|"MIDDLE"|"BOTTOM"} [verticalAlign] - Vertical alignment for cell text.
 * @property {"OVERFLOW"|"WRAP"|"CLIP"} [wrapStrategy] - Text wrapping strategy for cell text.
 *
 * // Docs/Slides paragraph-level
 * @property {number} [lineSpacing] - Line spacing multiplier (e.g. 1.15, 2.0).
 * @property {number} [indentStart] - Start (left) indent in points.
 * @property {number} [indentEnd] - End (right) indent in points.
 * @property {number} [indentFirstLine] - First-line indent in points.
 *
 * @property {string} [linkUrl] - Associated hyperlink URL.
 */

// Q: does this need to return a string or can it return an object? check docs
/**
 * @returns {string | SavedGStyle[]}
 */
function getStylesJson() {
  return new UserPropsStylesStorage().list();
}
