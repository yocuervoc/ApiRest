const setupDatabase = require('./lib/db')
const setupUserModel = require('./model/user')
const setupUser = require('./lib/user')


module.exports = async function (config) {
  const sequelize = setupDatabase(config)
  const UserModel = setupUserModel(config)
  


  await sequelize.authenticate()

  if (config.setup) {
    await sequelize.sync({ force: false })
  }

  const User = setupUser(UserModel)

  return {
    User
  }
}