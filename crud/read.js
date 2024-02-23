//importing mongodb.js file
const dbConnect = require('../mongodb')

// const url = 'mongodb://127.0.0.1:27017';
// const databaseName = 'students'
// const client = new MongoClient(url);

const main=async ()=>{
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data )
 }
 
 main()