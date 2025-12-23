const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/hdm_shop")
    .then(() => console.log("MongoDB подключена"))
    .catch(err => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
    secret: "hdm_secret",
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

//auth ПЕРВЫМ
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/index"));

app.listen(3000, () => {
    console.log("HDM сервер запущен: http://localhost:3000");
});
