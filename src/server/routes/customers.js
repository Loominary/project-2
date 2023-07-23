const express = require('express');
const router = express.Router();

const cm = require ('../controllers/customers.js');

router.get      ('/', cm.getAllCustomers);
router.get      ('/customer-details', cm.getCustomerById);


module.exports = router;