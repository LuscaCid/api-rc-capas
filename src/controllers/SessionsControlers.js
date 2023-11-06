const {sign} = require('jsonwebtoken')
const authConfig = require('../config/authConfig')
const {compare} = require('bcrypt')

const knex = require('../database/knex')

const AppError = require('../utils/AppError')

class SessionsControllers{

    async createSession(req, res){
        const {username, password} = req.body
          
        const user = await knex('users')
        .where({name : username})
        .first()

        if(!user) throw new AppError('Usuário ou senha inválidos', 401)
        
        const checkedPassword = await compare(password, user.password)
        
        if(!checkedPassword)throw new AppError('Usuário ou senha inválidos', 401)

        const {secret , expiresIn} = authConfig.jwt
        const token = sign({}, secret, {
            subject : String(user.id),
            expiresIn
        }) 
        res.status(200).json({
            user,
            token
        })
    }
}
module.exports = SessionsControllers