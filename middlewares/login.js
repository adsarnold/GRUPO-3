function login(req, res, next) {
    if (!req.session.user) {
      return res.redirect("/login");
    }
  
    return next();
  }
  
  function validateCredentials(req, res, next) {
    const credentials = req.body;
    console.log(credentials)
    if (credentials.login.trim() === "" || credentials.password.trim() === "") {
      return res.redirect("/auth?invalidCredentials=true");
    }
    next();
  }
  
  function validateRole(requireRole) {
    return function (req, res, next) {
      if (req.session.user === undefined) {
        return res.redirect("/login");
      }
  
      if (!req.session.user.role.includes(requireRole)) {
        return res.redirect("/login");
      }
  
      return next();
    };
  }
  
  module.exports = {
    login: login,
    validateCredentials: validateCredentials,
    validateRole: validateRole,
  };