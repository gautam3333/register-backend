const User = require('./../model/registrationModel');
const bcrypt = require('bcryptjs');

exports.createRegistration = async (req, res) => {
  try {
    // hashing a password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const user_credentials = { username: req.body.username, password: hash };
    await User.create(user_credentials);
    res
      .status(201)
      .json({ status: 'success', message: 'You have successfully registered' });
  } catch (err) {
    res.status(400).json({ status: 'fail', message: err });
  }
};
