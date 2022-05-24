const express = require('express')
const cors = require('cors')

const PORT = 3000
const api = require('./routes/api')

const app = express()
app.use(cors())
app.use(express.json())


//localhost:300/api
app.use('/api', api)


//localhost:3000
app.get('/', (req, res)=>{
    res.send("Hello from server")
})

app.listen(PORT, (err)=>{
    if(err)
    {
        console.log(err.message)
    }
    else{
        console.log("Server running on localhost:"+PORT)
    }
})