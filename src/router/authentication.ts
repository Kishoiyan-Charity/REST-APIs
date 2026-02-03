import express from "express";

import { register} from "../controllers/authentication";

export default ( router: express.Router) => {
    router.post('/auth/register/', register);
}

const baseUrl = "/auth"

const authRouter = express.Router();

authRouter.post(`${baseUrl}/register`, register);

export { authRouter };


