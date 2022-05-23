const fs = require('fs');
const stream = fs.createReadStream(
  `${__dirname}/text.txt`,
  'utf8'
);
stream.on('data', (data) => console.log(data));
stream.on('error', (err) => console.log(`Err: ${err}`));
