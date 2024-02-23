const express = require('express')
const dbConnect = require('./mongodb')
const app = express();
const mongodb = require('mongodb'); 
//for post data
app.use(express.json())

app.get('/', async (req, resp) => {
    let data = await dbConnect()
    result = await data.find().toArray()
    resp.send(result)
})

// ----------------------------------------------------
// we can give same url to get and post. 
// No contradiction will happen.

app.post('/', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertMany(req.body)
    resp.send(result)

    // resp.send({name: "Inshan Bhattarai"})
})

app.listen(4500)

// ----------------------------------------------------


app.put('/:name', async (req, resp) => {
    // console.log(req.body)
    let data = await dbConnect()
    result = await data.updateOne(
        // {name:"Iphone 13"},
        // {name:{req.body.name}}
        { name: req.params.name }, //first condition
        // if :name on top then req.params.name
        { $set: req.body }
    )
    resp.send({ result: "Update" })
})

// ----------------------------------------------------

// app.delete('/:id', async(req, resp)=>{
//     // console.log(req.params.id)
//     const data = await dbConnect()
//     const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
//         //for object id's above
//     resp.send(result)
// })

app.delete('/:id', async(req, resp)=>{
    // console.log(req.params.id)
    const data = await dbConnect()
    const result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
        //for object id's above
    resp.send(result)
})
