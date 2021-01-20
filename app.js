//dépendances

//dépendances 
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
      res.render('index');
    });

    //connexion 
app.listen(3000,() => {
    console.log("Le serveur est démarré sur le port 3000")
})