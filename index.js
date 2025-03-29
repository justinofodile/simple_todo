const app = require('./app')
const PORT = process.env.PORT || 8000;


// Listen to server
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
    
})