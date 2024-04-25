import { UserDTO } from '../dto/user.dto.js';
import db from "../models/index.models.js";

const usersServices = {
    add: async (userData) => {
        const user = await db.Users.create(userData);
        return new UserDTO(user);
    },
    getAll: async () =>{
        const users = await db.Users.findAll();
        return users.map(user => user.firstname)
    },
    getUserById: async (id) => {
        const users = await db.Users.findOne({ where: { id: id } });
        return users;
    }
}
export default usersServices;