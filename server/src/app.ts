import cors from 'cors'
import { config } from 'dotenv'
import express, { Request, Response } from 'express'
import { ConnectDB } from './utils/MongoDB'

config()
const app = express()
const url = process.env.MONGO_URL as string;
const port = process.env.PORT || 4003
ConnectDB(url)



// --------------- Middlewares---------------
app.use(express.json())
app.use(cors({origin:"*"}))


app.use("/",(req : Request,res:Response)=>{
  res.status(200).json({
    success:true,
    message:'hello world'
  })
})

app.listen((port),()=>{
    console.log(`server is running on port ${port}`)
})
//---------------------- server listening---------------