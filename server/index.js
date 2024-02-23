// Imports 
import express from "express"
import "dotenv/config"
import Pusher from 'pusher'
import { dbConnection } from './config/index.js'
import router from './routes/index.js'
import mongoose from 'mongoose';
// initializing
import cors from "cors"
const app = express()



// MIDDLEWARES 
app.use(express.json())
app.use(cors())
// DATABASE CONNECT
dbConnection()

// SETUP REAL-TIME PUSHER
const pusher = new Pusher({
    appId: "1438499",
    key: "690b6bfe90679fefc55a",
    secret: "22a0ea26eba97f05d67d",
    cluster: "eu",
    useTLS: true
});

// ADD EVENT LISTENER
const db = mongoose.connection
db.once('open', () =>
{
    console.log(`Database opened now 🤗🤗🤗`);
    const dbCollection = db.collection('messages');
    const changeStream = dbCollection.watch()
    changeStream.on('change', (change) =>
    {
        console.log(change);
        if (change.operationType === "insert")
        {
            const msg = change.fullDocument
            pusher.trigger('messages', 'inserted', {
                user: msg.user,
                massage: msg.message,
                time: msg.time,
                recived: msg.recived
            })
        } else
        {
            console.log(`Pusher Unexpected Error`);
        }
    })

})






// SET ROUTES
app.use('/v1', router)





app.listen(9090, () => { console.log(`Server is on`); })

