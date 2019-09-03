module.exports = function setupUser (UserModel){

    async function findUserById(id){
        return UserModel.findByPk(id)
    }

    async function createUser(user) {
        const result = await UserModel.create(user)
        return result.toJSON()
    }

    async function updateUserCreditCard(user, password) { 
        const cond = {
          where: {
            id: user.id
          }
        }
        user.password = password
        const updated = await UserModel.update(user, cond)
        return updated 
    }

    async function updateUserPassword(user, creditcart) { 
        const cond = {
          where: {
            id: user.id
          }
        }
        user.creditCard= creditcart
        const updated = await UserModel.update(user, cond)
        return updated 
    }

    return {
        findUserById,
        createUser,
        updateUserCreditCard,
        updateUserPassword
    }
}