const Inventario = require('../models/Inventario');

function index(req,res){
    Inventario.find({})
        .then(inventarios => {
            if(inventarios.length) return res.status(200).send({inventarios});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.inventarios) return res.status(404).send({message: 'NOT FOUND'});
    let inventarios = req.body.inventarios;
    return res.status(200).send({inventarios});
    
}

function create(req,res){
    new Inventario(req.body).save().then(inventario => res.status(201).send({inventario})).catch(error => res.status(500).send({error}));
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.inventarios) return res.status(404).send({message: 'NOT FOUND'});
    let inventario = req.body.inventarios[0];
    inventario = Object.assign(inventario,req.body);
    inventario.save().then(inventario => res.status(200).send({message: "UPDATED", inventario})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.inventarios) return res.status(404).send({message: 'NOT FOUND'});
    req.body.inventarios[0].remove().then(inventario => res.status(200).send({message: 'REMOVED', usuario})).catch(error => res.status(500).send({error}));
}
/*esto hace dinamico la busqueda que el cliente haga por la url*/
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Inventario.find(query).then(inventarios => {
        if(!inventarios.length) return next();
        req.body.inventarios = inventarios;
        return next();
    }).catch(error =>{
        req.body.error = error;
        next();
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}