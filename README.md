# A CLI with [nodeJS](https://nodejs.org/)

## Create a git repository

```bash
git init
```

## Create a package.json file
```bash
npm init
```
## Create a new file: hello-world.js
```javascript

 console.log('hello world'); 

 ```

## Install [commanderjs](https://github.com/tj/commander.js)
```bash
npm install commander --save 
```
```javascript
var program = require('commander');

program
  .version('0.0.1')
  .option('-l, --list [list]', 'List of customers in CSV')
  .parse(process.argv)
```

```bash
node hello-world --list 'hello world' 
node hello-world --version 
node hello-world --help

```

## Install [node-csv](https://github.com/wdavidw/node-csv)

```bash
npm install csv --save
```

```javascript
var csv = require('csv');
var fs = require('fs');

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
```

```bash
node hello-world --list people.csv
```


## Improving the output

```bash
npm install chalk --save
```

```javascript
	.on('end', function() {
		console.log(chalk.green('success'));
	})
```

## Finally doing a bash command
[Shebang/Hasbang](https://en.wikipedia.org/wiki/Shebang_(Unix)) Under Unix-like operating systems, when a script with a shebang is run as a program.
- Add shebang at the top of the file
```
#!/usr/bin/env node
```

```javascript 
  "bin": {
    "hello-world": "./hello-world.js"
  }
```

```bash
sudo npm install -g
```
