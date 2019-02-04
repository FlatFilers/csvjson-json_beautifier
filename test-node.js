const JSON2_mod = require('json2-mod');
const json_beautifier = require('./json_beautifier.js');
const object = {"pi": "3.14159265359", "e": "2.7182818284", "prime": [2, 3, 5, 7, 11, 13, 17, 19], "1+6": 7};
const json = json_beautifier(object, {dropQuotesOnNumbers: true, inlineShortArrays: true});
const expected = `{
  "pi": 3.14159265359,
  "e": 2.7182818284,
  "prime": [ 2, 3, 5, 7, 11, 13, 17, 19 ],
  "1+6": 7
}`;
console.log('==Expected==');
console.log(expected);
console.log('==Execution==');
console.log(json);
console.log('==Result==');
if (json === expected) {
	console.log('Success!');
} else {
	console.log('Failed.');
}
