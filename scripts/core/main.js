"use strict";
/*
 * Proyecto 1
 * Crear una función que tome un objeto y devuelva los campos
 * y los valores como matrices separadas. Devuelve los campos
 * ordenados alfabéticamente, y sus correspondientes valores
 * en el mismo orden.
 */
exports.__esModule = true;
exports.keysAndValue = void 0;
function keysAndValue(dict) {
    var sortKeys = Object.keys(dict).sort();
    return new Array(sortKeys, sortKeys.map(function (key) { return dict[key]; }));
}
exports.keysAndValue = keysAndValue;
