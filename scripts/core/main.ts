/*
 * Proyecto 1
 * Crear una función que tome un objeto y devuelva los campos 
 * y los valores como matrices separadas. Devuelve los campos
 * ordenados alfabéticamente, y sus correspondientes valores 
 * en el mismo orden.
 */

function keysAndValue(dict): any {
	const sortKeys = Object.keys(dict).sort();
	return new Array(
		sortKeys, 
		sortKeys.map(
			key => dict[key]
		));
}

export { keysAndValue };
