let auth = (req, res, next) => {

  // isAuthenticated will return true or false
  
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/error");
  }
};


module.exports = auth;
