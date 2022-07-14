"use strict";
exports.__esModule = true;
exports.showTests = void 0;
var main_1 = require("./main");
var arr1 = { a: 1, b: 2, c: 3 };
var arr2 = { a: 'Apple', b: 'Microsoft', c: 'Google' };
var arr3 = { key1: true, key2: false, key3: undefined };
var arr4 = { b: 'two', c: 'three', a: 'one' };
var arr5 = { key2: true, key3: false, key1: undefined };
var tests = {
    // num : [ObjectOrigin, ArrayResult]
    0: [
        arr1,
        (0, main_1.keysAndValue)(arr1)
    ],
    1: [
        arr2,
        (0, main_1.keysAndValue)(arr2)
    ],
    2: [
        arr3,
        (0, main_1.keysAndValue)(arr3)
    ],
    3: [
        arr4,
        (0, main_1.keysAndValue)(arr4)
    ],
    4: [
        arr5,
        (0, main_1.keysAndValue)(arr5)
    ]
};
function showTests() {
    for (var i = 0; i < Object.keys(tests).length; i++) {
        var printTest = "\n        ---------------------------------------------\n        Test ".concat(i + 1, "\n        ---------------------------------------------\n        Object origin: ").concat(JSON.stringify(tests[i][0]), "\n        Array result: ").concat(JSON.stringify(tests[i][1]), "\n        ---------------------------------------------");
        console.log(printTest);
    }
}
exports.showTests = showTests;
