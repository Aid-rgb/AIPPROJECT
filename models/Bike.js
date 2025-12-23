const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    image: String,
    description: String
});

module.exports = mongoose.model("Bike", bikeSchema);
