let markPoin = prompt("Please enter mark poin:");
let physicsPoin = prompt("Please enter physics poin:");
let chemistryPoin = prompt("Please enter chemistry poin:");
let max = markPoin;
if (markPoin < physicsPoin) {
    max = physicsPoin;
    if (physicsPoin < chemistryPoin) {
        max = chemistryPoin;
    }
} else if (markPoin < chemistryPoin) {
    max = chemistryPoin;
}

document.write(max);