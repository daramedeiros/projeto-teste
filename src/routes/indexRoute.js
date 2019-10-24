const express = require('express')
const router = express.Router()

router.get('/', function(require, response){
    response.status(200).send({
        title:'Reprograma - Projeto prático',
        version:'0.0.1'
    })
})

module.exports = router