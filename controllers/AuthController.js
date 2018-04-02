const db = require(`../models/index.js`);
/**
 * Class Auth Controller
 */
class AuthController {
  /**
   * Page of Login
   * @param {*} req
   * @param {*} res
   */
  login(req, res) {
    if (req.session.views) {
      req.session.views++;
    } else {
      req.session.views = 123;
    }
    res.render("auth/login");
  }
}

module.exports = AuthController;
