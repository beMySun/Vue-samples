import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css
  // Document
   ==========================================================================
  // *
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in
 *    IE on Windows Phone and in iOS.
  'html': {
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    // 1
    'MsTextSizeAdjust': '100%',
    // 2
    'WebkitTextSizeAdjust': '100%',
    // 2
    'fontFamily': '"Helvetica Neue", Helvetica, STHeiTi, sans-serif',
    'WebkitOverflowScrolling': 'touch'
  },
  // Sections
   ==========================================================================
  // *
 * Remove the margin in all browsers (opinionated).
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // *
 * Add the correct display in IE 9-.
  'article': {
    'display': 'block'
  },
  'aside': {
    'display': 'block'
  },
  'footer': {
    'display': 'block'
  },
  'header': {
    'display': 'block'
  },
  'nav': {
    'display': 'block'
  },
  'section': {
    'display': 'block'
  },
  // *
 * Correct the font size and margin on `h1` elements within `section` and
 * `article` contexts in Chrome, Firefox, and Safari.
  'h1': {
    'fontSize': [{ 'unit': 'em', 'value': 2 }],
    'margin': [{ 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'em', 'value': 0.67 }, { 'unit': 'px', 'value': 0 }]
  },
  // Grouping content
   ==========================================================================
  // *
 * Add the correct display in IE 9-.
 * 1. Add the correct display in IE.
  'figcaption': {
    // 1
    'display': 'block'
  },
  'figure': {
    // 1
    'display': 'block'
  },
  'main': {
    // 1
    'display': 'block'
  },
  // *
 * Add the correct margin in IE 8.
  'figure': {
    'margin': [{ 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }, { 'unit': 'em', 'value': 1 }, { 'unit': 'px', 'value': 40 }]
  },
  // *
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
  'hr': {
    'boxSizing': 'content-box',
    // 1
    'height': [{ 'unit': 'px', 'value': 0 }],
    // 1
    'overflow': 'visible',
    // 2
  },
  // *
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
  'pre': {
    'fontFamily': 'monospace, monospace',
    // 1
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    // 2
  },
  // Text-level semantics
   ==========================================================================
  // *
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
  'a': {
    'backgroundColor': 'transparent',
    // 1
    'WebkitTextDecorationSkip': 'objects',
    // 2
  },
  // *
 * 1. Remove the bottom border in Chrome 57- and Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
  'abbr[title]': {
    'borderBottom': [{ 'unit': 'string', 'value': 'none' }],
    // 1
    'textDecoration': 'underline',
    // 2
    'textDecoration': 'underline dotted',
    // 2
  },
  // *
 * Prevent the duplicate application of `bolder` by the next rule in Safari 6.
  'b': {
    'fontWeight': 'inherit'
  },
  'strong': {
    'fontWeight': 'inherit'
  },
  // *
 * Add the correct font weight in Chrome, Edge, and Safari.
  'b': {
    'fontWeight': 'bolder'
  },
  'strong': {
    'fontWeight': 'bolder'
  },
  // *
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd `em` font sizing in all browsers.
  'code': {
    'fontFamily': 'monospace, monospace',
    // 1
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    // 2
  },
  'kbd': {
    'fontFamily': 'monospace, monospace',
    // 1
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    // 2
  },
  'samp': {
    'fontFamily': 'monospace, monospace',
    // 1
    'fontSize': [{ 'unit': 'em', 'value': 1 }],
    // 2
  },
  // *
 * Add the correct font style in Android 4.3-.
  'dfn': {
    'fontStyle': 'italic'
  },
  // *
 * Add the correct background and color in IE 9-.
  'mark': {
    'backgroundColor': '#ff0',
    'color': '#000'
  },
  // *
 * Add the correct font size in all browsers.
  'small': {
    'fontSize': [{ 'unit': '%V', 'value': 0.8 }]
  },
  // *
 * Prevent `sub` and `sup` elements from affecting the line height in
 * all browsers.
  'sub': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sup': {
    'fontSize': [{ 'unit': '%V', 'value': 0.75 }],
    'lineHeight': [{ 'unit': 'px', 'value': 0 }],
    'position': 'relative',
    'verticalAlign': 'baseline'
  },
  'sub': {
    'bottom': [{ 'unit': 'em', 'value': -0.25 }]
  },
  'sup': {
    'top': [{ 'unit': 'em', 'value': -0.5 }]
  },
  // Embedded content
   ==========================================================================
  // *
 * Add the correct display in IE 9-.
  'audio': {
    'display': 'inline-block'
  },
  'video': {
    'display': 'inline-block'
  },
  // *
 * Add the correct display in iOS 4-7.
  'audio:not([controls])': {
    'display': 'none',
    'height': [{ 'unit': 'px', 'value': 0 }]
  },
  // *
 * Remove the border on images inside links in IE 10-.
  'img': {
    'borderStyle': 'none'
  },
  // *
 * Hide the overflow in IE.
  'svg:not(:root)': {
    'overflow': 'hidden'
  },
  // Forms
   ==========================================================================
  // *
 * 1. Change the font styles in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
  'button': {
    'fontFamily': 'sans-serif',
    // 1
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    // 1
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    // 1
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  'input': {
    'fontFamily': 'sans-serif',
    // 1
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    // 1
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    // 1
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  'optgroup': {
    'fontFamily': 'sans-serif',
    // 1
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    // 1
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    // 1
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  'select': {
    'fontFamily': 'sans-serif',
    // 1
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    // 1
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    // 1
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  'textarea': {
    'fontFamily': 'sans-serif',
    // 1
    'fontSize': [{ 'unit': '%V', 'value': 1 }],
    // 1
    'lineHeight': [{ 'unit': 'px', 'value': 1.15 }],
    // 1
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  // *
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
  'button': {
    // 1
    'overflow': 'visible'
  },
  'input': {
    // 1
    'overflow': 'visible'
  },
  // *
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
  'button': {
    // 1
    'textTransform': 'none'
  },
  'select': {
    // 1
    'textTransform': 'none'
  },
  // *
 * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
  'button': {
    'WebkitAppearance': 'button',
    // 2
  },
  'html [type="button"]': {
    'WebkitAppearance': 'button',
    // 2
  },
  '[type="reset"]': {
    'WebkitAppearance': 'button',
    // 2
  },
  '[type="submit"]': {
    'WebkitAppearance': 'button',
    // 2
  },
  // *
 * Remove the inner border and padding in Firefox.
  'button::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type="button"]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type="reset"]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '[type="submit"]::-moz-focus-inner': {
    'borderStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  // *
 * Restore the focus styles unset by the previous rule.
  'button:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type="button"]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type="reset"]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  '[type="submit"]:-moz-focusring': {
    'outline': '1px dotted ButtonText'
  },
  // *
 * Correct the padding in Firefox.
  'fieldset': {
    'padding': [{ 'unit': 'em', 'value': 0.35 }, { 'unit': 'em', 'value': 0.75 }, { 'unit': 'em', 'value': 0.625 }, { 'unit': 'em', 'value': 0.75 }]
  },
  // *
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from `fieldset` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    `fieldset` elements in all browsers.
  'legend': {
    'boxSizing': 'border-box',
    // 1
    'color': 'inherit',
    // 2
    'display': 'table',
    // 1
    'maxWidth': [{ 'unit': '%H', 'value': 1 }],
    // 1
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 3
    'whiteSpace': 'normal',
    // 1
  },
  // *
 * 1. Add the correct display in IE 9-.
 * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.
  'progress': {
    'display': 'inline-block',
    // 1
    'verticalAlign': 'baseline',
    // 2
  },
  // *
 * Remove the default vertical scrollbar in IE.
  'textarea': {
    'overflow': 'auto'
  },
  // *
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
  '[type="checkbox"]': {
    'boxSizing': 'border-box',
    // 1
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  '[type="radio"]': {
    'boxSizing': 'border-box',
    // 1
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    // 2
  },
  // *
 * Correct the cursor style of increment and decrement buttons in Chrome.
  '[type="number"]::-webkit-inner-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  '[type="number"]::-webkit-outer-spin-button': {
    'height': [{ 'unit': 'string', 'value': 'auto' }]
  },
  // *
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
  '[type="search"]': {
    'WebkitAppearance': 'textfield',
    // 1
    'outlineOffset': '-2px',
    // 2
  },
  // *
 * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.
  '[type="search"]::-webkit-search-cancel-button': {
    'WebkitAppearance': 'none'
  },
  '[type="search"]::-webkit-search-decoration': {
    'WebkitAppearance': 'none'
  },
  // *
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to `inherit` in Safari.
  '::-webkit-file-upload-button': {
    'WebkitAppearance': 'button',
    // 1
    'font': [{ 'unit': 'string', 'value': 'inherit' }],
    // 2
  },
  // Interactive
   ==========================================================================
  // * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
  'details': {
    'display': 'block'
  },
  'menu': {
    'display': 'block'
  },
  // * Add the correct display in all browsers.
  'summary': {
    'display': 'list-item'
  },
  // Scripting
   ==========================================================================
  // *
 * Add the correct display in IE 9-.
  'canvas': {
    'display': 'inline-block'
  },
  // *
 * Add the correct display in IE.
  'template': {
    'display': 'none'
  },
  // Hidden
   ==========================================================================
  // *
 * Add the correct display in IE 10-.
  '[hidden]': {
    'display': 'none'
  },
  'ol': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'ul': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'li': {
    'listStyle': 'none',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  }
});
