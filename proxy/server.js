const express = require('express');

const app = express();
const port = process.env.PORT || 7000;

app.use(express.static(__dirname + './public'));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});