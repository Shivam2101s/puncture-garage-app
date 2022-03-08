const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect("mongodb+srv://shivam:shivam@cluster0.7nemm.mongodb.net/shops");
}