// backend/routes/index.js
const express = require('express');
const router = express.Router();

//setting a cookie on the res with "XSRF-TOKEN" to the value of req.csrfToken ....
router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;
