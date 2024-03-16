const { User } = require('../models');


class UserRepository {
    //method untuk get all User
    static async getAllUsers() {
        try {
            const users = await User.findAll()
            return users
        } catch (error) {
            throw error
        }
    }

    static async getById(UserId) {
        try {
            const user = await User.findOne(UserId)
            return user
        } catch (error) {
            throw error
        }
    }

    static async create(params) {
        try {
            const user = await User.create(params, { returning: true })
            return user
        } catch (error) {
            throw error
        }
    }

    static async updateUserRepo(id, body) {
        try {
            const user = await User.findOne({ where: {id}})

            if (!user)
                throw ({ name: "ErrorNotFound", message: "User Not Found" })

            await user.update(body)
        } catch (error) {
            throw error
        }
    }

    static async deleteUserRepo(params) {
        try {
            const userDelete = await User.findOne(params)

            if (!userDelete) 
                throw { name: "ErrorNotFound", message: "User Not Found" };
            
            return userDelete.destroy()
        } catch (error) {
            throw error;
        }

    }
}

module.exports = UserRepository