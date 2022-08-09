const {Router, response} = require("express");
const router = Router();

router.get('/listar', (req, res)=> {
    res.send("Listando todos los clientes")
})

// router.get('/:id', (req, res)=>{
//     const idcliente = req.params.id
//     res.send(`El Cliente con el id ${idcliente}`)
// })

router.post('/crear', (req,res)=>{
    const clients = [
            {name: 'Pepe'},
            {name: 'Juan'},
        ]

    console.log(req.body) 
    // const client = req.body
    //clients.push(client)        // agregando el nuevo cliente a este array.

    // res.json({
    //     ok: true,
    //     msg: "Usuario creado exitosamente",
    //     usuarioCreado: client,
    //     todosLosUsuarios: clients,
    // })


})

module.exports = router