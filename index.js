// index.js
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    let menu = ""
    menu += "<h1>Vous &ecirctes &agrave l'accueil de Node.js et de Express !!!</h1>"
    menu += "<a href='/select'>Catalogue</a><br>"
    menu += "<a href='/insert'>Insertion</a><br>"
    res.end(menu)
})

app.get("/insert", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end("<h1>Insertion !</h1>")
})

app.get("/select", (req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8")
    res.end("<h1>Le catalogue !</h1>")
})

// Gestion 404 Tout le code de gestion des routes (app.get) se trouve au-dessus
app.use( (req, res, next) => {
    //res.setHeader("Content-Type", "text/html; charset=utf-8")
    //res.status(404).send("Page introuvable !!!")
    res.sendFile(__dirname + "/views/404.html")
}) /// 404


// Démarrage du serveur donc du site ou de l’application.
app.listen(8081)
console.log("Serveur tourne sur http://localhost:8081")
