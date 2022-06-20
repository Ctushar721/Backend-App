import { Router } from "express";
import signup from "../controllers/signupController.js";
import login from "../controllers/loginController.js";

const router = Router();


router.route('/signup').post(signup);
router.route('/login').post(login);






export default router;