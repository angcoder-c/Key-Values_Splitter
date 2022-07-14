const test = require('./scripts/core/test');
const main = require('./scripts/core/main');
const process = require('process');

if (process.argv[2] === 'show' || 'SHOW '){
  if (process.argv[3] === 'tests') {
    test.showTests();
  } else {
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