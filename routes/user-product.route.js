const express = require('express');
const router = express.Router();

const userProductController = require('../controllers/user-product.controller');

router.get('/', userProductController.findAll);
router.get('/stats', userProductController.stats);
router.get('/:username', userProductController.findOne);
router.post('/', userProductController.addProduct);
router.patch('/:username', userProductController.updateProduct);
router.delete('/:username/products/:product', userProductController.deleteProduct);

module.exports = router;