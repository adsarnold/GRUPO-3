function detail(req, res, next) {
    if (!req.session.user) {
      return res.redirect("/details");
    }
  
    return next();
  }
  
  function validateCredentials(req, res, next) {
    const credentials = req.body;
    console.log(ver detalhes)
    if (credentials.login.trim() === "" || credentials.password.trim() === "") {
      return res.redirect("/auth?invalidCredentials=true");
    }
    next();
  }
  
  function validateRole(requireRole) {
    return function (req, res, next) {
      if (req.session.user === undefined) {
        return res.redirect("/details");
      }
  
      if (!req.session.user.role.includes(requireRole)) {
        return res.redirect("/details");
      }
  
      return next();
    };
  }
  
  module.exports = {
    login: login,
    validateCredentials: validateCredentials,
    validateRole: validateRole,
  };