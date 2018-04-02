/*********************************************************************************************************************************************
 * *************************************************************************
 * *************************************************************************
 *  Configuration of Frameworks
 * *************************************************************************
 * *************************************************************************
 ******************************************************************************************************************************************/

const express = require("express");
const Debug = require("debug");
const path = require("path");
const app = express();
const port = 3000;
const debug = Debug("express:app"); // Module for Debug
const logger = require("morgan"); // Module for Log
const bodyParser = require("body-parser"); // Module for POST/GET datas
const cookieParser = require("cookie-parser"); // Module for cookie in Session
const sassMiddleware = require("node-sass-middleware");
const session = require("express-session");

app.use(express.static(__dirname + "/public")); // all statics files in /public
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

/**
 * Configuration of Session
 */
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "*****JeSuisLaClefSecrèteWild2018*****",
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request.
    cookie: { maxAge: 60000 }, // lifetime of cookie
    saveUninitialized: false // Forces a session that is "uninitialized" to be saved to the store. A session is uninitialized when it is new but not modified.
  })
);
/**
 * Store in local session all
 */
app.use((req, res, next) => {
  res.locals.session = req.session;
  next();
});

/*********************************************************************************************************************************************
 * *************************************************************************
 * *************************************************************************
 *  Routing
 * *************************************************************************
 * *************************************************************************
 ******************************************************************************************************************************************/

/**
 * Routing
 */
const articles = require("./routes/articles");

app.get("/", (req, res) => res.render("index"));
app.use("/articles", articles);

const auth = require("./routes/auth");
app.use("/auth", auth);

app.listen(port, () => {
  console.log("Example app listening on port port!");
});
