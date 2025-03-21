const express = require('express');
const router = express.Router();
const {sendMessage,getMessages} = require('./../controllers/message.controller');
const protectRoute = require('./../middleware/protectRoute');


router.post('/send/:id',protectRoute,sendMessage);
router.get('/:id',protectRoute,getMessages);



module.exports = router;