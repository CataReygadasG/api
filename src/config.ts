//leer archivo .env
import dotenv from 'dotenv'
dotenv.config();

//lee valor variable
//console.log(process.env.PORT)
//si no existe una variable de entorno para database, debe utilizar el 2do
export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'fotosdb',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost'

}

