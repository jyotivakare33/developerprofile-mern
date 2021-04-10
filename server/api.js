const express = require('express');
const router = express.Router();

const developers = require('./routes/developers');
const sessions = require('./routes/sessions');

// Add json and urlencoded middleware
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use('/developers', developers);

router.use('/sessions', sessions);

module.exports = router;