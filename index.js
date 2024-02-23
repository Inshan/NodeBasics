// console.log("submit");
// var a = 20
// var b = 30
// var c = 40
// console.warn(a+b+c)

// const fs = require('fs');
// console.log("Code step by step");
// fs.writeFileSync("hello.txt", "Like N subscribers");

// ----------------------------------------------------

// const colors= require('colors');
// console.log("Package.json".blue);

// console.warn('code step by step');
// console.log(100+20);

// ----------------------------------------------------

// const http=require('http');
// const data = require('./data');
// http.createServer((req, resp)=>{
//     resp.writeHead(200,{'Content-Type': 'application/json'});
//     resp.write(JSON.stringify(data))
//     resp.end();
// }).listen(4500);
// console.log(process);

// ----------------------------------------------------

// const fs= require('fs');
// const input = process.argv;
// if(input[2]=='add')
// fs.writeFileSync(input[3], input[4]);
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log('Invalid Input!');
// }

// ----------------------------------------------------

// const fs = require('fs');
// fs.writeFileSync('apple.txt','Hi! I love Apple.')

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// console.warn(dirPath)

// for (i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath + "/apple" + i + ".txt", "a simple text file");
// }

// fs.readdir(dirPath,(err, files)=>{
//     console.log(files);
//     i=0;
//     // console.warn(files)
//     files.forEach((item)=>{
//         console.log("FileName"+i+" is: ",item);
//         i=i+1;
//     })
// })

// ----------------------------------------------------

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = dirPath+'/apple.txt';
// const filePath_rename = dirPath+'/fruit.txt';
// fs.writeFileSync(filePath, 'This is a simple text file.');

// fs.readFile(filePath,(err, item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath,'I want to add some more!', (err)=>{
//     if(!err) console.log('file is updated');
// });

// fs.rename(filePath, filePath_rename, (err)=>{
//     if(!err) console.log('File name is updated!');
// })

// fs.unlinkSync(filePath, (err)=>{
//     if(!err) console.log('File is deleted!');
// })


// ----------------------------------------------------

//ASYNC CONCEPT
// console.log("start exe ...");
// setTimeout(() => {
//     console.log("logic exe...");
// }, 2000)
// console.log("complete exe ...");

// Drawback of ASYNC
// let a = 10;
// let b = 0;
// setTimeout(() => {
//     b=20;
// }, 2000)
// console.log(a+b); //output is 10 instead of 30

// ----------------------------------------------------

// let a = 20;
// let b = 0;
// setTimeout(() => {
//     b=30;
// }, 2000)
// console.log(a+b); //output is 10 instead of 20

// a = 20;
// b = 0;
// let waitingData = new Promise((resolve, reject) => { 
//    
//      promise is used to wait the execution of tasks 
//      so that it can be executed later.

//     setTimeout(() => {
//        resolve(30);
//     })
// })

// waitingData.then((data) => {
//     console.log(a + data);
// })

// ----------------------------------------------------

// console.log("Starting ...");

// setTimeout(() => {
//     console.log("2 second log");
// }, 2000);

// setTimeout(() => {
//     console.log("0 second log");
// }, 0);

// console.log("Finishing ...");

// Architecture of Node:
// call stack, node apis, callback queue

// ----------------------------------------------------

// const express = require('express');
// const app = express();
// app.get('', (req, res) => {
//     res.send('Hello, This is Home Page.');
// });

// app.get('/about', (req, res) => {
//     res.send('Hello, This is About Us Page.');
// });

// app.listen(4500);

// need to restart to get changes
// u can use nodemon for continuous execution...

// ----------------------------------------------------

// 3:01:00

// to load api we use get approach

// ----------------------------------------------------

// 'render' meaning' display'
// const express = require('express');
// const app = express();

// app.get("", (req, resp) => {
//     resp.send("<h1>This is Home Page!</h1>");
// })

