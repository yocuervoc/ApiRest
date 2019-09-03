const jwt = require('jsonwebtoken')

function sing(payload, secret, callback){
    jwt.sing(payload, secret, callback)
}

function verify(token, secret, callback) {
    jwt.verify(token, secret, callback)
}

module.exports={
    sing,
    verify
}