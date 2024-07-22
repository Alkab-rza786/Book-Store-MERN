const express = require("express")
const cors = require("cors")
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose")
const bookRouter = require("./Routes/book")
const authRouter = require('./Routes/auth')


const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true
}))

app.use(express.json());
app.use(cookieParser());


app.use('/auth', authRouter)
app.use('/book', bookRouter)

mongoose.connect("mongodb://localhost:27017/Book-Store");

app.listen(4001, () => {
    console.log(`Server Started at ${4001}`)
})