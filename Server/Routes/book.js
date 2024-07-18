const express = require('express');
const BookModel = require("../models/book")


const router = express.Router();

router.post('/add', async (req, res) => {
    const { name, authorName, description, price, categories } = req.body;

    BookModel.create({
        name, authorName, description, price, categories
    }).then(result => {
        return res.status(200).json(result)
    }).catch(err => console.log(err))

})

router.get('/get', async (req, res) => {
    await BookModel.find().
        then(book => {
            return res.status(200).json(book)
        }).
        catch(err => console.log(err))
})

module.exports = router