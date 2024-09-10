// Set up html route
const router = require("express").Router();
const path = require("path");

// respond with notes
router.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// catch all response, wildcard
router.get("*", (req, res) =>{
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router