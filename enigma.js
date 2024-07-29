const alphabet = "abcdefghijklmnopqrstuvwxyz"; //it's just the alphabet.
function alphabetize(inNumber) {return alphabet.charAt(inNumber - 1);} //number to letter
function dealphabetize(inCharacter) {return (alphabet.indexOf(inCharacter) + 1);} //letter to number
function constrain(constrainee) {
    if (constrainee < 1) {return constrainee + 26;}
    else if (constrainee > 26) {return constrainee - 26;}
    else return constrainee;
}

var letterInput = "e"; //inputted letter, a-z
var letter = dealphabetize(letterInput); //number value of inputted letter, 1-26

var rotations = [0, 0, 0]; //rotations of scramblers in wheel order, 0-25

var plugIn1; //inputted plug 1 letter, a-z
var plugIn2;
var plugIn3;
var plugIn4;
var plug1 = dealphabetize(plugIn1); //switchboard, swaps with plug2 at beginning and end, 1-26 or 0 for off
var plug2 = dealphabetize(plugIn2); //switchboard, swaps with plug1
var plug3 = dealphabetize(plugIn3); //switchboard, swaps with plug4
var plug4 = dealphabetize(plugIn4); //switchboard, swaps with plug3

var wheelOrder = [1, 2, 3]

const scramList1 = [17, 6, 4, 22, 8, 26, 7, 3, 11, 14, 20, 18, 10, 19, 9, 23, 12, 21, 16, 1, 5, 24, 2, 13, 25, 15] //sequential array of scrambler 1's 26 outputs at rotation 0. remember, arrays start at 0
const scramList2 = [3, 17, 16, 12, 14, 5, 8, 22, 9, 19, 2, 23, 10, 15, 7, 26, 24, 18, 21, 25, 6, 11, 13, 20, 4, 1]
const scramList3 = [3, 23, 14, 1, 11, 6, 9, 2, 5, 18, 10, 24, 12, 13, 16, 21, 8, 22, 25, 17, 4, 15, 20, 26, 19, 7]

const reflectList = [21, 17, 11, 10, 6, 25, 15, 26, 18, 22, 14, 3, 9, 23, 8, 24, 5, 16, 13, 20, 7, 19, 2, 4, 12, 1] //even indexes go to the next on the array, odd go back (starting at 0)

function scrambler1 (rot, reflected) {
    //account for scrambler's rotation
    let scramLetter = constrain(letter + rot);
    //enigmatize that thang
    if (reflected == false) {letter = scramList1[scramLetter - 1] - rot;}
    else {letter = scramList1.indexOf(scramLetter) + 1 - rot;}
    //there's only so much alphabet
    letter = constrain(letter)
}

function scrambler2 (rot, reflected) {
    let scramLetter = constrain(letter + rot);
    if (reflected == false) {letter = scramList2[scramLetter - 1] - rot;}
    else {letter = scramList2.indexOf(scramLetter) + 1 - rot;}
    letter = constrain(letter)
}

function scrambler3 (rot, reflected) {
    let scramLetter = constrain(letter + rot);
    if (reflected == false) {letter = scramList3[scramLetter - 1] - rot;}
    else {letter = scramList3.indexOf(scramLetter) + 1 - rot;}
    letter = constrain(letter)
}

function switchboard() {
    if (letter == plug1) {letter = plug2;}
    else if (letter == plug2) {letter = plug1;}
    else if (letter == plug3) {letter = plug4;}
    else if (letter == plug4) {letter = plug3;}
}

function scramble(reflected) {
    for (let letterPos = (0 + (2 * reflected)); letterPos < 3 && letterPos >= reflected - 1; letterPos += 1 - (2 * reflected)) {
        //check scrambler of current position, execute, change position, repeat three times.
        //if reflected true, start at third scrambler and go backwards
        if (wheelOrder[letterPos] == 1) {scrambler1(rotations[letterPos], reflected);}
        else if (wheelOrder[letterPos] == 2) {scrambler2(rotations[letterPos], reflected);}
        else if (wheelOrder[letterPos] == 3) {scrambler3(rotations[letterPos], reflected);}
    }
}

function reflector() {
    //if letter's position in array is even, move to next index
    if (reflectList.indexOf(letter) % 2 == 0) {letter = reflectList[reflectList.indexOf(letter) + 1];} 
    //if letter's position in array is odd, move to previous index
    else {letter = reflectList[reflectList.indexOf(letter) - 1];}
}

function rotate(){
    if (rotations[0] != 25) {rotations[0]++;}
    else {
        rotations[0] = 0;
        if (rotations[1] != 25) {rotations[1]++;}
        else {
            rotations[1] = 0;
            if (rotations[2] != 25) {rotations[2]++;}
            else {rotations[2] = 0;}
        }
    }
}

function executeEnigma() {
    switchboard();
    scramble(false);
    reflector();
    scramble(true);
    switchboard();
    rotate();
}

executeEnigma()