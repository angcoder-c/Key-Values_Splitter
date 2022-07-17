const test = require('./scripts/core/test');
const main = require('./scripts/core/main');
const process = require('process');

if (process.argv[2] === 'show' || 'SHOW '){
  /*
   * If the first execution parameter is the word 'show', 
   * it will display different information depending on 
   * the following parameters. 
   * Otherwise, it will show an error message.
   */
  if (process.argv[3] === 'tests') {
    // Typing the word 'tests' will execute the 'showTests' function
    test.showTests();
  } else {
    /*
     * Cleans the input parameters and converts 
     * them to a json object, then the 'keysAndValue' function is executed 
     * and the result is displayed
     */
    const strSource = `{ ${ process.argv.slice(3).map(item => {
      var kvItem = item.split(':');
      var cleanItem = `"${ kvItem[0] }":"${ kvItem[1] }"`;
      return cleanItem;
    }).join() } }`;

    const dictSource = JSON.parse(strSource);

    console.log('>>>', main.keysAndValue(dictSource));
  }
} else {
  console.log('ERROR: entrada invalida')
}