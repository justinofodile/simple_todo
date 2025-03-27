const express = require('express')
const PORT = 8000;


//Initialize App
const app = express();

//Set view engine
app.set('view engine', 'ejs');

// Listen to server
app.listen(PORT, ()=>{
    console.log('Server running on port ' + PORT)
})