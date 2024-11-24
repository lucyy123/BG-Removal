
import express from 'express';
import { webhooks } from '../controllers/userController';

const app = express.Router();




app.post("/webhooks",webhooks)


export default app;

