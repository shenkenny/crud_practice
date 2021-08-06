const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MONGO_URI = 'mongodb+srv://damien:Codesmith@cluster0.prul2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'crud_practice'
})
    .then(() => console.log('Connected to crud_practice'))
    .catch(err => console.log('Something went wrong.', err));

//define schema
const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    favorite_icecream: {type: String, required: true},
    favorite_algo: {type: String, required: true}
});


module.exports = mongoose.model('User', userSchema);