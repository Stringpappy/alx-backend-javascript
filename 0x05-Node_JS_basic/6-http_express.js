const express = require('express');

const myapp = express();
const PORT = 1245;

myapp.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

myapp.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

