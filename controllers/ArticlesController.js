const db = require(`../models/index.js`);

class ArticlesController {
  /**
   * Liste of Articles
   * @param {*} req
   * @param {*} res
   */
  liste(req, res) {
    db.Articles.findAll().then(articles =>
      res.render("articles/index", { articles })
    );
  }
  /**
   * Crea te a article Form
   * @param {*} req
   * @param {*} res
   */
  create(req, res) {
    return res.render("articles/create");
  }
  /**
   * Store a new article in database
   * @param {*} req
   * @param {*} res
   */
  store(req, res) {
    db.Articles.create(req.body).then(article => res.redirect("liste"));
  }

  /**
   * Update a article
   * @param {*} req
   * @param {*} res
   */
  update(req, res) {
    const id = req.params.id;
    db.Articles.findById(id).then(article =>
      res.render("articles/update", { article })
    );
  }
  /**
   * Upgrade a article in database
   * @param {*} req
   * @param {*} res
   */
  upgrade(req, res) {
    const id = req.params.id;
    db.Articles.update(req.body, { where: { id } }).then(article =>
      res.redirect("/articles/liste")
    );
  }
  /**
   * Remove an article in database
   * @param {*} req
   * @param {*} res
   */
  remove(req, res) {
    const id = req.params.id;
    db.Articles.destroy({
      where: { id }
    }).then(() => res.redirect("/articles/liste"));
  }

  /**
   * Show a article
   * @param {*} req
   * @param {*} res
   */
  show(req, res) {
    const id = req.params.id;
    db.Articles.findById(id).then(article =>
      res.render("articles/show", { article })
    );
  }
}

module.exports = ArticlesController;
