import express from "express";
import {deleteUser, getAllUsers, updateUser} from "../controllers/users";
import {isAuthenticated, isOwner} from "../middlewares";
import {getUserById} from "../db/users";


const baseUrl = "/users"

const userRouter = express.Router();

userRouter.get(`${baseUrl}`, getAllUsers, isAuthenticated);
userRouter.get(`${baseUrl}/:id`, deleteUser, isOwner, isAuthenticated);
userRouter.patch(`${baseUrl}/:id`, updateUser, isOwner, isAuthenticated);

export { userRouter };


