# git init

# npm init

# hello-world.js 
```javascript

 console.log('hello world'); 

 ```

# Install commander
```bash
npm install commander --save 
```

# 
```bash
node hello-world --list 'hello world' 
node hello-world --version 
node hello-world --help

```

# ``` npm install csv --save ```

# ``` node hello-world --list people.csv ```

# Improving the output

```bash
npm install chalk --save
```

# Finally doing a bash command
add #!/usr/bin/env node to the js script

```javascript 
  "bin": {
    "hello-world": "./hello-world.js"
  }
```

npm install -g