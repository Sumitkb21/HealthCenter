import express from "express" ;
import { getall } from "../controllers/patient.js";
import { register } from "../controllers/patient.js";
import { login } from "../controllers/patient.js";
import { makeRecord } from "../controllers/record.js";
import path from "path"

const router = express.Router();
router.get("/all", getall);
router.post("/register", register);
router.post("/login", login);
router.get("/record", (req, res) => {
    console.log( path.resolve());
    res.sendFile(path.join(path.resolve(), '/routes/index.html'));
});

router.post("/record",makeRecord);

//uses of parameters

export default router;