const mongoose=require('mongoose')
const mongoUrl="mongodb://127.0.0.1:27017/gofoodmern"

const mongodb=async()=>{
    await mongoose.connect(mongoUrl,()=>{
       
        
        console.log("connected")
        const fetched_data= mongoose.connection.db.collection("sample");
        fetched_data.find({}).toArray( async function(err,data){
          const foodcategory=mongoose.connection.db.collection("foodcategory");
          foodcategory.find({}).toArray(function(err,catdata){
            if(err) console.log(err)
            else{
                global.sample=data;
                global.foodcategory=catdata;
            }
          })
        })
    
    
    })

}

module.exports=mongodb;
