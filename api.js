const express = require('express')
const asyncify = require('express-asyncify')
const auth = require('express-jwt')
const db = require('./')


const config = require('./config')
const api = asyncify(express.Router())

let service, User

api.use(express.json())
api.use(express.urlencoded({ extended: false }))
///

api.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Access-Control-Request-Headers, Access-Control-Request-Method, Origin, X-Requested-With, Content-Type, Accept, DNT, Referer, User-Agent, Authorization");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        next();
    }
});


api.use('*', async (req, res, next) => {
    console.log("si configura")
    if (!service) {
        try {
            service = await db(config.db)
            res.json({
                success: true
            })
        } catch (e) {
            return next(e)
        }

        User = service.User
    }
    next()
})


api.get('/user/:id', async (req, res, next) => {
    
    const { id } = req.params
    console.log(id)
    u = []
    u = await User.findUserById(id)
    if (!u) {
        return next(new Error("id no found"))
    }
    res.send({ u })
})

api.get('/users', async (req, res, next)=>{
    let sh = []
    try{
        sh = await User.findAllUsers()
    }catch(e){
        return next(e)
    }
    
    res.send({sh })
})

api.post('/createUser', async (req, res, next) => {
    try{
    let answer = await User.createUser(req.body)
    res.send({ success: true })
    }
    catch(error) {
        return next(error)
    }
})
/////////////////////
api.post('/updatepassword/:id', async (req, res, next) => {
    
    try {
        const { id } = req.params
        let password = req.body.password || ''
        let answer = await User.updatePassword(id, password)
        res.json({
          success: true
        })
      } catch (error) {
          console.log('error :(')
      }
    
})

api.post('/updateCreditCard/:id', async (req, res, next) => {
    try {
      const { id } = req.params
      let credit = req.body.creditCard || ''
      let answer = await User.updateCreditCard(id, credit)
      res.json({
        success: true
      })
    } catch (error) {
        console.log('error :(')
    }
});

//////////////////


module.exports = api