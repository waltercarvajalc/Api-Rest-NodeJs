const Marca = require('../models/Marca');

function index(req,res){
    Marca.find({})
        .then(marcas => {
            if(marcas.length) return res.status(200).send({marcas});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.marcas) return res.status(404).send({message: 'NOT FOUND'});
    let marcas = req.body.marcas;
    return res.status(200).send({marcas});
    
}

function create(req,res){
    new Marca(req.body).save().then(marca => res.status(201).send({marca})).catch(error => res.status(500).send({error}));
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.marcas) return res.status(404).send({message: 'NOT FOUND'});
    let marca = req.body.marcas[0];
    marca = Object.assign(marca,req.body);
    marca.save().then(marca => res.status(200).send({message: "UPDATED", marca})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.marcas) return res.status(404).send({message: 'NOT FOUND'});
    req.body.marcas[0].remove().then(marca => res.status(200).send({message: 'REMOVED', marca})).catch(error => res.status(500).send({error}));
}
/*esto hace dinamico la busqueda que el cliente haga por la url*/
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Marca.find(query).then(marcas => {
        if(!marcas.length) return next();
        req.body.marcas = marcas;
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