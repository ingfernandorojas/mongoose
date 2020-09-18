// Archivo .env
const dotenv = require('dotenv')
dotenv.config()
// Fin .env
const express = require('express')
const mongoose = require('mongoose')
const foodRouter = require('./routes/FoodRoutes')
const userRouter = require('./routes/userRoutes')
const port = process.env.PORT || 3000
const ATLAS_URI = process.env.ATLAS_URI;
const app = express()
var cors = require('cors')

app.use(express.json())

// cors
var allowedOrigins = ["http://localhost:3001"]
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', allowedOrigins);
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
// Fin cors

// Mongoose connect
mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
// Fin Mongoose connect

app.get("/", (req,res)=>{
    res.json({"Mensaje":"API v1.0.0"})
})

// Rutas
app.use(foodRouter)
app.use(userRouter)
// Fin Rutas

app.listen(port, () => { console.log('Server is running on port: '+port) })