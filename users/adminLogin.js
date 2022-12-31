const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true }));

app.post('/adminLogin', (req,res) => {
  const { username, password } = req.body;
  const connection = require('./db-connection');

  const preparedStatement = connection.prepareStatement(
    `SELECT * FROM users WHERE username = ? AND password = ? AND user_type = 1`
  );
  preparedStatement.setString(1,username);
  preparedStatement.setString(2,password);

  preparedStatement.executeQuery((error, result) => {
    if(error){
      console.error(error);
      res.send({success:false, message: 'An error occured'});
    }
    else{
      if(result.length > 0){
        res.send({sucess:true, user: result[0]});
      }
      else{
        res.send({sucess:false, message: 'Invalid username or password'});
      }
    }
  });
});
