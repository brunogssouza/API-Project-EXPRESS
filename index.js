import express from 'express'; 
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js';

const app = express();

const PORT = 5000;

//Bodyparser nos ajudará a informar que nosso servidor express utilizara de objetos js para receber as infos do server
app.use(bodyParser.json());


// Aqui declaramos que todas rotas que usaremos , com exceção da homepage, vão começar com /users e o que será modificado será a procedencia depois disso. Por exemplo, no routes file, se for somente '/', começará com /users e será nosso get, se tiver um /id, quer dizer que virá um usuario especifico, ou deletar esse usuario ou update desse usuario.
app.use('/users', usersRoutes);


app.get('/', (req, res) => {
    console.log('TEST')
    res.send('Hi homepage')
})

app.listen(PORT, () => {
    console.log(`Server Running on port: http://localhost:${PORT}`);
})


