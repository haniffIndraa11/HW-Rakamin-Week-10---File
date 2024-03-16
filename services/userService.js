const UserRepo = require('../repositories/usersRepository')

class UserService {

    static async getAllUsers() {
        try {
            const users = await UserRepo.getAllUsers()
            if(!users)
                throw {name: "ErrorNotFound", message: "User Not Found"}

            return users
        } catch (error) {
            throw error
        }
    }

    static async getById(id) {
        try {
            const userId = await UserRepo.getById({where: {id}})
            if(!userId)
                throw {name: "ErrorNotFound", message: "User Not Found"}

            return userId  
        } catch (error) {
            throw error
        }
    }

    static async createUser(param) {
        try {
            const createUser = await UserRepo.create(param)
            return createUser
        } catch (error) {
            throw error
        }
    }

    static async updateUserServ(params) {
        try {
            const {id, body} = params

            await UserRepo.updateUserRepo(id, body)
        } catch (error) {
            throw error
        }
    }

    static async deleteUserServ(id) {
        try {
            const filterOptions = {
                where: {
                    id
                }
            }
            await UserRepo.deleteUserRepo(filterOptions)
        } catch (error) {
            throw error
        }
    }
}

module.exports = UserService