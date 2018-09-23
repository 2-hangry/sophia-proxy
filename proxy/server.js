const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

app.use('/businesses/:id', express.static(path.join(__dirname, './public')));
app.use('/api/businesses', router);

router.all('/:id/images*', (req, res) => {
  res.redirect(307, `http://18.224.24.70:3000${req.url}`)
})

app.get('/businesses/:id/images', (req, res) => {
  res.redirect(`http://18.224.24.70:3000/images-service/${req.params.id}`)
})

router.all('/:id/reviews*', (req, res) => {
  res.redirect(307, `http://52.55.139.226:80${req.url}`)
})

app.get('/businesses/:d/reviews', (req, res) => {
  res.redirect(`http://52.55.139.226:80/reviews-service/${req.params.id}`)
}) 

router.all('/:id/restaurantInfo*', (req, res) => {
  res.redirect(307, `http://35.183.134.103:80${req.url}`)
})

app.get('/businesses/:d/restaurantInfo', (req, res) => {
  res.redirect(`http://35.183.134.103:80/restaurantInfo-service/${req.params.id}`)
}) 







app.listen(7000, () => console.log('Server listening on port 7000'));