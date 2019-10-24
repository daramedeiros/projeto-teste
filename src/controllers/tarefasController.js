const tarefas = require("../model/listaDeTarefas.json")

exports.get = (require, response) => {
    console.log(require.url)
    response.status(200).send(tarefas)
}

exports.getById = (req, res) => {
    const id = req.params.id
    const tarefa = tarefas.find(tarefa => tarefa.id == id)
    console.log(tarefa)

    res.status(200).send(tarefa)

}

exports.getConcluido = (req, resp) => {
    const tarefaConcluida = tarefas.filter(tarefa => tarefa.concluido == "true")
    
    resp.status(200).send(tarefaConcluida)
}