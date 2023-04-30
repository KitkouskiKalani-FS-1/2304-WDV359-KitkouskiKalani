## bcrypt
This code snippet shows my use of Bcrypt on a project to register and login a user while only using bcrypt and not having any data in plain text.<br><br>

```Javascript
const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  res.send('User registered successfully');
});

// Route for logging in a user
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const isMatch = bcrypt.compareSync(password, hashedPassword);
  if (isMatch) {
    res.send('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```