const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GG');
})


module.exports = router