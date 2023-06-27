const express=require('express')
const app=express()
const port=5000
const mongodb=require('./db')
mongodb()
const cors=require('cors')

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

app.get('/',(req,resp)=>{
    resp.send("hola")
})
app.use(express.json())
app.use('/api',require('./Routes/CreatUser'))
app.use('/api',require('./Routes/Displaydata'))
app.listen(port,()=>{
    console.log(`port no ${port}`)
})