const Usuario = require('../models/Usuario');

function index(req,res){
    Usuario.find({})
        .then(usuarios => {
            if(usuarios.length) return res.status(200).send({usuarios});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.usuarios) return res.status(404).send({message: 'NOT FOUND'});
    let usuarios = req.body.usuarios;
    return res.status(200).send({usuarios});
    
}

function create(req,res){
    new Usuario(req.body).save().then(usuario => res.status(201).send({usuario})).catch(error => res.status(500).send({error}));
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.usuarios) return res.status(404).send({message: 'NOT FOUND'});
    let usuario = req.body.usuarios[0];
    usuario = Object.assign(usuario,req.body);
    usuario.save().then(usuario => res.status(200).send({message: "UPDATED", usuario})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.usuarios) return res.status(404).send({message: 'NOT FOUND'});
    req.body.usuarios[0].remove().then(usuario => res.status(200).send({message: 'REMOVED', usuario})).catch(error => res.status(500).send({error}));
}
/*esto hace dinamico la busqueda que el cliente haga por la url*/
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    Usuario.find(query).then(usuarios => {
        if(!usuarios.length) return next();
        req.body.usuarios = usuarios;
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