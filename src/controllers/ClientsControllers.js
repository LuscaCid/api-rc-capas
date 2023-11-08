const knex = require('../database/knex')
const AppError = require('../utils/AppError')
class ClientsControllers{
    async viewClient(){

    }
    async createClient(req, res) { 
        const { user_id } = req.query
        console.log(user_id)
        console.log('entrou')
        const { 
            name, 
            phone,
            cep,
            street,
            neighborhood,
            city,
            cpf,
            obs
        } = req.body
        console.log(name, 
            phone,
            cep,
            street,
            neighborhood,
            city,
            cpf,
            obs)
        
            await knex('Clients').insert({
            name,
            cpf,
            phone,
            obs,
            cep,
            city,
            street,
            neighborhood,
            created_by : user_id
            }).then(()=> {console.log('criado')}).catch(e=> console.log(e))

            return res.status(200).json()
        
    }

}
module.exports = ClientsControllers