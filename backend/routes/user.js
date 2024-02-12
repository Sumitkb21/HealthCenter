import express from "express" ;
import { getall } from "../controllers/patient.js";
import { register } from "../controllers/patient.js";
import { login } from "../controllers/patient.js";


const router = express.Router();

router.get("/all", getall);
router.post("/register", register);
router.post("/login", login);

//uses of parameters

export default router;