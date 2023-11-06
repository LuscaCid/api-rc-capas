
const knex = require('../database/knex')
const AppError = require('../utils/AppError')
const {hash, compare} = require('bcrypt')
class UserControllers {
    async testRoute(req, res){
        return res.json({
            message : 'dentro da testRoute',
            status : 200
        })
        

    }

    async createUser(req,res){
        console.log('createuser')
        const {
            name,
            email,
        } = req.body

        let {password} = req.body

        const userExists = await knex('users').where({email}).first() 
        const nameAlreadyInUse = await knex("users").where({name}).first()

        if(userExists || nameAlreadyInUse)throw new AppError('E-mail ja registrado ou nome de usuário já registrados', 401)  

        const hashedPassowrd = await hash(password, 8)
        await knex('users')
        .insert({
            name,
            email,
            password : hashedPassowrd
        })
        res.status(201).send('usuário cadastrado com sucesso')
    }
}
module.exports = UserControllers