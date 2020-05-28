const usersGet = (req, res, next) => {
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(200).send('User must be logged in');
  }
};

module.exports = usersGet;
