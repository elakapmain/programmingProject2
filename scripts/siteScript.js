// Get the divine button by its id
const divineButton = document.getElementById("divineFortune");
const divinationText = document.getElementById("fortune");

let divinations = [];

// Use diviniations text file
fetch("scripts/divinations.txt").then(getDivinations).then(processData);

// Use addEventListener to call divineFunc when "click"ed
divineButton.addEventListener("click", divineFunc);

// Return the contents of the text file
function getDivinations(divinations) {
    return divinations.text();
}

// Get raw data and split it into an array
function processData(divinationsRaw) {
    // Split by new line, use regex to handle \r or \n
    divinations = divinationsRaw.split(/\r?\n/);


}

function divineFunc(){;
    let random = Math.floor(Math.random() * divinations.length);

    fortune.textContent = divinations[random];
}