const express = require("express");
const cors = require('cors');
const { usuariosGet, usuariosPost, usuariosPut, usuariosPatch, usuariosDelete } = require("../Controladores/usuarios");



//Esta clase levanta el servidor
class Servidor {
    
    constructor(){
        //Uso this por estar dentro de una clase.
        this.app = express()
        this.port = process.env.PORT

        //Midlewares
        this.midlewares()


        //Llamo al método rutas
        this.rutas()
    }

    rutas(){
        this.app.get('/api/usuarios', usuariosGet)
        this.app.post('/api/usuarios', usuariosPost)
        this.app.put('/api/usuarios/:id', usuariosPut)
        this.app.patch('/api/usuarios', usuariosPatch)
        this.app.delete('/api/usuarios', usuariosDelete)
    }


    midlewares(){
        //Directorio publico
        this.app.use( express.static('public') )
        //Cors
        this.app.use( cors() )
        //Este midleware me permite leer los datos del body que viene del front en JSON
        this.app.use( express.json() )
    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`Servidor en el puerto ${this.port}`)
        } )
    }
}


module.exports = Servidor