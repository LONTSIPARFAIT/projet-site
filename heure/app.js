// Sélection des éléments HTML
let bodyEl = document.getElementsByTagName("body")[0];
let titleEl = document.getElementById("title");
let heuresEl = document.getElementById("h");
let minutesEl = document.getElementById("m");
let secondesEl = document.getElementById("s");

// Durée en millisecondes pour 1 heure, 1 minute et 1 seconde
const uneHeureEnMs = 1000 * 60 * 60;
const uneMinuteEnMs = 1000 * 60;

// Obtenir l'heure actuelle
let now = new Date();

// Créer l'heure cible (prochaine heure pleine)
let endTime = new Date();
endTime.setHours(now.getHours() + 1); // L'heure suivante
endTime.setMinutes(0, 0, 0); // 00 minutes, 00 secondes, 00 millisecondes

// Fonction de mise à jour du compte à rebours
const getCountdown = () => {
    let nowDate = new Date().getTime();
    let tempsRestantEnMs = endTime.getTime() - nowDate;

    // Si le temps restant est inférieur ou égal à zéro, le compte à rebours est terminé
    if (tempsRestantEnMs <= 0) {
        clearInterval(countDownInterval);
        bodyEl.style.backgroundImage = 'url("./waiting.jpg")';
        heuresEl.textContent = 0;
        minutesEl.textContent = 0;
        secondesEl.textContent = 0;
        titleEl.innerHTML = "Temps écoulé Fin de l'heure ! &#128557;";
        return;
    }

    // Calculer les heures, minutes et secondes restantes
    let nbHeures = Math.floor(tempsRestantEnMs / uneHeureEnMs);
    let resteTempsSansHeuresMs = tempsRestantEnMs - (nbHeures * uneHeureEnMs);
    let nbMinutes = Math.floor(resteTempsSansHeuresMs / uneMinuteEnMs);
    let resteTempsSansMinutesMs = resteTempsSansHeuresMs - (nbMinutes * uneMinuteEnMs);
    let nbSecondes = Math.floor(resteTempsSansMinutesMs / 1000);

    // Mettre à jour les éléments HTML
    heuresEl.textContent = nbHeures;
    minutesEl.textContent = nbMinutes;
    secondesEl.textContent = nbSecondes;
}

// Mettre à jour le compte à rebours chaque seconde
let countDownInterval = setInterval(getCountdown, 1000);

// Initialiser le compte à rebours
getCountdown();
