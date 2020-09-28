const expect = require('chai').expect;
const {replaceNewLine} = require("../../index");

describe('replace-new-line', function () {

    const testString = "a\r\nb\nc\rd";

    it('base function, replace with custom string', function () {
        const result = replaceNewLine.replace("--", testString);
        // console.log("result", result);
        expect(result).to.be.equal("a--b--c--d");
    });

    it('base function, curry function, replace with custom string', function () {
        const replaceFn = replaceNewLine.replace("--");
        const result = replaceFn(testString);
        // console.log("result", result);
        expect(result).to.be.equal("a--b--c--d");
    });

    it('replace with space', function () {
        const result = replaceNewLine.space(testString);
        // console.log("result", result);
        expect(result).to.be.equal("a b c d");
    });

    it('replace with emptyString', function () {
        const result = replaceNewLine.emptyString(testString);
        // console.log("result", result);
        expect(result).to.be.equal("abcd");
    });

    it('replace with empty', function () {
        const result = replaceNewLine.empty(testString);
        // console.log("result", result);
        expect(result).to.be.equal("abcd");
    });

    it('replace with br', function () {
        const result = replaceNewLine.br(testString);
        // console.log("result", result);
        expect(result).to.be.equal("a<br>b<br>c<br>d");
    });


});
