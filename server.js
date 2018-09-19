const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.listen(7000, () => console.log('Server listening on port 7000'));