const router = require('express').Router()
const AppController = require('../controller/AppController')

router.get('/', AppController.index)

module.exports = router
