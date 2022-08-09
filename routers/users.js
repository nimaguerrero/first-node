const { Router } = require("express"); // improtando router
const router = Router();

router.get('/', (req,res) => {
    res.send("Devolvera todos los usuarios")
})

router.get('/roberto', (req,res) => {
    res.send("Devolvera el usuario roberto")
})

router.post('/', (req,res) =>{
    res.send(`Crear un nuevo usuario`)
})

router.put('/:id', (req,res) =>{
    res.send(`se actualizara todo el documento con este id: ${id}`)
})

router.patch('/:id', (req,res) =>{
    res.send(`se actualizara un campo de este documento con el id: ${id}`)
})

router.delete('/:id', (req,res)=>{
    res.send(`se elimina el documento con este id: ${id}`)
})

module.exports = router