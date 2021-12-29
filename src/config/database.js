const mongoose = require('mongoose')


mongoose.Promise = global.Promise
// const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb+srv://Leandro:061017AnA@mymoney-backend.ola1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })
// module.exports = mongoose.connect('mongodb+srv://Leandro:061017AnA@mymoney-backend.ola1i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
// module.exports = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})


mongoose.Error.messages.general.required = "O atributo '{PATH}'é obrigatório."
mongoose.Error.messages.Number.min = "O valor '{VALUE}' é menor que o limite minimo de '{MIN}'"
mongoose.Error.messages.Number.max = "O valor '{VALUE}' é maior que o limite máximo de '{MAX}'"
mongoose.Error.messages.String.enum = "'{VALUE}' não é válido para o atributo '{PATH}'"