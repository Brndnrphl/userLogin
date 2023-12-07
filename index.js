const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const sqlite = require("sqlite3");
const bcrypt = require("bcrypt");

const db = new sqlite.Database("./login.db");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  "/static",
  express.static(path.join(__dirname, "static"), {
    setHeaders: (res, path, stat) => {
      if (path.endsWith(".css")) {
        res.set("Content-Type", "text/css");
      }
    },
  })
);

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});

app.get("/", (req,res) => res.redirect("/login"));

app.get("/login", (req, res) => {
  res.render("template", { page: "login" });
});

app.get("/register", (req, res) => {
  res.render("template", { page: "register" });
});

app.post("/login", (req, res) => {
  let email = req.body.email
  let password = req.body.password
  const query = `SELECT hash FROM login_data WHERE email = '${email}'`;
  db.get(query, (err, row) => {
    if(err) {
      console.log(err)
      return
    }
    if (!row) {
      res.render("template", { page: "failure" })
      console.log("Login failed")
      return;
    }

    let hash = row.hash

    bcrypt.compare(password, hash, (err, result) => {
      if(err) {
        console.log(err)
        return
      }
      if(result) {
        res.render("template", { page: "success", email: email})
        console.log("Login successful")
      } else {
        res.render("template", { page: "failure" })
        console.log("Login failed")
      }
    })

  })
});

app.post("/register", (req, res) => {
  bcrypt.genSalt(10, (error, salt) => {
    bcrypt.hash(req.body.password, salt, (error, hash) => {
      const email = req.body.email;
      db.run("INSERT INTO login_data (email, hash) VALUES (?, ?)", email, hash);
    });
  });
  res.redirect("/login")
});
