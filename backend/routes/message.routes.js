const express = require('express');
const router = express.Router();
const {sendMessage} = require('./../controllers/message.controller');

router.post('/send/:id',sendMessage);



module.exports = router;