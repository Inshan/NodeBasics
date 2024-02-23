const dbConnect = require('../mongodb');

const deleteData = async()=>{
    let data = await dbConnect();
    result = await data.deleteMany({
        name:'Note 5'
    })
    if(result.acknowledged){
        console.log('Data Deleted!')
    }
}

deleteData();