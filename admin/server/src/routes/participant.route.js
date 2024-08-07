
const express = require('express');
const { addparticipant } = require('../controllers/participant.controllar');
const userRouter = express.Router();

/**
 * /api/v1/admin : POST
 */
userRouter.post('/',addparticipant);

module.exports = userRouter;