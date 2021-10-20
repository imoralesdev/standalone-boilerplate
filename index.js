const express = require("express");
const bodyParser = require("body-parser");
const errorHandler = require("errorhandler");
const logger = require("morgan");
const methodOverride = require("method-override");

const port = process.env.PORT || 8080;
const path = require("path");
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(errorHandler());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/public/")));

app.get("/", (req, res) => {
  res.render("pages/home", {
    template: "home",
    title: "Example Web Page | Home"
  });
});

app.get("/about", (req, res) => {
  res.render("pages/about", {
    template: "about",
    title: "Example Web Page | About"
  });
});

app.get("/portfolio", (req, res) => {
  res.render("pages/portfolio", {
    template: "portfolio"
  });
});

app.listen(port, () =>
  console.log(`Dev server running at http://localhost:${port}`)
);
