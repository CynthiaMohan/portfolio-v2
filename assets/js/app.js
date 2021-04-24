const texts = ["ASPIRING FULL STACK DEVELOPER"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type() {
    // console.log("type function called");
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".type").textContent = letter;
    // console.log(letter);
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);
}());