var express    = require('express'),
    mongoose   = require('mongoose'),
    bodyParser = require('body-parser'),
    app        = express(),
    Fretes     = require('./models/fretes');

// MongoDB
mongoose.connect('mongodb://localhost/api', function(err){
  if(err) {
    console.log('Erro ao conectar no MongoDB ' + err);
  }
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

// Rotas
var router = express.Router();
router.get('/', function(req, res){
    res.json({message: 'API'})
});

router.route('/fretes')
  .get(function(req, res){
    Fretes.find(function(err, dados){
      if(err) {
        res.send(err);
      }
      res.json(dados);
    })
  })
  .post(function(req, res){
    var fretes = new Fretes();
    fretes.nome = req.body.nome,
    fretes.email = req.body.email,
    fretes.endereco = req.body.endereco,
    fretes.telefone = req.body.telefone
    fretes.local = req.body.local

    fretes.save(function(err){
      if(err) {
        res.send(err);
      }
      res.json({message: "Frete cadastrado com sucesso!"})
    });

  });

app.use('/api', router);
app.listen(port, function() {
    console.log('Servidor rodando na porta ' + port);
});