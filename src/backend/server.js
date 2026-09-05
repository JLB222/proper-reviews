import express from 'express'
import { MongoClient } from "mongodb"
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

const app = express()
app.use(cors())

const client = new MongoClient(process.env.ATLAS_URI)

let db

async function getPopular() {
    try {
        console.log("attempting to connect")
        await client.connect()
        console.log("connected")

        db = client.db("Proper-Reviews")
        console.log("Connected to MongoDB; about to query")

        let data = await db.collection("works").find().toArray()
        console.log("query complete")
        console.log(data)

        return data

    } catch (err) {
        console.error("Mongo Error:",err)
        throw err
    } 
}



app.get("/api/getPopularWorks", async (req,res) => {
    console.log("Get request received")
    const data = await getPopular()

    console.log("data received from getPopular")
    console.log(data)
    res.json(data)
    console.log("response sent")
})

app.listen(5700, (req,res) => {
    console.log("listening on 5700")
})