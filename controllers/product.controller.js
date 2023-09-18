const Product = require('../models/product.model');

exports.findAll = async(req, res) => {
  console.log('Find all products.');

  try {
    const result = await Product.find();
    res.status(200).json({ status: true, data: result });
    console.log('Success in reading all the products.');
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('An error occurred in finding all the products.');
  }
};

exports.findOne = async(req, res) => {
  const product = req.params.product;
  console.log('Find one product with product name: ', product);

  try {
    const result = await Product.findOne({ product: product });
    res.status(200).json({ status: true, data: result });
    console.log('Success in reading a product with product name: ', product);
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('An error occurred in reading a product with product name: ', product);
  }
};

exports.create = async(req, res) => {
  const newProduct = new Product({
    product: req.body.product,
    cost: req.body.cost,
    description: req.body.description,
    quantity: req.body.quantity,
  });
  console.log('Insert product with product name: ', req.body.product);

  try {
    const result = await newProduct.save();
    res.status(200).json({ status: true, data: result });
    console.log('Success in inserting a product with product name: ', req.body.product);
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('An error occurred in inserting a product with product name: ', req.body.product);
  }
};

exports.update = async(req, res) => {
  const product = req.body.product;
  console.log('Updates a product with product name: ', product);

  const updateProduct = {
    product: req.body.product,
    cost: req.body.cost,
    description: req.body.description,
    quantity: req.body.quantity,
  };

  try {
    const result = await Product.findOneAndUpdate({ product : product }, updateProduct, { new: true });
    res.status(200).json({ status: true, data: result });
    console.log('Success in updating the product with product name: ', product);
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('An error occurred in updating the product with product name: ', product);
  }
};

exports.deleteOne = async(req, res) => {
  const product = req.params.product;
  console.log('Deletes a product with product name: ', product);

  try {
    const result = await Product.findOneAndRemove({ product: product });
    res.status(200).json({ status: true, data: result });
    console.log('Deleted the product with product name: ', product);
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('An error occurred in deleting the product with product name: ', product);
  }
};