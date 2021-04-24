const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()

let app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'timeless-app-frontend/build')));
    app.get('*',(req,res) =>
      {res.sendFile(path.resolve(__dirname, 'timeless-app-frontend', 'build', 'index.html'));
  });
}
app.get('/', (req, res) => {
    res.send("Server is working.")
})


app.listen(process.env.PORT, () => {
    console.log("Listening on port " + process.env.PORT)    
})