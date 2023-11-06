const multer = require('multer')
const crypto = require('crypto')
const path = require('path')
const multer = require('multer')

const tmp_folder = path.resolve(__dirname ,'..', '..', 'tmp')
const uploads_folder = path.resolve(tmp_folder, 'uploads')

const multer = {
    Storage : multer.diskStorage({
        destination : tmp_folder,
        filename(request, file, callback){
            const fileHash = crypto.randomBytes(10).toString('hex')
            const filename = `${fileHash}-${file.originalname}`
            return callback(null, filename)
        }            
    })
}
module.exports = {
    tmp_folder,
    uploads_folder,
    multer
}
