
let winner;
let number;
let selectedNumber;
let board;
let clickedEasy = false;
let clickedMedium = false;
let clickedHard = false;
let clickedErase = false;

const squareElements = document.querySelectorAll('.sqr');
const numberElements = document.querySelectorAll('.num');
const messageElement = document.querySelector('#resultMessage');
const displayElement = document.querySelector ('.display');

const easyButton = document.querySelector('#easy');
const mediumButton = document.querySelector('#medium');
const hardButton =  document.querySelector('#hard');
const resetButton = document.querySelector('#reset');
const eraseButton = document.querySelector('#erase');
const hintButton = document.querySelector('#hint');

function init() {
    board = [
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '', ''];
    render();
};

window.onload = init();

function render() {
    updateBoard();
};

function updateBoard() {
    const squares = document.querySelectorAll('.sqr');
    board.forEach((cell, index) => {
        squares[index].textContent = cell;
    });
}

numberElements.forEach((numberElement) => {
    numberElement.addEventListener('click', () => {
        selectedNumber = numberElement.innerText;
    })
});



squareElements.forEach((squareElement, index) => {
    squareElement.addEventListener('click', () => {
        if (selectedNumber && !squareElement.innerText) {
            squareElement.innerText = selectedNumber;
            board[index] = selectedNumber;
            checkEasyWinner();
            checkMediumWinner();
            checkHardWinner();
        };
        if (clickedErase === true) {
            squareElement.innerText = '';
            board[index] = '';
            eraseButton.addEventListener('dblclick', () => {
                clickedErase = false; 
            });
        };

    });
});

function reset() {
    if(clickedEasy === true) {
        playEasy();
    };
    if(clickedMedium === true) {
        playMedium();
    };

    if(clickedHard === true) {
        playHard();
    };
};

easyButton.addEventListener('click', () => {
    playEasy()
    clickedEasy = true;
});

mediumButton.addEventListener('click', () => {
    playMedium()
    clickedMedium = true;
});

hardButton.addEventListener('click', () => {
    playHard()
    clickedHard = true;
});

hintButton.addEventListener('click', displayHint);

resetButton.addEventListener('click', reset);

eraseButton.addEventListener('click', () => {
    clickedErase = true;
});

function playEasy() {
    board = [
    '', '', '', '', '', '', '', '', '',
    '', '1', '2', '6', '', '', '', '', '8',
    '', '', '', '8', '7', '5', '', '3', '2',
    '6', '5', '4', '7', '', '', '', '', '1',
    '', '2', '', '1', '4', '3', '', '5', '',
    '1', '', '', '', '', '2', '9', '4', '7',
    '7', '9', '', '3', '8', '6', '', '', '',
    '8', '', '', '', '', '4', '7', '9', '',
    '', '', '', '', '', '', '', '', ''];
    render(board);
};

const easySolution = [
    '3', '7', '8', '4', '2', '1', '5', '6', '9',
    '5', '1', '2', '6', '3', '9', '4', '7', '8',
    '4', '6', '9', '8', '7', '5', '1', '3', '2',
    '6', '5', '4', '7', '9', '8', '3', '2', '1',
    '9', '2', '7', '1', '4', '3', '8', '5', '6',
    '1', '8', '3', '5', '6', '2', '9', '4', '7',
    '7', '9', '5', '3', '8', '6', '2', '1', '4',
    '8', '3', '6', '2', '1', '4', '7', '9', '5',
    '2', '4', '1', '9', '5', '7', '6', '8', '3'];

function playMedium() {
    board = [
    '', '', '', '', '6', '', '5', '', '',
    '', '', '', '', '', '4', '', '2', '',
    '6', '4', '5', '', '', '2', '', '', '3',
    '5', '2', '3', '', '', '7', '', '1', '',
    '', '9', '', '6', '2', '5', '', '4', '',
    '', '6', '', '9', '', '', '2', '5', '8',
    '2', '', '', '7', '', '', '4', '3', '9',
    '', '5', '', '8', '', '', '', '', '',
    '', '', '7', '', '1', '', '', '', ''];
    render(board);
};

const mediumSolution = [
    '1', '7', '2', '3', '6', '8', '5', '9', '4',
    '3', '8', '9', '5', '7', '4', '6', '2', '1',
    '6', '4', '5', '1', '9', '2', '7', '8', '3',
    '5', '2', '3', '4', '8', '7', '9', '1', '6',
    '8', '9', '1', '6', '2', '5', '3', '4', '7',
    '7', '6', '4', '9', '3', '1', '2', '5', '8',
    '2', '1', '8', '7', '5', '6', '4', '3', '9',
    '9', '5', '6', '8', '4', '3', '1', '7', '2',
    '4', '3', '7', '2', '1', '9', '8', '6', '5'];

function playHard() {
    board = [
    '', '', '', '', '', '', '', '', '',
    '', '9', '', '', '', '1', '', '4', '6',
    '1', '', '', '', '5', '9', '2', '', '8',
    '', '', '9', '', '', '7', '', '8', '',
    '', '', '', '3', '', '8', '', '', '',
    '', '4', '', '2', '', '', '9', '', '',
    '4', '', '7', '8', '1', '', '', '', '2',
    '6', '8', '', '9', '', '', '', '1', '',
    '', '', '', '', '', '', '', '', ''];
    render(board);
};

const hardSolution = [
    '2', '7', '4', '6', '8', '3', '1', '5', '9',
    '5', '9', '8', '7', '2', '1', '3', '4', '6',
    '1', '6', '3', '4', '5', '9', '2', '7', '8',
    '3', '2', '9', '1', '4', '7', '6', '8', '5',
    '7', '5', '6', '3', '9', '8', '4', '2', '1',
    '8', '4', '1', '2', '6', '5', '9', '3', '7',
    '4', '3', '7', '8', '1', '6', '5', '9', '2',
    '6', '8', '5', '9', '3', '2', '7', '1', '4',
    '9', '1', '2', '5', '7', '4', '8', '6', '3'];

function getHint() {
    let randomIndex = Math.floor(Math.random() * board.length);
    let hint;
    if(board[randomIndex] === '') {
        if(clickedEasy) {
        hint = easySolution[randomIndex]; 
        board[randomIndex] = hint;
        return randomIndex;
        }
        if(clickedMedium) {
            hint = mediumSolution[randomIndex]; 
            board[randomIndex] = hint;
            return randomIndex;
        }
        if(clickedHard) {
            hint = hardSolution[randomIndex]; 
            board[randomIndex] = hint;
            return randomIndex;
        }
    }
};

function displayHint() {
    let randomIndex = getHint();
    if(randomIndex !== undefined) {
        const squareElement = document.getElementById(randomIndex.toString());
        squareElement.textContent = board[randomIndex];
    }
};


function checkEasyWinner() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] !== easySolution[i]) {
            return;
        };
    };
    messageElement.textContent = 'Congratulations!'
};

function checkMediumWinner() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] !== mediumSolution[i]) {
        return;
        };
    };
    messageElement.textContent = 'Congratulations!'
};

function checkHardWinner() {
    for (let i = 0; i < board.length; i++) {
        if (board[i] !== hardSolution[i]) {
        return;
        };
    };
    messageElement.textContent = 'Congratulations!'
};