const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.post('/adminLogin', (req, res) => {
  const { username, password } = req.body;
  const connection = require('./db-connection');

  const preparedStatement = connection.prepareStatement(
    `SELECT * FROM users WHERE username = ? AND password = ? AND user_type = 1`
  );
  preparedStatement.setString(1, username);
  preparedStatement.setString(2, password);

  preparedStatement.executeQuery((error, result) => {
    if (error) {
      console.error(error);
      res.send({ success: false, message: 'An error occured' });
    }
    else {
      if (result.length > 0) {
        const user = result[0];
        res.cookie('userId', user.id, {
          maxAge: 24 * 60 * 60 * 1000, //1 day onlyyy
        });
        res.redirect('.store/viewBooks.html');
        pw.println("<div class=\"tab\">Admin login Successful</div>");
        pw.println("<div class=\"tab\"><br/><a href=\".store/addBook.html\">ADD BOOKS</a><br/></div>");
        pw.println("<div class=\"tab\"><br/><a href=\".store/removeBook.html\">REMOVE BOOKS</a><br/></div>");
      }
      else {
        res.send({ sucess: false, message: 'Invalid username or password' });
      }
    }
  });
});
