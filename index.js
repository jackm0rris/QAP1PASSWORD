#!/usr/bin/env node

const args = process.argv.slice(2); 

let length = 8; 
let includeNumbers = false;  

// character sets
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';

// display help menu 
function displayHelp() {
  console.log(`
Options:
  --help, -h          Show help message
  --length, -l <#>  Choose the length of the password (default is 8)
  --numbers, -n       Include numbers in the password`
);
  process.exit(0);
}

args.forEach((arg, index) => {
  if (arg === '--help' || arg === '-h') {
    displayHelp();
  }

  if ((arg === '--length' || arg === '-l') && !isNaN(args[index + 1])) {
    length = parseInt(args[index + 1], 10);
  } else if (arg === '--length' || arg === '-l') {
    console.error('Error: Please select a valid number for length.');
    process.exit(1);
  }

  if (arg === '--numbers' || arg === '-n') {
    includeNumbers = true;
  }
});

let finalCharset = lowercase;
if (includeNumbers) {
  finalCharset += numbers;
}

let password = '';
for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * finalCharset.length);
  password += finalCharset[randomIndex];
}

// output password
console.log(`Password: ${password}`);


