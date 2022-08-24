//importación de dependencias
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import fotosRoutes from './routes/fotos.routes'

const app = express()

//Se define el puerto
app.set('port', 3000);

//declara variables que son propias de este computador
app.use(morgan('dev'));

//permite que se conecte a cualquier servidor o petición
app.use(cors());

//entienda objetos json cuando hay petición
app.use(express.json());

//petición post desde un formulario,
//pueda entender los campos que vienen d ahí
app.use(express.urlencoded({ extended: false }))

//
app.use(fotosRoutes)
export default app;





