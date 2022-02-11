const {response} = require('express')

//Función get
const usuariosGet = (req, res=response) => {
    
    const parametros = req.query
    const { nombre, apellido } = parametros
    
    res.json({
        nombre,
        apellido
    })
}


//Función post
const usuariosPost = (req, res=response) => {
    //en el req viene la info del body y gracias a express.json puedo leerla desde acá
    const body = req.body
    console.log(body)
    //puedo desestructurar lo que ocupo del body(Frontend)
    const {nombre} = body

    res.json({
        nombre
    })
}


//Función put
const usuariosPut = (req, res=response) => {
    const id = req.params
    console.log(id)
    res.json({
        id
    })
}


//Función patch
const usuariosPatch = (req, res=response) => {
    res.send('usuario Patch')
}


//Función delete
const usuariosDelete = (req, res=response) => {
    res.send('usuario Delete')
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}