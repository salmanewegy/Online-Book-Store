const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("user/registrationView/register", {
      pageTitle: "Registration"
  });
});
app.post('/userRegister', (req, res) {
  const uName = req.body[UsersDBConstants.COLUMN_USERNAME];
  const pWord = req.body[UsersDBConstants.COLUMN_PASSWORD];
  const fName = req.body[UsersDBConstants.COLUMN_FIRSTNAME];
  const lName = req.body[UsersDBConstants.COLUMN_LASTNAME];
  const addr = req.body[UsersDBConstants.COLUMN_ADDRESS];
  const phNo = req.body[UsersDBConstants.COLUMN_PHONE];
  const mailId = req.body[UsersDBConstants.COLUMN_MAILID];

  let data = req.body;
  
  try {
    // Insert user into database
    const result = await con.query(
      "INSERT INTO " + UsersDBConstants.TABLE_USERS + "  VALUES (?,?,?,?,?,?,?,?)",
      [uName, pWord, fName, lName, addr, phNo, mailId, 2]
    );
    
    if (result.affectedRows === 1) {
      res.send("User Registered Successfully");
    } else {
      res.send("Sorry for interruption! Register again");
    }
  } catch (error) {
    console.error(error);
    res.send("An error occurred while registering the user.");
  } 
});

