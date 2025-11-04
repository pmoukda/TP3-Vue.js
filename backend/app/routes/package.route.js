module.exports = app => {
    const package = require('../controllers/package.controller.js')
    const router = require('express').Router()
    
    router.get('/', package.findAll)
    router.post('/', package.create)
    router.get('/:id', package.findOne)
    router.delete('/:id', package.delete)
    router.put('/:id', package.update)

    app.use('/api/package', router)
}