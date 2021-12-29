const mongoose = require('mongoose')

// mongoose.Promise = global.Promise
// module.exports = mongoose.connect('mongodb+srv://Leandro:061017AnA_@mymoney-backend.ola1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true})
const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/mymoney'
module.exports = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.Error.messages.general.required = "O atributo '{PATH}'é obrigatório."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' é menor que o limite minimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O valor '{VALUE}' é maior que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"