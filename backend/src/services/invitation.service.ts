import { Invitation } from "../types/invitation";
import { conexion } from "../configs/conexion";

export const saveInvitation = async (invitation: Invitation): Promise<boolean> => {
    try {
        const result: any = await conexion.query(
            `INSERT INTO invitation 
            (id, name, email, phone, date, time) 
            VALUES (NULL, 
            '${invitation.name}', '${invitation.email}',
            '${invitation.phone}', '${invitation.date}', 
            '${invitation.time}')`
        );
        return result.affectedRows > 0;
    } catch (error) {
        throw new Error("Error creating invitation: " + error);
    }
}