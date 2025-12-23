const mongoose = require("mongoose");
const Bike = require("./models/Bike");

mongoose.connect("mongodb://127.0.0.1:27017/hdm_shop");

const bikes = [
    {
        name: "Sportster",
        image: "/images/sportster.jpg",
        price: 1350000
    },
    {
        name: "Softail",
        image: "/images/softail.jpg",
        price: 1850000
    },
    {
        name: "Touring",
        image: "/images/touring.jpg",
        price: 2350000
    }
];

Bike.insertMany(bikes)
    .then(() => {
        console.log("✅ Байки добавлены в БД");
        mongoose.connection.close();
    });
