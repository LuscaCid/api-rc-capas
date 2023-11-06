
import { verify } from "jsonwebtoken";
const AppError = require('../utils/AppError')
import authConfig from "../config/authConfig";

function ensureAutenticated(req, res, next) {

    const authHeader = req.headers.authorization

    if(!authHeader) throw new AppError('json web token nao informado', 401)

    const [, token] = authHeader.split(' ')

    try {
        const {sub : user_id} = verify(token, authConfig.jwt.secret )
        req.user = {
            user_id : Number(user_id)
        }
        return next()
    } catch  {
        throw new AppError('jwt está invalido', 401)
    }

}
module.exports = ensureAutenticated