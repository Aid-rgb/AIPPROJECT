const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Регистрация
router.get("/register", (req,res) => {
    res.render("register");
});

router.post("/register", async (req,res) => {
    await User.create(req.body);
    res.redirect("/login");
});

// Вход
router.get("/login", (req,res) => {
    res.render("login");
});

router.post("/login", async (req,res) => {
    const user = await User.findOne(req.body);
    if(user){
        req.session.user = user;
        res.redirect("/purchase");
    } else {
        res.send("Неверные данные");
    }
});

router.get("/logout", (req,res) => {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;
