const express = require("express");
const Debug = require("debug");
const path = require("path");
const app = express();
const port = 9000;
const debug = Debug("express:app");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const articles = require("./routes/articles");
const sassMiddleware = require("node-sass-middleware");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(bodyParser.json()); // API response en JSON
app.use(
  // donnée en get post non encodé par l'URL
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(
  sassMiddleware({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    indentedSyntax: true,
    sourceMap: true
  })
);

/**
 * Routing
 */
app.get("/", (req, res) => res.render("index"));
app.use("/articles", articles);

app.listen(port, () => {
  console.log("Example app listening on port port!");
});
