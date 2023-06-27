const express = require('express')
const app = express()
app.get("/",(request, response) =>{
    response.send('hello World how are you')

});
app.listen(41592);