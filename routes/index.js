const express = require("express");
const router = express.Router();

// Главная
router.get("/", (req, res) => {
    res.render("index", { title: "Harley-Davidson Motorcycles" });
});

// Sportster
router.get("/sportster", (req, res) => {
    res.render("bike", {
        title: "Harley-Davidson Sportster",
        picture: "/images/sportster.jpg",
        type: "Городской байк",
        engine: "V-Twin 1250 см³",
        power: 121,
        weight: 228,
        year: 2023,
        desc: "Sportster — это динамичный городской мотоцикл, созданный для манёвренной езды, сочетает агрессивный дизайн и отличную управляемость."
    });
});

// Softail
router.get("/softail", (req, res) => {
    res.render("bike", {
        title: "Harley-Davidson Softail",
        picture: "/images/softail.jpg",
        type: "Круизер",
        engine: "Milwaukee-Eight 1870 см³",
        power: 155,
        weight: 304,
        year: 2024,
        desc: "Softail сочетает в себе классический внешний вид Harley-Davidson и современные технологии, обеспечивая комфортную езду на дальние расстояния."
    });
});

// Touring
router.get("/touring", (req, res) => {
    res.render("bike", {
        title: "Harley-Davidson Touring",
        picture: "/images/touring.jpg",
        type: "Туристический мотоцикл",
        engine: "Milwaukee-Eight 1868 см³",
        power: 158,
        weight: 390,
        year: 2024,
        desc: "Серия Touring предназначена для дальних путешествий, оснащена комфортным сиденьем, кофрами и современной электроникой."
    });
});

module.exports = router;
