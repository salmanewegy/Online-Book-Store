const express = require('express');
const app = express();
app.use

router.get("/", (req, res) => {
    res.render("users/login", {
        pageTitle: "Login"
    });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'admin' && password === 'password') {
    req.session.authenticated = true;
    res.redirect("/");
  } else {
    res.render("users/login", {
                        pageTitle: "Error",
                        error: "Incorrect password."
                    })
  }
});

module.exports = router;