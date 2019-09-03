const db = require('./')

async function run (){

    const config = {
        database: process.env.DB_NAME || 'users',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'password',
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql'
      }

    const {User} = await db(config).catch(handleFatalError)

    const user = await User.findUserById(1).catch(handleFatalError)
    console.log(user)
    
    let newuser= {
        name: "Camilo1",
        lastName: "Cuervo",
        username: "cacuervoc",
        password: "new pass"
    }
    
    const user2 = await User.createUser(newuser).catch(handleFatalError)
    console.log(user2)


}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()


//insert into users(name, lastName, username, password, createdAt, updatedAt) values ("yonatan", "cuervo", "yocuervoc", "pass", '1000-01-01 00:00:00', '1000-01-01 00:00:00');
