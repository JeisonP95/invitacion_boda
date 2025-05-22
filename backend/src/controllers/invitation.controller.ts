import { Request, Response } from "express";
import { saveInvitation } from "../services/invitation.service";

export const createInvitation = async (_req: Request, res: Response): Promise<void> => {
  try {
    const invitation = _req.body;
    const response = await saveInvitation(invitation);
    if (response) res.status(200).json({ message: "Invitation created successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error creating invitation" });
    throw new Error("Error creating invitation: " + error);
  }
};
