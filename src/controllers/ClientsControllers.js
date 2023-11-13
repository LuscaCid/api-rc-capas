const knex = require('../database/knex')
const AppError = require('../utils/AppError')
class ClientsControllers{
    async viewClient(){

    }
    async createClient(req, res) { 
        const { user_id } = req.query
       
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
        
        const clientexists = await knex('Clients').where({cpf}).first()
        console.log(clientexists)
        
        if(clientexists)throw new AppError('CPF já cadastrado no sistema', 401)
        
        const client = await knex('Clients').insert({ 
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
        
        

        return res.status(200).json(client)
    }
}
module.exports = ClientsControllers