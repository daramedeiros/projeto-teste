const express = require("express")

const app = express()

//rotas
const index = require('./routes/indexRoute')
const tarefas = require('./routes/tarefasRoute')



app.use('/', index)
app.use('/tarefas', tarefas)

//exportando um modulo
module.exports = app