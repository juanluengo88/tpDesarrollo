import express from "express"

const app = express()

app.use(express.json())

app.get("/healthCheck",(req,res)=>{
    res.json({
        "status":"ok"
    })
    res.status(200)
})

const port = 3000

app.listen(port,()=>
    {
        console.log("servidor levantado en el puerto " + port)
    }
)

