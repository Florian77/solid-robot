const expect = require('chai').expect;
const {deepWrapArray} = require("../../index");

describe('deep-wrap-array', function () {

    it('base case', function () {
        const result = deepWrapArray(["sub", "subSub"], {
            sub: {
                subSub: "random"
            }
        });
        // console.log("result", JSON.stringify(result,null,2));
        expect(result).to.be.deep.equal({
            sub: {
                subSub: [
                    "random"
                ]
            }
        });
    });

    it('edge case, full path not exists, change noting', function () {
        const testData = {
            sub: {
                notExists: "random"
            }
        };
        const result = deepWrapArray(["sub", "subSub"], testData);
        // console.log("result", JSON.stringify(result,null,2));
        expect(result).to.be.deep.equal(testData);
    });

    it('case nested array', function () {
        const result = deepWrapArray(["sub", "subSub", "subSubSub"], {
            sub: {
                subSub: [
                    {
                        subSubSub: "random"
                    }
                ]
            }
        });
        // console.log("result", JSON.stringify(result, null, 2));
        expect(result).to.be.deep.equal({
            sub: {
                subSub: [
                    {
                        subSubSub: [
                            "random"
                        ]
                    }
                ]
            }
        });
    });

    it('case deep nested array', function () {
        const result = deepWrapArray(["sub", "subSub", "subSubSub"], {
            sub: [
                {
                    subSub: [
                        {
                            subSubSub: "random"
                        }
                    ]
                }
            ]
        });
        // console.log("result", JSON.stringify(result, null, 2));
        expect(result).to.be.deep.equal({
            sub: [
                {
                    subSub: [
                        {
                            subSubSub: [
                                "random"
                            ]
                        }
                    ]
                }
            ]
        });
    });

    it('case nested mixed array', function () {
        const result = deepWrapArray(["sub", "subSub", "subSubSub"], {
            sub: {
                dontTouch: "data",
                subSub: [
                    {
                        id: 1,
                        subSubSub: "random"
                    },
                    {
                        id: 2,
                        subSubSub: ["random"]
                    },
                    {
                        id: 3,
                        dontTouch: "data",
                        subSubSub: {
                            data: "random"
                        }
                    },
                    {
                        id: 4,
                        nothing: "here"
                    }
                ],
                dontTouch2: "data",
            }
        });
        // console.log("result", JSON.stringify(result, null, 2));
        expect(result).to.be.deep.equal({
            "sub": {
                "dontTouch": "data",
                "subSub": [
                    {
                        "id": 1,
                        "subSubSub": [
                            "random"
                        ]
                    },
                    {
                        "id": 2,
                        "subSubSub": [
                            "random"
                        ]
                    },
                    {
                        "id": 3,
                        "dontTouch": "data",
                        "subSubSub": [
                            {
                                "data": "random"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "nothing": "here"
                    }
                ],
                "dontTouch2": "data"
            }
        });
    });


});
