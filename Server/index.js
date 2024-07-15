const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./Routes/book")


const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "PUT", "POST"],
    credentials: true
}))

app.use(express.json());

app.use('/auth', router)

mongoose.connect("mongodb://localhost:27017/Book-Store");

app.listen(4001, () => {
    console.log(`Server Started at ${4001}`)
})