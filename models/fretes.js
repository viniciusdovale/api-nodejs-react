var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FreteSchema = new Schema({
    nome: {type: String, required: true, trim: true},
    email: {type: String, required: true, unique: true},
    endereco: {type: String, required: true, trim: true},
    telefone: Number,
    local: {type: String, required: true, trim: true}
});

module.exports = mongoose.model('Fretes', FreteSchema);
