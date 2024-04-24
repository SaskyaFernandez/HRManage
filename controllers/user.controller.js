import usersServices from "../services/users.service.js";

const userController = {
    /**
     * GET /api/users/
     * @summary Get information about all users
     * @tags users
     * @return {userDTO} 200 - Users - application/json
     * @return 404 - Not found
     */
    allUsers: async (req, res) => {
        try {
            const viewData = {
                users: await usersServices.getAll()
            };
            res.send(viewData);
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    },

    /**
     * GET /api/users/{id}
     * @summary Get information about a specific user
     * @tags users
     * @param {number} id.path - User's ID
     * @return {userDTO} 200 - User - application/json
     * @return 404 - User not found
     */
    usersFromId: async (req, res) => {
        try {
            const userId = parseInt(req.params.id);
            const user = users.find((elem) => elem.id === userId);
            console.log(userId);
            
            if (!user) {
                res.status(404).send({ error: 'User not found!' })
            }

            const viewData = {
                user: await usersServices.
            };

            res.send(viewData);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
};

export default userController;
