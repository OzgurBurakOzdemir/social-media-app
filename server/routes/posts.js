const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>
{
    res.send('Don\'t worry be happy')
})

module.exports = router;