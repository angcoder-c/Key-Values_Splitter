/*
 * Proyecto 1
 * Crear una función que tome un objeto y devuelva los campos 
 * y los valores como matrices separadas. Devuelve los campos
 * ordenados alfabéticamente, y sus correspondientes valores 
 * en el mismo orden.
 */

function keysAndValue(dict): any {
	// arrays of return
	let keys = [];
	let values = [];

  	for (let item in dict){
		keys.push(item);
		values.push(dict[item]);
	}
	return new Array(keys, values);
}

// Tests
let a = keysAndValue({a:1, b:2, c:3});
let b = keysAndValue({a:'Apple', b:'Microsoft', c:'Google'});
let c = keysAndValue({key1:true, key2:false, key3:undefined});

console.log(a);
console.log(b);
console.log(c);