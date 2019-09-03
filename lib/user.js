module.exports = function setupUser (UserModel){

    async function findUserById(id){
        return UserModel.findByPk(id)
    }

    async function createUser(user) {
        const result = await UserModel.create(user)
        return result.toJSON()
    }

    async function updatePassword(id, passw) { 
      let user = await UserModel.findByPk(id)
      let updated = await user.update({password: passw})
      return updated
    }

    async function updateCreditCard(id, creditcard) { 
        let user = await UserModel.findByPk(id)
        let updated =await user.update({creditCard: creditcard})
        return updated
    }

    async function findAllUsers() {
      return UserModel.findAll()
    }

    return {
        findUserById,
        createUser,
        updateCreditCard,
        updatePassword,
        findAllUsers
    }
}