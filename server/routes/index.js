const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
  res.json({"message":"I am the server."})
})

router.get('/hello', function(req, res) {
  res.json({"message":"Hello from server!"})
})

module.exports = router