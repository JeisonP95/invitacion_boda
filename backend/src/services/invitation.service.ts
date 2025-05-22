import { Invitation } from "../types/invitation";
import { conexion } from "../configs/conexion";

export const saveInvitation = async (invitation: Invitation): Promise<boolean> => {
    const [result]: any = await conexion.query(
        `INSERT INTO invitation 
            (id, name, email, phone, date, time) 
            VALUES (NULL, 
            '${invitation.name}', '${invitation.email}',
            '${invitation.phone}', '${invitation.date}', 
            '${invitation.time}')`
    );

    if (result.affectedRows <= 0) {
        throw new Error("Error creating invitation");
    }
    
    return true;
}