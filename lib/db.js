const Sequelize = import('sequelize') 

let sequelize = null
 module.exports = function setupDatabase(config){
     if (!sequelize){
         sequelize = new Sequelize(config)
     }
     return sequelize
 }