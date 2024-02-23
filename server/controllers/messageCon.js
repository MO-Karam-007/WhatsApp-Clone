import Message from '../models/Message.js'


export const createMsg = async (req, res) =>
{
    const msg = req.body
    const data = await Message.create(msg)

    console.log(`Creating msg`);
    res.status(201).json({
        status: "success",
        data
    })

}






export const getMsg = async (req, res) =>
{
    // const msg = req.body
    const data = await Message.find()

    res.status(201).json({
        status: "success",
        data
    })

}