const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

app.use('/businesses/:id', express.static(path.join(__dirname, './public')));
app.use('/api/businesses', router);

router.all('/:id/images*', (req, res) => {
  res.redirect(307, `http://localhost:3000${req.url}`)
})

router.all('/:id/reviews*', (req, res) => {
  res.redirect(307, `http://localhost:8080${req.url}`)
})

router.all('/:id/restaurantInfo*', (req, res) => {
  res.redirect(307, `http://localhost:3002${req.url}`)
})

app.listen(7000, () => console.log('Server listening on port 7000'));