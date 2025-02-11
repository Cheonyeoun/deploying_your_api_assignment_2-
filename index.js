require('dotenv').config();

const express = require('express');
const app = express();
const port = 3000;

const isAdmin = process.env.IS_ADMIN === 'true';

console.log(isAdmin ? "Admin privileges granted." : "Access restricted. Admin only.");

app.get('/', (req, res) => {
  if (isAdmin) {
    res.json({ message: "Welcome, Admin!", data: ["Admin Data 1", "Admin Data 2"] });
  } else {
    res.json({ message: "Welcome, User!", data: ["User Data 1", "User Data 2"] });
  }
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
