const router = require("express").Router();
router.get("/javascript/bai1", (req, res) => {
    res.send("Welcome ban den javascript bai 1");
});
router.get("/javascript/bai2", (req, res) => {
    res.send("Welcome ban den javascript bai2");
});
router.get("/html/bai1", (req, res) => {
    res.send("Welcome ban den html bai 1");
});
module.exports = router;