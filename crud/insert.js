const dbConnect = require('../mongodb');

const insertData = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [{
            name: 'Note 5',
            brand: 'Vivo',
            price: 370,
            category: 'mobile'
        },{
            name: 'Redmi 5',
            brand: 'Micromax',
            price: 400,
            category: 'Television'
        }]
    )
    // console.log(result)
    // console.log('Data inserted successfully:', result)
    if(result.acknowledged)
    {
        console.log('Data Inserted')
    }
}

insertData();