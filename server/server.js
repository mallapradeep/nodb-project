const express = require('express');
const bodyParser = require('body-parser');

var mc = require('./movie_controller');

const app = express();

app.use(bodyParser.json());


//endpoints
app.get('/api/movies',  mc.read);
app.post('/api/movies', mc.create);
app.put('/api/movies/:id', mc.update);
app.delete('/api/movies/:id', mc.delete);




const PORT = 3005;

app.listen(PORT, ()=> {
    console.log(`listening to port:${PORT}`)
});

