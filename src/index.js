const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv')
const app = express()
const routerv = require('./routes/user.routes')

app.use(express.json())
app.use('/', routerv)

const port = 4000
dotenv.config()
let databaseUrl = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@komparas.jx1hf07.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(databaseUrl).then(()=>app.listen(port, ()=>{
    console.log(`server started on port ${port}`);
}))
