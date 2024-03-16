const UserService = require("../services/userService")

class UsersController {

    static async getAll(req, res, next) {
        console.log('berhasil')
        try {
            const users = await UserService.getAllUsers(req.query)
            res.status(200).json(users) 
        } catch (error) {
            next(error)
           
        }
    }
    
    static async getById(req, res, next){
        try {
            const userId = req.params.id
            const user = await UserService.getById(userId)

            res.status(200).json({ data: user}) 
        } catch (error) {
            next(error)
        }
    }

    static async addUser(req, res, next){
        try {
            const newUser = await UserService.createUser(req.body)

            res.status(201).json({
                message: 'New User added',  
                data: newUser
            })
        } catch (error) {
            next(error)
        }
    }

    static async updateUser(req, res, next){
        try {
            const params = {
                id: req.params.id,
                body: req.body
            }

            await UserService.updateUserServ(params)
             
            res.status(201).json({ message: "User Updated Successfully"})
        } catch (error) {
            next(error)
        }
    }

    static async deleteUser(req, res, next) {
        try {   
            const userId = req.params.id
        
            await UserService.deleteUserServ(userId)

            res.status(201).json({message: `User deleted`})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UsersController