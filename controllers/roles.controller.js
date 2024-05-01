import rolesServices from "../services/roles.service.js";

const rolesController = {
    /**
     * GET /api/roles/
     * @summary Get information about all roles
     * @tags roles
     * @return {roleDTO} 200 - Roles - application/json
     * @return 404 - Not found
     */
    getAll: async (req, res) => {
        try {
            const rolesData = {
                roles: await rolesServices.getAll()
            };
            res.json(rolesData);
        } catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },

    /**
     * GET /api/roles/{id}
     * @summary Get information about a specific role
     * @tags roles
     * @param {number} id.path - Role's ID
     * @return {roleDTO} 200 - Role - application/json
     * @return 404 - Role not found
     */
    roleById: async (req, res) => {
        try {
            const roleId = parseInt(req.params.id);
            const role = await rolesServices.getRoleById(roleId);
            if (!role) {
                res.status(404).json({ error: 'Role not found!' });
                return;
            }
            res.json(role);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    /**
    * GET /api/roles/users/{userId}
    * @summary Get information about roles for a specific user
    * @tags roles
    * @param {number} userId.path - User's ID
    * @return {roleDTO[]} 200 - Roles - application/json
    * @return 404 - User not found
    */
    getRoleByUserId: async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            const roles = await rolesServices.getRolesByUserId(userId);
            res.json(roles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default rolesController;
