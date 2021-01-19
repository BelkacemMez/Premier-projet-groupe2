//dépendances

//dépendances 
const express = require('express');
const app = express();

app.get('/', function (req, res) {
      res.send('Todolist');
    });

    //connexion 
app.listen(3000,() => {
    console.log("Le serveur est démarré sur le port 3000")
})