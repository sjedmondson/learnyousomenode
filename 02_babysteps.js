var sum = 0
for(var i = 2; i < process.argv.length; i+=1) {
  sum += parseInt(process.argv[i]);
}
console.log(sum);