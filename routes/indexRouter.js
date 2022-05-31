const express = require('express');
const router = express.Router();
router.get("/", (req, res) => {
    return res.send("ROUTER FUNCIONANDO");
})


router.get('/series', (req, res) => {
    const series = ["Friends", "Family Guy", "Rick y Morty"];
    return res.send(series);
});

module.exports = router;