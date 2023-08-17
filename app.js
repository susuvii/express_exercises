require('dotenv').config()

let express = require('express');
let app = express();
let port = process.env.PORT

app.get('/', (req, res) => {
    res.send("Welcome!");
})

app.listen(port, () =>{
  console.log('http//localhost:${port}/');
});
