import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
const app = express();
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(cors());

//Database pass

connectDB(DATABASE_URL);
app.use(express.json());
app.use(
    express.urlencoded({ extended: true })
);

//Load Routes
app.use('/api/user', userRoutes);


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})