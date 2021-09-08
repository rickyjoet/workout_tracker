const path = require("path");
const router = require("express").Router();

router.get("/exercise", (req, res) => {
    try {
      res.sendFile(path.join(__dirname, "../public/exercise.html"))
    } catch (err) {
      res.status(400).json(err);
    }

})

router.get("/stats", (req, res) => {
    try {
      res.sendFile(path.join(__dirname, "../public/stats.html"))
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  module.exports = router;