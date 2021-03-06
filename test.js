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
    await User.updatePassword(4, "asdf").catch(handleFatalError)
    //await User.updateCreditCard(5, "visa").catch(handleFatalError)
    //await User.updatePassword(4, "asdf").catch(handleFatalError)
/*
    const user = await User.findUserById(4).catch(handleFatalError)
    console.log(user)
    
    let newuser= {
        name: "Camilo1",
        lastName: "Cuervo",
        username: "cacuervoc",
        password: "new pass",
        creditCard: "123456XXX"
    }

    let newuser2= {
        id: 3,
        name: "Camilo1",
        lastName: "Cuervo",
        username: "cacuervoc",
        password: "new pass",
        creditCard: "123456XXX"
    }
    
    const user2 = await User.createUser(newuser).catch(handleFatalError)
    console.log(user2)

    const update = await User.updateUserPassword(newuser2, "secreto")
    console.log(user2)
    */
}

function handleFatalError (err) {
  console.error(err.message)
  console.error(err.stack)
  process.exit(1)
}

run()


//insert into users(name, lastName, username, password, createdAt, updatedAt) values ("yonatan", "cuervo", "yocuervoc", "pass", '1000-01-01 00:00:00', '1000-01-01 00:00:00');
