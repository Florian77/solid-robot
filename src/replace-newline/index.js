const {replace, curryN} = require('ramda');

const replaceNewline = curryN(2, (replaceWith, text) => replace( /(?:\r\n|\r|\n)/g, replaceWith, String(text)) );
const withSpace = replaceNewline(' ');
const withEmptyString = replaceNewline('');
const withBR = replaceNewline('<br>');

module.exports.replace = replaceNewline;
module.exports.space = withSpace;
module.exports.empty = withEmptyString;
module.exports.emptyString = withEmptyString;
module.exports.br = withBR;


