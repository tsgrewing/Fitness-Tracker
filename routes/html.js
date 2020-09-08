const path = require("path");

module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/excercise.html"));
    });
    app.get("/excercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
}