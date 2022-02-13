const express = require('express');
const router = express.Router();

router.get('/errorRoute', (req, res) => {
    res
    .status(500)
    .json({message: 'Error'});
});

router.get('/successRoute', (req, res) => {
    res
    .status(200)
    .json({message: 'Success'});
});

router.get('/notFoundRoute', (req, res) => {
    res
    .status(404)
    .json({message: 'Notfound'});
});

module.exports = router;