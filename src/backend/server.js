import express from 'express'
import { MongoClient } from "mongodb"
import cors from "cors"
import dotenv from 'dotenv';
dotenv.config({ path: './config.env' });

const app = express()
app.use(cors())
app.use(express.json())

const client = new MongoClient(process.env.ATLAS_URI)

let db

async function getPopular() {
    try {
        // console.log("attempting to connect")
        await client.connect()
        // console.log("connected")

        db = client.db("Proper-Reviews")
        // console.log("Connected to MongoDB; about to query")

        let data = await db.collection("works").find().toArray()
        // console.log("query complete")
        // console.log(data)

        return data

    } catch (err) {
        console.error("Mongo Error:",err)
        throw err
    } 
}

app.get("/api/getPopularWorks", async (req,res) => {
    // console.log("Get request received")
    const data = await getPopular()

    // console.log("data received from getPopular")
    // console.log(data)
    res.json(data)
    // console.log("response sent")
})


async function getWorkRatings(workId) {
    try {
        console.log("attempting to connect")
        await client.connect()
        console.log("connected")

        db = client.db("Proper-Reviews")
        console.log("Connected to MongoDB; about to query")

        let data = await db.collection("ratings").find({workID: workId}).toArray()
        console.log("reviews query complete")
        console.log(data)

        return data

    } catch (err) {
        console.error("Mongo Error:",err)
        throw err
    } 
}
app.get("/api/getWorkRatings/:id", async (req,res) => {
    const workid = +req.params.id  //url passes this as a string, so we convert it to a number
        console.log(`GET request for work number ${workid}'s reviews received`)
    const data = await getWorkRatings(workid)

        console.log("data received from getWorkRatings")
        console.log(data)
    res.json(data)
        console.log("response sent")
})


async function getSpecificWork(workId) {
    try {
            console.log("attempting to connect")
        await client.connect()
            console.log("connected")

        db = client.db("Proper-Reviews")
            console.log("Connected to MongoDB; about to query")

        let data = await db.collection("works").findOne({id: workId})
        console.log("work query complete")
        console.log(data)

        return data

    } catch (err) {
        console.error("Mongo Error:",err)
        throw err
    } 
}

app.get("/api/getSpecificWork/:id", async (req,res) => {
    const workid = +req.params.id  //url passes this as a string, so we convert it to a number
        console.log(`GET request for work number ${workid} received`)
    const data = await getSpecificWork(workid)

        console.log("data received from getSpecificWork")
        console.log(data)
    res.json(data)
        console.log("response sent")    
})


app.post("/api/submitReview", (req,res) => {
    console.log(`POST request received: req.body:`, req.body)
    formatReview(req.body)
    res.json("This is a test response from the server")
})

async function formatReview(review) {
    try {
            console.log("attempting to connect")
        await client.connect()
            console.log("connected")

        db = client.db("Proper-Reviews")
            console.log("Connected to MongoDB")

        db.collection("ratings").insertOne(
            {
                id: 0,  //need to generate unique id for this set of ratings.  perhaps user's id + timestamp?
                userID: 0, //this will eventually be passed via req.body
                workID: review.workID, //currently passed in req.body
                pillarWritingScore: review.Writing.score,
                pillarVisualsScore: review.Visuals.score,
                pillarSoundScore: review.Sound.score,
                pillarPerformanceScore: review.Performance.score
            })

        for (let key in review) { //loop through the review object
           if (review[key].comments?.length > 0){ //for review properties that are an object themselves and have a comments array:

                let pillarComments =  review[key].comments.map(el => ({ //define the documents and store them here
                        id: 0, //needs a unique id 
                        userID: 0, //later get from req.body 
                        workID: review.workID, 
                        pillar: key,
                        comment: el
                }))
                console.log("key:", key, "pillarComments:", pillarComments) //debug check
                db.collection("comments").insertMany(pillarComments)//insert those comments in the database
            }
        }
        
        console.log("formatReview complete")

    } catch (err) {
        console.error("Mongo Error:",err)
        throw err
    }
}

app.listen(5700, (req,res) => {
    console.log("listening on 5700")
})


//can we combine the get specific work and get work reviews into one server call?  Should we?
//both ratings and comments need a unique ID in the database
//should not be possible to add a rating or comment whose ID already exists in the database
    //might just check to see if rating's ID is already in the ratings collection; if it is, reject the whole submission, since users can only have one submission per work
