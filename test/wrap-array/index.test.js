const expect = require('chai').expect;
const {wrapArray} = require("../../index");

describe('wrap-array', function () {

    it('happy path', function () {
        {
            const result = wrapArray("random string");
            // console.log("result", result);
            expect(result).to.be.deep.equal(["random string"])
        }
        {
            const result = wrapArray(["random string"]);
            // console.log("result", result);
            expect(result).to.be.deep.equal(["random string"])
        }
    });

    it('edge case null', function () {
        const result = wrapArray(null);
        // console.log("result", result);
        expect(result).to.be.a("array");
        expect(result).to.be.empty;
    });

    it('edge case undefined', function () {
        const result = wrapArray(undefined);
        // console.log("result", result);
        expect(result).to.be.a("array");
        expect(result).to.be.empty;
    });


});
