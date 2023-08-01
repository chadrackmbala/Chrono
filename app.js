const paragraph = document.getElementById("paragraph");
const resetBtn = document.getElementById("btn-reset");
const stopBtn = document.getElementById("btn-stop");
const startBtn = document.getElementById("btn-start");

let heures = 0;
let minutes = 0;
let secondes = 0;

let timeOut;

let isStoped = true;

function demarer() {
    if(isStoped) {
        isStoped = false;
        defilerTemps();
    }
};

function stoped() {
    if(!isStoped) {
        isStoped = true;
        clearTimeout(timeOut);
    }
};

function defilerTemps() {
    if(isStoped) {
        return
    };

    secondes = Number(secondes);
    minutes= Number(minutes);
    heures = Number(heures);

    secondes++;

    if(secondes === 60) {
        minutes++;
        secondes = 0;
    };

    if(minutes === 60) {
        heures++;
        minutes = 0;
    };

    if(secondes < 10) {
        secondes = "0" + secondes;
    };

    if(minutes < 10) {
        minutes = "0" + minutes
    };

    if(heures < 10) {
        heures = "0" + heures
    };

    paragraph.textContent = `${heures} : ${minutes} : ${secondes}`;

    timeOut = setTimeout(defilerTemps, 1);
}

function reset() {
    paragraph.textContent = "00 : 00 : 00";
    isStoped = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout(timeOut);
    // location.reload();
}

startBtn.addEventListener("click", demarer);
stopBtn.addEventListener("click", stoped);
resetBtn.addEventListener("click", reset);

