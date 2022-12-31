const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/buyBooks',  (req, res) => {

  try {
    const con = await DBConnection.getCon();

    // -----------------Query all books from the books table
    const [rows] = await con.query(
      "SELECT * FROM " + BooksDBConstants.TABLE_BOOK
    );

    // Render the ViewBooks.html template and include the book data
    res.render('ViewBooks.html', { books: rows });
  } catch (error) {
    console.error(error);
    res.send("------An error occurred-------");
  }
});

app.post('/buyBooks',  (req, res) => {
  try {
   const con = await DBConnection.getCon();

    for (let i = 1; i <= Object.keys(req.body).length / 2; i++) {
      if (req.body["checked" + i] === "pay") {
        const bCode = req.body["checked" + i];
        const qty = req.body["qty" + i];

        }
    }
    }
});