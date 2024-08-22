const express = require('express');

const server = express();

// Query params = ?nome=NodeJS
// server.get('/curso', (req, res) => {
//     const nome = req.query.nome;

//     return res.json({curso: `Aprendendo ${nome}`});
// })

// Route params = /curso/2
// server.get('/curso/:id', (req, res) => {
//     const id = req.params.id;

//     return res.json({curso: `Curso: ${id}`});
// })

const cursos = ['Node JS', 'JavaScript', 'Rect Native']

server.get('/curso/:index', (req, res) => {
    const { index } = req.params;

    return res.json(cursos[index]);
})

// Request Body = {nome: 'NodeJS', tipo: 'Backend'}



server.listen(3000);