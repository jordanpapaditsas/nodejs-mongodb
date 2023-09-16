const findAll = async(req, res) => {
  console.log('Find all users');
  
  res.status(200).json({ status: true });
};

const findOne = async(req, res) => {
  const username = req.params.username;
  console.log('Finds a user by username', username);

  res.status(200).json({ status: true });
};

module.exports = { findAll };