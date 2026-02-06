import express from 'express';
import http from 'http';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from 'compression';
import cors from 'cors'
import mongoose from 'mongoose';
import {authRouter} from "./router/authentication";
import {userRouter} from "./router/users";

const app = express();

app.use(cors({
    credentials: true,
}));

app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

const server = http.createServer(app)

server.listen(5054, () => {
    console.log('Server listening on http://localhost:5054');
});

const MONGO_URL ='mongodb+srv://kish:kish@cluster0.8md9kgx.mongodb.net/?appName=Cluster0';



mongoose.Promise= Promise;
// mongoose.connect(MONGO_URL);
mongoose.connect(MONGO_URL)
    .then(() => console.log(' MongoDB connected successfully'))
    .catch((err: Error) => console.error(' MongoDB connection error:', err));
mongoose.connection.on('error', (error: Error) => console.log(error))


app.use('/', authRouter);
app.use('/', userRouter);
