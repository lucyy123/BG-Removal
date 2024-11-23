import cors from 'cors'
import { config } from 'dotenv'
import express from 'express'
import { ConnectDB } from './utils/MongoDB'

config()
const app = express()
const url = process.env.MONGO_URL as string;
const port = process.env.PORT || 4003
ConnectDB(url)



// --------------- Middlewares---------------
app.use(express.json())
app.use(cors({origin:"*"}))


app.use("/",(req,res)=>{
    res.send("Server is working")
})

app.listen((port),()=>{
    console.log(`server is running on port ${port}`)
})
//---------------------- server listening---------------