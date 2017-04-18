var program = require('commander');
var csv = require('csv');
var fs = require('fs');
var chalk = require('chalk');

program
  .version('0.0.1')
  .option('-l, --list [list]', 'List of customers in CSV')
  .parse(process.argv)

var parse = csv.parse;
var stream = fs.createReadStream(program.list)
    .pipe(parse({ delimiter : ',' }));

stream
	.on('data', function (data) {
		var firstname = data[0];
		var lastname = data[1];
		var email = data[2];
		console.log(firstname, lastname, email);
	})
	.on('end', function() {
		console.log(chalk.green('success'));
	})
