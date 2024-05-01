import { roleDTO } from '../dto/role.dto.js';
import db from "../models/index.models.js";
const rolesServices = {
    getAll: async () => {
        try {
            const roles = await db.Roles.findAll();
            return roles.map(role => new roleDTO({ ...role.dataValues }));
        } catch (error) {
            throw new Error(error.message);
        }
    },

    getRoleById: async (roleId) => {
        try {
            const role = await db.Roles.findByPk(roleId);
            if (!role) {
                throw new Error("Role not found");
            }
            return new roleDTO(role.dataValues);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    getRolesByUserId: async (userId) => {
        try {
            const user = await db.Users.findByPk(userId);
            if (!user) {
                throw new Error('User not found');
            }
            return await user.getRoles();
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

export default rolesServices;
