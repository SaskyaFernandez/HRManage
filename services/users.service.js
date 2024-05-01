import { roleDTO } from '../dto/role.dto.js';
import { UserDTO } from '../dto/user.dto.js';
import db from "../models/index.models.js";

const usersServices = {
    add: async (userData) => {
        const user = await db.Users.create(userData);
        return new UserDTO(user);
    },
    getAll: async () =>{
        const users = await db.Users.findAll();
        return users.map(user => new UserDTO({ ...user.dataValues }));
    },
    getUserById: async (id) => {
        const user = await db.Users.findOne({ where: { id: id } });
        if (!user) {
            throw new Error('User not found');
        }
        let roles = await user.getRoles(); 
        let rolesDTO = roles.map(role => new roleDTO({...role.dataValues}))
        let userParam = {
            ...user.dataValues,
            role: rolesDTO
        };
        // comptètement crazy
        return new UserDTO({...userParam});
    },
    getUserByEmail: async (email) => {
        const user = await db.Users.findOne({ where: { email: email } });
        if (!user) {
            throw new Error('User not found');
        }
        let roles = await user.getRoles();
        let rolesDTO = roles.map(role => new roleDTO({ ...role.dataValues }))
        let userParam = {
            ...user.dataValues,
            role: rolesDTO
        };
        // comptètement crazy
        return new UserDTO({ ...userParam });
    }
}
export default usersServices;