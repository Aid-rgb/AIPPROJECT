const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Главная страница
app.get("/", (req, res) => {
    res.render("index", { title: "Harley-Davidson Motorcycles" });
});

// Сервер
app.listen(3000, () => {
    console.log("HDM сервер запущен: http://localhost:3000");
});

const indexRouter = require("./routes/index");
app.use("/", indexRouter);
