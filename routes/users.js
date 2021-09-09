var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/cool',(req, res, next) =>{
  res.send('Você é tão legal, que criei essa rota massa');
});
router.get('/alunos',(req, res, next) =>{
  res.send('Bem vindo aluno');
});

module.exports = router;
