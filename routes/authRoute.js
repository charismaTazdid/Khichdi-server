import express from "express";
import { createUserAccount, logInUser } from "../controllers/auth.js";

const router = express.Router();

// POST -> Create
router.post('/createAccount', createUserAccount);

// POST -> Login
router.post('/login', logInUser);

export default router;