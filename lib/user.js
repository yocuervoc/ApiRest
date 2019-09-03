module.exports = function setupUser (UserModel){

    async function findUserById(id){
        return UserModel.findByPk(id)
    }

    async function createUser(user) {
        const result = await UserModel.create(user)
        return result.toJSON()
    }

    return {
        findUserById,
        createUser
    }
}