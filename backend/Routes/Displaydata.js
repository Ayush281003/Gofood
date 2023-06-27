const express=require ('express')
const router=express.Router()


router.post('/fooddata',(req,resp)=>{
    try {
        resp.send([global.sample,global.foodcategory])
    } catch (error) {
        console.error(error.message)
            resp.send("server error")
    }
})

module.exports=router;