import express from "express";

import {login, register} from "../controllers/authentication";



const baseUrl = "/auth"

const authRouter = express.Router();

authRouter.post(`${baseUrl}/register`, register);
authRouter.post(`${baseUrl}/login`, login);

export { authRouter };


