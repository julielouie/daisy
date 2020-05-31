const usersGet = (req, res, next) => {
  req.session.user = {
    email: 'j',
    fullName: 'J J',
    userId: 8
  };
  if (req.session.user) {
    res.status(200).json(req.session.user);
  } else {
    res.status(200).send(null);
  }
};

module.exports = usersGet;
