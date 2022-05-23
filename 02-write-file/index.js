const fs = require('fs');
const readline = require('readline');

const writeStream = fs.createWriteStream(
  `${__dirname}/text.txt`,
  'utf8'
);

console.log('Hi');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exit = () => {
  console.log('Bye!');
  process.exit();
};
rl.on('line', (input) => {
  if (input === 'exit') exit();
  writeStream.write(input);
});
rl.on('SIGINT', () => exit());
