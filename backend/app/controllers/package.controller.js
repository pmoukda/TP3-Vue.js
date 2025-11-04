const db = require('../models') 
const Package = db.package

exports.findAll = (req, res) => {
    Package.findAll()
   .then(data => {
       res.send(data)
   })
   .catch(err => {
       res.status(500).send({
           message:
           err.message || 'Une erreur est survenue.'
       })
   })
}

exports.create = (req, res) => {

    if(!req.body.nomForfait){
        res.status(400).send({
            message: 'Le nom du forfait est obligatoire'
        })
        return
    }
    // console.log(req.body)
    Package.create(req.body)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
        message: 'Echec lors de la création du forfait.'
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id
    Package.findByPk(id)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
        message: 'Données non trouvable.'
        })
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    Package.update(req.body, {
        where:{id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Le forfait a été modifié'
            })
        }else{
            res.status(500).send({
                message: 'Données non trouvable.'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
        message: 'Impossible de faire la mise à jour!'
        })
    })
}

exports.delete = (req, res) => {
    const id = req.params.id
    Package.destroy({
        where:{id: id}
    })
    .then(num => {
        if(num == 1){
            res.send({
                message: 'Le forfait a été supprimé.'
            })
        }else{
            res.status(500).send({
                message: 'Données non trouvable.'
            })
        }
    })
    .catch(err => {
        res.status(500).send({
        message: 'Impossible de supprimer le forfait!'
        })
    })
}