const express = require ('express');

const server = express();


server.get('/', function(req,res){
    res.send('Hello');
})
function checkUsersInArray (req, res, next){

    const user = lista[req.params.index];
    if(!user){
        return res.status(400).json({error: "Index doesnt exists"})
    }
    req.id = user;
    return next();
}
const lista = ['Regiane', 'Mara', 'Fran', 'Steh'];

server.get('/users', (req,res) =>{
    res.json(lista);
})

server.get('/users/:index', checkUsersInArray (req, res) {
    const id = req.params.index;
    res.json(lista[id]);
})

const books = ['Romance', 'Terror', 'Suspense', 'Drama'];

server.get('/books', (req,res) =>{
    res.json(books);
})

server.get('/books/:index', function (req, res) {
    const genero = req.params.index;
    res.json(books[genero]);
})

server.get('/users/:indexUser/books/:indexBook', function (req, res) {
    const {indexUser, indexBook} = req.params;
    // const resultUser = lista [indexUser];
    // const resultBook = books [indexBook];
    // const finalResult = resultUser + resultBook;
    
    return res.json(lista[indexUser]+','+books[indexBook]);
})

server.get('/country', function (req, res) {
     //Na url fica assim o endereço: http://localhost:3000/country/?pais=Brasil   
    res.json(req.query.pais);
})
server.listen(3000);