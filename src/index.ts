import app from './app'
import './database'

//escuchando el puerto 3000
app.listen(app.get('port'), () => {
    console.log('server on port 3000')
})
