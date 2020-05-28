const usersLogout = (req, res, next) => {
  if (req.session.user) {
    delete req.session.user;
    res.status(200).json('User has been logged out');
  }
};

module.exports = usersLogout;
