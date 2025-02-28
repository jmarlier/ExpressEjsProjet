// ExpressRoute3.js
const express = require("express")
const app = express()
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/Accueil.html")
}) /// Racine

app.get("/accueil", (req, res) => {
    res.sendFile(__dirname + "/views/Accueil.html")
}) /// Racine

app.get("/select", (req, res) => {
    res.sendFile(__dirname + "/views/Catalogue.html")
}) /// select

app.get("/insert", (req, res) => {
    res.sendFile(__dirname + "/views/ProduitInsert.html")
}) /// insert
app.get("/delete", (req, res) => {
    res.sendFile(__dirname + "/views/ProduitDelete.html")
}) /// delete

// Nouvelle routes pour Coca, Badoit, et Vichy
app.get("/selectone", (req, res) => {
    console.log(req.query.id)
    const id = req.query.id
    if (id == 1) {
            res.sendFile(__dirname + "/views/Coca.html")
    }
    if (id == 2) {
            res.sendFile(__dirname + "/views/Badoit.html")
    }
    if (id == 3) {
            res.sendFile(__dirname + "/views/Vichy.html")
    }    
})

app.get("/ejs1", (req, res) => {
    // Un objet JSON
    const personne = {prenom: "Pascal", nom: "Buguet"}

    res.render(
        "Ejs1.ejs",
        {
            titre: "Hello EJS 1 !!!",
            texte: "EJS est un moteur de templates ...",
            objetPersonne: personne
        }
    )
})

// Le code de gestion des routes se trouve au-dessus
app.use( (req, res, next) => {
    res.sendFile(__dirname + "/views/404.html")
}) /// 404


app.listen(8081)
console.log("Serveur tourne sur http://localhost:8081")
