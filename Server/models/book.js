const mongoose = require('mongoose')


const BookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    authorName: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    categories: { type: String, required: true },
})

const BookModel = mongoose.model("bookUser", BookSchema);
module.exports = BookModel;