const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

router.get('/', productController.findAll);
router.get('/:product', productController.findOne);
router.post('/', productController.create);
router.patch('/', productController.update);
router.delete('/:product', productController.deleteOne)


module.exports = router;