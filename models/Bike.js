const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
    name: String,
    engine: String,
    power: Number,
    weight: Number,
    type: String,
    year: Number
});

module.exports = mongoose.model("Bike", bikeSchema);
