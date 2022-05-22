const TipoEquipo = require('../models/TipoEquipo');

function index(req,res){
    TipoEquipo.find({})
        .then(tipoequipos => {
            if(tipoequipos.length) return res.status(200).send({tipoequipos});
            return res.status(204).send({message: 'NO CONTENT'});
        }).catch(error => res.status(500).send({error}));
}

function show(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.tipoequipos) return res.status(404).send({message: 'NOT FOUND'});
    let tipoequipos = req.body.tipoequipos;
    return res.status(200).send({tipoequipos});
    
}

function create(req,res){
    new TipoEquipo(req.body).save().then(tipoequipo => res.status(201).send({tipoequipo})).catch(error => res.status(500).send({error}));
}

function update(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.tipoequipos) return res.status(404).send({message: 'NOT FOUND'});
    let tipoequipo = req.body.tipoequipos[0];
    tipoequipo = Object.assign(tipoequipo,req.body);
    tipoequipo.save().then(tipoequipo => res.status(200).send({message: "UPDATED", tipoequipo})).catch(error => res.status(500).send({error}));
}

function remove(req,res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.tipoequipos) return res.status(404).send({message: 'NOT FOUND'});
    req.body.tipoequipos[0].remove().then(tipoequipo => res.status(200).send({message: 'REMOVED', tipoequipo})).catch(error => res.status(500).send({error}));
}
/*esto hace dinamico la busqueda que el cliente haga por la url*/
function find(req,res,next){
    let query = {};
    query[req.params.key] = req.params.value;
    TipoEquipo.find(query).then(tipoequipos => {
        if(!tipoequipos.length) return next();
        req.body.tipoequipos = tipoequipos;
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