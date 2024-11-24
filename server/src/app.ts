import cors from 'cors'
import { config } from 'dotenv'
import express, { Request, Response } from 'express'
import { ErrorMiddleware } from './middlewares/ErrorHandler'
import { ConnectDB } from './utils/MongoDB'

// ------------------------- Routes Imports----------------------
import userRoutes from './routes/userRouter'



config()
const app = express()
const url = process.env.MONGO_URL as string;
const port = process.env.PORT || 4003
ConnectDB(url)



// --------------- Middlewares---------------
app.use(express.json())
app.use(cors({ origin: "*" }))


app.use("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'hello world'
  })
})

//---------------- initilizing the routes----------------
app.use('/api/v1/user', userRoutes)

// ------------------- Error Middleware-----------------

app.use(ErrorMiddleware)


//---------------------- server listening---------------
app.listen((port), () => {
  console.log(`server is running on port ${port}`)
})