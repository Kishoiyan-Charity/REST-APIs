import express from "express";
import {getAllUsers} from "../controllers/users";



const baseUrl = "/users"

const userRouter = express.Router();

userRouter.get(`${baseUrl}`, getAllUsers);

export { userRouter };


