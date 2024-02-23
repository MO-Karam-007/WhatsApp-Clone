import mongoose from "mongoose"




export const dbConnection = () =>
{
    mongoose
        .connect(process.env.DB_URL.replace("<PASSWORD>", process.env.DB_PW))
        .then(() =>
        {
            console.log(`DB CONNECTED`);
        }).catch((err) =>
        {
            console.log(`DB ERROR : `, err);
        })
}



