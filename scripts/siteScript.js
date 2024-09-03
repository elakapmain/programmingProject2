// Get the divine button by its id
const divineButton = document.getElementById("divineFortune");
const divinationText = document.getElementById("fortune");
const discoveredList = document.getElementById("discovered");

let divinations = [];
let randomLast; //  Prevent having the same divination show up back to back

let discovered = [];

// Use diviniations text file
fetch("scripts/divinations.txt").then(getDivinations).then(processData);

// Use addEventListener to call divineFunc when "click"ed
divineButton.addEventListener("click", divineFunc);

// Return the contents of the text file
function getDivinations(divinations) {
    return divinations.text();
}

// Get raw data and split it into an array, then populate discovered fortunes
function processData(divinationsRaw) {
    // Split by new line, use regex to handle \r or \n
    divinations = divinationsRaw.split(/\r?\n/);

    for (let i = 0; i < divinations.length; i++) {
        discovered.push("<b><i>Not yet discovered...</b></i>");
    }

    discovered.forEach(element => {
        const addItem = document.createElement("li");
        addItem.innerHTML = element;
        discoveredList.appendChild(addItem);
    });
}

function divineFunc(){;
    let random = randomFunc();

    if (random == randomLast)
        random = randomFunc();

    fortune.textContent = divinations[random];

    discovered[random] = divinations[random];

    updateDiscovered();

    randomLast = random;
}

function randomFunc() {
    num = Math.floor(Math.random() * divinations.length)

    return num; 
}

function updateDiscovered() {
    while(discoveredList.firstChild)
        discoveredList.removeChild(discoveredList.firstChild);

    discovered.forEach(element => {
        const addItem = document.createElement("li");
        addItem.innerHTML = element;
        discoveredList.appendChild(addItem);
    });
}