CSVJSON json_beautifier() function
==================================

Single function `json_beautifier` to beautify and format JSON or JavaScript objects. Used to power CSVJSON the online tool found at [www.csvjson.com/json_beautifier](https://www.csvjson.com/json_beautifier). Used by thousands everyday.

Very useful if you want to tidy your JSON or JavaScript object for documentation purposes. Inline arrays, drop quotes, etc.

[npm package here](https://www.npmjs.com/package/csvjson-json_beautifier)

# Usage

Call `json_beautifier(object, options)` where `object` is the JavaScript object to be converted to JSON.
You may pass argument `options` to specify beautifying and formatting options:
- `space`: The number of spaces to indent. Default is `2`.
- `quoteType`: You can change double quotes to single quotes `'` if you like to. Will make for invalid JSON but valid Javascript. Default is `"`.
- `dropQuotesOnKeys`: JSON wraps keys with double quotes by default. Javascript doesn't need them though. Set to `true` to drop them. Will make for invalid JSON but valid Javascript. Default is `false`.
- `dropQuotesOnNumbers`: Set to `true` to parse number values and drop quotes around them. Default is `false`.
- `inlineShortArrays`: Set to `true` to collpase arrays inline if less than 80 characters. Default is `false`.
- `inlineShortArraysDepth`: If you turned on the above option, your can limit the nesting depth. Default is `1`.
- `minify`: Set to `true` to simply compact the JSON. Removes indentations and new lines. Default is `false`.

# Dependency

Function `json_beautifier` depends on the `JSON2_mod` function - a fork of David Crockford's JSON2 with extra switches to format the output JSON.

# Node example

In this example we drop quotes on values that are numbers.
We also inline short arrays to reduce the number of lines to display.

```
const json_beautifier = require('./json_beautifier.js');
const object = {"pi": "3.14159265359", "e": "2.7182818284", "prime": [2, 3, 5, 7, 11, 13, 17, 19], "1+6": 7};
const json = json_beautifier(object, {dropQuotesOnNumbers: true, inlineShortArrays: true});
console.log(json);
```
Result:
```
{
  "pi": 3.14159265359,
  "e": 2.7182818284,
  "prime": [ 2, 3, 5, 7, 11, 13, 17, 19 ],
  "1+6": 7
}
```

# Browser example

Same example as above but run in the browser.
Note: In the browser, global namespace `CSVJSON` is created. It contains the `json_beautifier` function.

```
<script type="text/javascript" src="json2-mod.js"></script>
<script type="text/javascript" src="json_beautifier.js"></script>
<script>
  const object = {"pi": "3.14159265359", "e": "2.7182818284", "prime": [2, 3, 5, 7, 11, 13, 17, 19], "1+6": 7};
  const json = CSVJSON.json_beautifier(object, {dropQuotesOnNumbers: true, inlineShortArrays: true});
  console.log(json);
</script>
```

# More examples

Removing double quotes on keys (where possible). Invalid JSON but valid Javascript.
```
const json_beautifier = require('./json_beautifier.js');
const object = {"pi": "3.14159265359", "e": "2.7182818284", "prime": [2, 3, 5, 7, 11, 13, 17, 19], "1+6": 7};
const json = json_beautifier(object, {
  dropQuotesOnKeys: true,
  dropQuotesOnNumbers: true,
  inlineShortArrays: true
});
console.log(json);
```
Result:
```
{
  pi: 3.14159265359,
  e: 2.7182818284,
  prime: [ 2, 3, 5, 7, 11, 13, 17, 19 ],
  "1+6": 7
}
```

Minifying JSON.
```
const json_beautifier = require('./json_beautifier.js');
const object = {"pi": "3.14159265359", "e": "2.7182818284", "prime": [2, 3, 5, 7, 11, 13, 17, 19], "1+6": 7};
const json = json_beautifier(object, {
  dropQuotesOnNumbers: true,
  minify: true
});
console.log(json);
```
Result:
```
{"pi":3.14159265359,"e":2.7182818284,"prime":[2,3,5,7,11,13,17,19],"1+6":7}
```

# Parsing and validating a JSON string.
If your JSON is a string, you can use the native `JSON.parse()` function provided by the browser and node.

# Tests
Run the tests in your browser by opening `test-browser.html`.

Run the tests through node:
```
node test-node.js
```

# Companion functions

[csv2json](https://github.com/martindrapeau/csvjson-csv2json) to convert CSV to JSON. [npm package here](https://www.npmjs.com/package/csvjson-csv2json).

[json2csv](https://github.com/martindrapeau/csvjson-csv2json) to convert JSON to CSV. [npm package here](https://www.npmjs.com/package/csvjson-json2csv).

[JSON2_mod](https://github.com/martindrapeau/json2-mod) a replacement of `JSON` with more options to format your JSON. [npm package here](https://www.npmjs.com/package/json2-mod).