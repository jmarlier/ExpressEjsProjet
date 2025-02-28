// Fonction pour obtenir l'heure
function afficherHeure() {
    // Obtenir la date et l'heure actuelles
    const now = new Date()
    // Heures (2 chiffres)
    const heures = now.getHours().toString().padStart(2, '0')
    // Minutes (2 chiffres)
    const minutes = now.getMinutes().toString().padStart(2, '0')
    // Secondes (2 chiffres)
    const secondes = now.getSeconds().toString().padStart(2, '0')

    // Afficher l'heure dans le format HH:MM:SS
    message = "Il est " + heures + " : " + minutes + " : " + secondes

    document.getElementById("heure").innerHTML = message
}
// Mettre à jour l'heure toutes les secondes (1000 ms)
let objetIntervalle = window.setInterval(afficherHeure, 1000);

// Afficher l'heure immédiatement au chargement de la page
afficherHeure();