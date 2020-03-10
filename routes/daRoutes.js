const router = require("express").Router();
const path = require("path");

// This is to connect to exercise.html
router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// This is to connect to stats.html
router.get("/stats", (req,res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;