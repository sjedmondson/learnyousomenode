const fs = require('fs')


  var stringed = (fs.readFileSync(process.argv[2]).toString());
  var counted_lines = stringed.split('\n').length - 1;
  console.log(counted_lines)

