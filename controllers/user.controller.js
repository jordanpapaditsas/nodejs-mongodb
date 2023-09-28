const User = require('../models/user.model');
const logger = require('../logger/logger');

exports.findAll = async(req, res) => {
  console.log('Find all users');

  try {
    const result = await User.find();
    res.status(200).json({ status: true, data: result });
    console.log('Success in reading all users.');
    logger.info('Log info success in reading all users.');
    // logger.log('Logger success in reading all users.');
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('An error occurred in reading all users.');
    logger.error('Problem in reading all users');
  }
};

// exports.findAll = function(req, res) {        // Here we are demonstrating a call without async method.
//   console.log('Find all users');

//   User.find((err, results) => {
//     if (err) {
//       res.status(400).json({ status: false, data: err });
//       console.log('Problem in reading all users');
//     } else {
//       res.status(200).json({ status: true, data: results });
//       console.log('Success in reading all users');
//     }
//   });
// };

exports.findOne = async(req, res) => {
  const username = req.params.username;
  console.log('Finds a user by username', username);

  try {
    const result = await User.findOne({ username: username });
    res.status(200).json({ status: true, data: result });
    console.log('Success in finding the user with username: ', req.params.username);
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('An error occurred in reading a user by the username: ', username);
  }
};

exports.create = async(req, res) => {
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    products: req.body.products,
  });
  console.log('Insert user with username: ', req.body.username);
  
  try {
    const result = await newUser.save();
    res.status(200).json({ status: true, data: result });
    console.log('Success in inserting user with username: ', req.body.username);
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('An error occurred in inserting user with username: ', req.body.username);
  }
};

exports.update = async(req, res) => {
  const username = req.body.username;
  console.log('Update user with username: ', username);

  const updateUser = {
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
  };

  try {
    const result = await User.findOneAndUpdate({ username: username }, updateUser, { new: true });
    res.status(200).json({ status: true, data: result });
    console.log('Success in updating the user with username: ', username);
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('Problem with updating the user with username: ', username);
  }
};

 exports.deleteOne = async(req, res) => {
  const username = req.params.username;
  console.log('Delete user with username: ', username);

  try {
    const result = await User.findOneAndRemove({ username: username });
    res.status(200).json({ status: true, data: result });
    console.log('Deleted the user with username: ', username);
  } catch(err) {
    res.status(400).json({ status: false, data: err });
    console.log('Problem with deleting user with username', username);
  }
};

// module.exports = { findAll, findOne, create, update, deleteOne };    ---> Alternative method to export the function calls.