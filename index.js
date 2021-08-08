const express = require("express");
const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => res.send("Home page route"));

app.get("/about", (req, res) => res.send("About page route"));

app.get("/portfolio", (req, res) => res.send("Portfolio page route"));

app.get("/contact", (req, res) => res.send("Contact page route"));

app.listen(port, () => console.log(`Dev server running at http://localhost:${port}`));
