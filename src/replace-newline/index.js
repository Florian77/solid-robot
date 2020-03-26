const {replace, curryN} = require('ramda');

const replaceNewline = curryN(2, (replaceWith, text) => replace( /(?:\r\n|\r|\n)/g, replaceWith, String(text)) );
const withSpace = replaceNewline(' ');
const withEmpty = replaceNewline('');
const withBR = replaceNewline('<br>');

module.exports.replace = replaceNewline;
module.exports.space = withSpace;
module.exports.empty = withEmpty;
module.exports.br = withBR;


