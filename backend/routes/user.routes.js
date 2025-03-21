const express = require('express');
const protectRoute = require('../middleware/protectRoute');
const {getUsersforSidebar} = require('../controllers/user.controller');

const router = express.Router();

router.get('/',protectRoute,getUsersforSidebar);
module.exports = router;