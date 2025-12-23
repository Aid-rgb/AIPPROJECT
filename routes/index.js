const express = require("express");
const router = express.Router();

const Bike = require("../models/Bike");
const User = require("../models/User");

// Главная
router.get("/", async (req, res) => {
    res.render("index");
});

// Страницы байков
router.get("/bikes/:type", async (req, res) => {
    const bikes = await Bike.find({ type: req.params.type });
    res.render("bikes", { bikes, type: req.params.type });
});

// Покупка
router.get("/purchase", async (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }

    const bikes = await Bike.find();
    res.render("purchase", { bikes });
});

// КУПИТЬ — ВАЖНО
router.post("/buy/:id", async (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }

    const bike = await Bike.findById(req.params.id);
    res.render("purchase-success", { bike });
});

// Регистрация
router.get("/register", (req, res) => {
    res.render("register");
});

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    if (
        !email.includes("@") ||
        !(email.endsWith(".com") || email.endsWith(".ru"))
    ) {
        return res.render("register", { error: "Некорректный email" });
    }

    if (password.length < 8) {
        return res.render("register", { error: "Пароль минимум 8 символов" });
    }

    const user = new User({ username, email, password });
    await user.save();

    res.redirect("/login");
});

// Вход
router.get("/login", (req, res) => {
    res.render("login");
});

router.post("/login", async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });

    if (!user) {
        return res.render("login", { error: "Неверные данные" });
    }

    req.session.user = user;
    res.redirect("/purchase");
});

// Выход
router.get("/logout", (req, res) => {
    req.session.destroy(() => {
        res.redirect("/");
    });
});

module.exports = router;
