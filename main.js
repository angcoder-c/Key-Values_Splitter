/*
 * Proyecto 1
 * Crear una función que tome un objeto y devuelva los campos
 * y los valores como matrices separadas. Devuelve los campos
 * ordenados alfabéticamente, y sus correspondientes valores
 * en el mismo orden.
 */
function keysAndValue(dict) {
    // arrays of return
    var keys = [];
    var values = [];
    for (var item in dict) {
        keys.push(item);
        values.push(dict[item]);
    }
    return new Array(keys, values);
}
// Tests
var a = keysAndValue({ a: 1, b: 2, c: 3 });
var b = keysAndValue({ a: 'Apple', b: 'Microsoft', c: 'Google' });
var c = keysAndValue({ key1: true, key2: false, key3: undefined });
console.log(a);
console.log(b);
console.log(c);
