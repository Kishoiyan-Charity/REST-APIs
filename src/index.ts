import express from 'express';
import http from 'http';
import bodyParse from "body-parser";
import cookieParser from "cookie-parser";
import compression from 'compression';
import cors from 'cors'


const app = express();

app.use(cors({
    credentials: true,
}));

app.use(bodyParse.json());
app.use(compression());
app.use(cookieParser());

const server = http.createServer(app)

server.listen(8080, () => {
    console.log(`Server listening on http://localhost:8080`);
});