
import express from 'express';
import { userCredits, webhooks } from '../controllers/userController';
import { authentication } from '../middlewares/auth';

const app = express.Router();




app.post("/webhooks", webhooks)



app.get("/getCredites", authentication, userCredits)



export default app;