// app.get("/input", (req, resp) => {
//     resp.send(`
//         <input type="text" placeholder="UserName:" value="${req.query.name}"/>
//         <button>Click me</button>
//     `);
// });
// app.listen(4500);

// app.get("/jsondata", (req, resp) => {
//     resp.send(
//         [{
//             name: 'Rohini',
//             Surname: 'Rajbanshi'
//         },
//         {
//             name: 'Inshan',
//             Surname: 'Bhattarai'
//         }]        
//     )
// });

// app.get("",(req, resp)=>{
//     resp.send(`
//         <h1>Welcome to Link</h1>
//         <a href="/jsondata">Goto JsonLog Page</a>
//         `
//     )

// })

// ----------------------------------------------------

// const express = require('express');
// const path = require('path');
//path is used to access folder

// const app = express();
// const publicPath=path.join(__dirname, 'public');

// app.use(express.static(publicPath));
//static loads static content
// can put any name in the pages

// app.get('/aboutpage',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// });

// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/home.html`)
// });

// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// });
// app.listen(4500);

// (( * ))--if page is not registered then '*' symbolizes
// rest of the pages

// ----------------------------------------------------

// const express = require('express');
// const app = express();
// const path = require('path');
// const publicPath=path.join(__dirname,'public')
// app.set('view engine', 'ejs');

// app.get("",(_, resp)=>{
//     resp.sendFile(`${publicPath}/home.html`)
// })
// app.get('/profile',(_,resp)=>{
//     const user={
//         name:'inshan bhattarai',
//         email:'inshan@awesome.com',
//         city:'Khaansaar',
//         skills:["PHP","JS", "C++"]
//     }
//     resp.render(`profile`,{user});
// });

// app.get("/login",(_, resp)=>{
//     resp.render('login');
// })
// app.listen(4500);

// ----------------------------------------------------

// const express = require('express');
// const app = express();

// const reqFilter=(req, resp, next)=>{ 
//     //next is a function that controls whether to 
//     //execute others functioins or not.
//     if(!req.query.age){
//         resp.send("Please provide age!")
//     }
//     else if(!(req.query.age < 18)){
//         resp.send("You cannot access this page.")
//     }else{
//         next();
//     }
//     // console.log('reqFilter')

//     // Here if we run it in browser like below
//     // http://localhost:4500/users?age=1
//     // the users page will be displayed.

//     // Here if we run it in browser like below
//     // http://localhost:4500/users
//     // "Please provide age will be displayed"
// }

// app.use(reqFilter)

// app.get('',(req, resp)=>{
//     resp.send('Welcome to Home Page')
// });

// app.get('/users',(req, resp)=>{
//     resp.send('Welcome to Users Page')
// });

// app.get('/about',(req, resp)=>{
//     resp.send('Welcome to About Page')
// });


// app.listen(4500);

// ----------------------------------------------------

// const express = require('express');
// const app = express();

// const reqFilter = (req, resp, next) => {
//     // next is a function that controls whether to 
//     // execute other functions or not.
//     if (!req.query.age) {
//         resp.send("Please provide age!")
//     } else if (!(req.query.age < 18)) {
//         resp.send("You cannot access this page.")
//     } else {
//         next();
//     }
// }


// to filter all the (app.get)s, we use
// app.use(reqFilter)

// to filter only one or more (as needed)
// app.get, we simply write reqFilter in the 
// app.get as a parameter 

// app.get('/', (req, resp) => {
//     resp.send('Welcome to Home Page')
// });

// app.get('/users', reqFilter, (req, resp) => {
//     resp.send('Welcome to Users Page')
// });

// app.get('/about', (req, resp) => {
//     resp.send('Welcome to About Page')
// });

// app.listen(4500);

// ----------------------------------------------------

// const express = require('express');
// const reqFilter = require('./middleware')
// const app = express();
// const route = express.Router();

// route.use(reqFilter)

// app.get('/', (req, resp) => {
//     resp.send('Welcome to Home Page')
// });

