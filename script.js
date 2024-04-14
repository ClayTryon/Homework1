let collectedWords = [];
let list = document.getElementById("wordList");
let swappedLetters = [];

function getWord() {
    let i = 0;
    while (i < 3) {
        let inputWord = prompt("Please input a word");
        collectedWords.push(inputWord);
        i++;
    }
    addToList();
}

function addToList() {
    list.innerHTML = ""; // Clear the existing list items
    collectedWords.forEach(word => {
        let li = document.createElement('li');
        li.textContent = word;
        list.appendChild(li);
    });
}

function Caps() {
    let capitalArray = collectedWords.map(word => word.toUpperCase());
    list.innerHTML = "";
    capitalArray.forEach(word => {
        let li = document.createElement('li');
        li.textContent = word;
        list.appendChild(li);
    });
}

document.getElementById("redButton").addEventListener("click", function() {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.color = "red";
    }
});

function Swap() {
    let swappedWords = [];
    collectedWords.forEach(word => {
        if (word.length > 1) {
            let swappedWord = word.charAt(word.length - 1) + word.substring(1, word.length - 1) + word.charAt(0);
            swappedWords.push(swappedWord);
        } else {
            swappedWords.push(word);
        }
    });

    list.innerHTML = "";

    swappedWords.forEach(word => {
        let li = document.createElement('li');
        li.textContent = word;
        list.appendChild(li);
    });
}

getWord();
