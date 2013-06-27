#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello2.txt";
var out = "Hello world from hello2\n";
fs.writeFileSync(outfile, out);
console.log(__filename + "to " + outfile);
