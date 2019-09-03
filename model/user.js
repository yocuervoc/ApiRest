const Sequelize = require('sequelize')
const setupDatabase = require('../lib/db')


module.exports = function  setupUserModel (config){
    const sequelize = setupDatabase (config)

    return sequelize.define('user', {
        
    })
}