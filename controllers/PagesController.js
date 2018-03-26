/**
 * Pages Controller
 */
class PagesController {
  /**
   * Index Home
   * @param {*} req
   * @param {*} res
   */
  index(req, res) {
    return res.render("pages/index");
  }

  /**
   * Contact
   * @param {*} req
   * @param {*} res
   */
  contact(req, res) {
    return res.render("pages/contact");
  }
}

module.exports = PagesController;
