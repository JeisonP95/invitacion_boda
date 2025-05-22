import express from "express";
import { createInvitation } from "../controllers/invitation.controller";

const router = express.Router();
router.post("/create", createInvitation);
export default router;