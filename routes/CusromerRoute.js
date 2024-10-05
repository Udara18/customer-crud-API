const express = require('express');
const router = express.Router();
const customerController = require('../controller/CustomerController');
const veryfyToken = require('../middleware/middleware');

router.post('/create',veryfyToken,customerController.create);
router.get('/find/:Id',veryfyToken,customerController.findOneById);
router.delete('/delete/:Id',veryfyToken,customerController.deleteOneById);
router.put('/update/:Id',veryfyToken,customerController.updateOneById);
router.get('/search',veryfyToken,customerController.searchOneById);

module.exports = router;