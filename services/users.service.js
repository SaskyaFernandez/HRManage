import { roleDTO } from '../dto/role.dto.js';
import { UserDTO } from '../dto/user.dto.js';
import { userRolesDTO } from '../dto/userRoles.dto.js';
import db from "../models/index.models.js";

const usersServices = {
    add: async (userData) => {
        let user = await db.Users.create(userData);

        if (userData.role && userData.role.length > 0)
        {
            for (let role of userData.role)
            {
                console.log(role)   
                const userRoleDto = new userRolesDTO({
                    userid: user.id,
                    roleid: role.id,
                    startdate: new Date().toISOString().slice(0, 10)
                });
                await db.UserRoles.create(userRoleDto);

            }
        }
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
        return new UserDTO({...userParam});
    },
    getUserByEmail: async (email) => {
        const user = await db.Users.findOne({ where: { email: email } });
        if (!user) {
           return null;
        }
        let roles = await user.getRoles();
        let rolesDTO = roles.map(role => new roleDTO({ ...role.dataValues }))
        let userParam = {
            ...user.dataValues,
            role: rolesDTO
        };
        return new UserDTO({ ...userParam });
    }
}
export default usersServices;