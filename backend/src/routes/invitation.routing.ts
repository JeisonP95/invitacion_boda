import express from "express";
import { createInvitation } from "../controllers/invitation.controller";

const router = express.Router();

router
  .post("", createInvitation)

export default router;