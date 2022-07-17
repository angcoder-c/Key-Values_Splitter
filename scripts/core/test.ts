import { keysAndValue } from "./main";

// test arrays
var arr1 = {a:1, b:2, c:3};
var arr2 = {a:'Apple', b:'Microsoft', c:'Google'};
var arr3 = {key1:true, key2:false, key3:undefined};
var arr4 = {b:'two', c: 'three', a: 'one'};
var arr5 = {key2:true, key3:false, key1:undefined};

const tests = {
    // num : [ObjectOrigin, ArrayResult]
    0 : 
    [
        arr1, 
        keysAndValue(arr1)
    ],
    1 : 
    [
        arr2, 
        keysAndValue(arr2)
    ],
    2 : 
    [
        arr3, 
        keysAndValue(arr3)
    ],
    3 : 
    [
        arr4, 
        keysAndValue(arr4)
    ],
    4 : 
    [
        arr5, 
        keysAndValue(arr5)
    ]
}; 

function showTests() {
    // pint tests int terminal: show tests
    for (let i=0; i < Object.keys(tests).length; i++) {
        var printTest = `
        ---------------------------------------------
        Test ${i+1}
        ---------------------------------------------
        Object origin: ${JSON.stringify(tests[i][0])}
        Array result: ${JSON.stringify(tests[i][1])}
        ---------------------------------------------`;
        console.log(printTest);
    }
}

export { showTests };