import express from 'express'
import { createMsg, getMsg } from '../controllers/messageCon.js'
const router = express.Router()


router.route('/msg')
    .get(getMsg)
    .post(createMsg)


export default router