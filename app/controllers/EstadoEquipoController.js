const EstadoEquipo = require('../models/EstadoEquipo');

function index(req,res){
    EstadoEquipo.find({})
        .then(estadoequipos => {
            if(estadoequipos.length) return res.status(200).send({estadoequipos});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.estadoequipos) return res.status(404).send({message: 'NOT FOUND'});
    let estadoequipos = req.body.estadoequipos;
    return res.status(200).send({estadoequipos});
    
}

function create(req,res){
    new EstadoEquipo(req.body).save().then(estadoequipo => res.status(201).send({estadoequipo})).catch(error => res.status(500).send({error}));
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.estadoequipos) return res.status(404).send({message: 'NOT FOUND'});
    let estadoequipo = req.body.estadoequipos[0];
    estadoequipo = Object.assign(estadoequipo,req.body);
    estadoequipo.save().then(estadoequipo => res.status(200).send({message: "UPDATED", estadoequipo})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.estadoequipos) return res.status(404).send({message: 'NOT FOUND'});
    req.body.estadoequipos[0].remove().then(estadoequipo => res.status(200).send({message: 'REMOVED', estadoequipo})).catch(error => res.status(500).send({error}));
}
/*esto hace dinamico la busqueda que el cliente haga por la url*/
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    EstadoEquipo.find(query).then(estadoequipos => {
        if(!estadoequipos.length) return next();
        req.body.estadoequipos = estadoequipos;
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