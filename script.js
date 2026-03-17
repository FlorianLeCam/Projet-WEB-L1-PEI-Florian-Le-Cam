const boutonsRetour = document.querySelectorAll('button');

boutonsRetour.forEach(bouton => {
    if (bouton.textContent.includes("Retour à l'accueil")) {
        
        bouton.style.transition = "transform 0.3s ease";

        bouton.onmouseenter = () => {
            bouton.style.transform = "scale(1.2)"; // Grossit de 20%

        bouton.onmouseleave = () => {
            bouton.style.transform = "scale(1)"; // Revient à la taille normale
        };
    }
});