// app.get('/users', (req, resp) => {
//     resp.send('Welcome to Users Page')
// });

// route.get('/about', (req, resp) => {
//     resp.send('Welcome to About Page')
// });

// route.get('/contact', (req, resp) => {
//     resp.send('Welcome to Contact Page')
// });

// app.use('/', route);

// app.listen(4500);

// ----------------------------------------------------

// route level middleware - single, group, global routes
// application level middleware - only globally available

// ----------------------------------------------------


//importing mongodb.js file
// const dbConnect = require('./mongodb')

// const url = 'mongodb://127.0.0.1:27017';
// const databaseName = 'students'
// const client = new MongoClient(url);

// const main=async ()=>{
//     let data = await dbConnect();
//     data = await data.find({}).toArray();
//     console.log(data )
//  }

//  main()

// ----------------------------------------------------
// ----------------------------------------------------

// MONGOOSE START
// --------------

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/students')

// const commentSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     brand: String,
//     category: String
// });

// ----------------------------------------------------
// SAVE MODEL

// const main = async () => {
//     const CommentsModel = mongoose.model('comments', CommentSchema)
//     let data = new CommentsModel({
//         name: 'm8',
//         age: 35,
//         brand: "Knoxville",
//         category: "Car"
//     })
//     let result = await data.save()
//     console.log(result)
// }

// main()

// ----------------------------------------------------
// UPDATE MODEL

// const updateInDB = async () => {
//     const comment = mongoose.model('comments', commentSchema)
//     let data = await comment.updateOne(
//         { name: 'm8' },
//         { $set: { age: 435, name: 'Nicholas Flammel' } }
//     )
//     console.log(data)
// }

// updateInDB()

// ----------------------------------------------------
// DELETE MODEL

// const deleteInDB = async () => {
//     const comment = mongoose.model('comments', commentSchema)
//     let data = await comment.deleteOne(
//         { name: 'Nicholas Flammel' }
//     )
//     console.log(data)
// }

// deleteInDB()

// ----------------------------------------------------
// FIND MODEL
// const findInDB = async()=>{
//     comment = mongoose.model('comments',commentSchema)
//     const data = await comment.find({name: 'Nicholas Flammel'})
//     console.log(data)
// }

// findInDB()

// ----------------------------------------------------

// const express = require('express');
// require('./config')
// const Comment = require('./comment')

// const app = express()
// app.use(express.json())

// app.post('/create', async (req, resp) => {
//     let data = new Comment(req.body)
//     let result = await data.save()
//     console.log(result)
//     resp.send(result)
// })

// app.get("/list", async (req, resp) => {
//     let data = await Comment.find()
//     resp.send(data)
// })

// app.delete("/delete/:_id", async (req, resp) => {
//     console.log(req.params)
//     data = await Comment.deleteOne(req.params)
//     resp.send(data)
// })

// app.put("/update/:_id", async (req, resp) => {
//     console.log(req.params)
//     let data = await Comment.updateOne(
//         // condition
//         req.params,
//         {
//             $set: req.body
//         })
//         resp.send(data)
// })
// app.listen(4500)

// ----------------------------------------------------

const express = require('express');
require('./config')
const Comment = require('./comment')

const app = express()
app.use(express.json())

app.get("/search/:key", async (req, resp) => {
    console.log(req.params.key)
    let data = await Comment.find(
        {
            "$or": [

                { "name": { $regex: req.params.key } },
                { "title": { $regex: req.params.key } },
                { "author": { $regex: req.params.key } }
            ]

        })
    resp.send(data)
})
// app.listen(4500)

// ----------------------------------------------------

// const express = require('express')
// const multer = require('multer')
// const app = express()
// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "uploads")
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "_" + Date.now() + ".jpg")
//         }
//     })
// }).single("user_file");

// app.post("/upload", upload, (req, resp) => {
//     resp.send("File Uploaded")
// })

app.listen(4500)