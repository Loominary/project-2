const express = require('express');
const router = express.Router();

const tm = require ('../controllers/templates.js');

router.get      ('/', tm.getAllTemplates);
router.get      ('/:tempId', tm.getTemplateById);


module.exports = router;