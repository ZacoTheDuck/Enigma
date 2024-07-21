const alphabet = "abcdefghijklmnopqrstuvwxyz"; //it's just the alphabet.
function alphabetize(inNumber) {return alphabet.charAt(inNumber - 1);} //number to letter
function dealphabetize(inCharacter) {return (alphabet.indexOf(inCharacter) + 1);} //letter to number

var letterInput; //inputted letter, a-z
var letter = dealphabetize(letterInput) + 1; //number value of inputted letter, 1-26

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
//[17, 6, 4, 22, 8, 26, 7, 3, 11, 14, 20, 18, 10, 19, 9, 23, 12, 21, 16, 1, 5, 24, 2, 13, 25, 15]
const scramList1 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1] //sequential array of scrambler 1's 26 outputs at rotation 0. remember, arrays start at 0
const scramList2 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1]
const scramList3 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1]
const reflectList = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 1] //even indexes go to the next on the array, odd go back (starting at 0)

function scrambler1 (rot, reflected) {
    //account for scrambler's rotation
    let scramLetter = letter + rot;
    if (scramLetter > 26) {scramLetter -= 26;}
    //enigmatize that thang
    if (reflected == false) {letter = scramList1[scramLetter - 1] - rot;}
    else {letter = scramList1.indexOf(scramLetter) + 1 - rot;}
    //there's only so much alphabet
    if (letter < 1) {letter += 26;}
    if (letter > 26) {letter -= 26;}
}

function scrambler2 (rot, reflected) {
    let scramLetter = letter + rot;
    if (scramLetter > 26) {scramLetter -= 26;}

    if (reflected == false) {letter = scramList2[scramLetter - 1] - rot;}
    else {letter = scramList2.indexOf(scramLetter) + 1 - rot;}

    if (letter < 1) {letter += 26;}
    if (letter > 26) {letter -= 26;}
}

function scrambler3 (rot, reflected) {
    let scramLetter = letter + rot;
    if (scramLetter > 26) {scramLetter -= 26;}
    
    if (reflected == false) {letter = scramList3[scramLetter - 1] - rot;}
    else {letter = scramList3.indexOf(scramLetter) + 1 - rot;}
    
    if (letter < 1) {letter += 26;}
    if (letter > 26) {letter -= 26;}
}


//switchboard
if (letter == plug1) {letter = plug2;}
else if (letter == plug2) {letter = plug1;}
else if (letter == plug3) {letter = plug4;}
else if (letter == plug4) {letter = plug3;}

//scramblers
for (let letterPos = 0; letterPos < 3; letterPos++) { //check which scrambler aligns with current position, execute scrambler, change position repeat three times
    if (wheelOrder[letterPos] == 1) {scrambler1(rotations[letterPos], false);}
    else if (wheelOrder[letterPos] == 2) {scrambler2(rotations[letterPos], false);}
    else if (wheelOrder[letterPos] == 3) {scrambler3(rotations[letterPos], false);}
}

//reflector
if (scramList1.indexOf(letter) % 2 == 0) {letter = reflectList[scramList1.indexOf(letter) + 1];} //if letter's position in array is even, move to next index
else {letter = reflectList[scramList1.indexOf(letter) - 1];} //if letter's position in array is odd, move down an index

//scramblers again
for (let letterPos = 2; letterPos >= 0; letterPos--) { //same as above, but position goes backwards and reflected is true
    if (wheelOrder[letterPos] == 1) {scrambler1(rotations[letterPos], true);}
    else if (wheelOrder[letterPos] == 2) {scrambler2(rotations[letterPos], true);}
    else if (wheelOrder[letterPos] == 3) {scrambler3(rotations[letterPos], true);}
}

//switchboard again
if (letter == plug1) {letter = plug2;}
else if (letter == plug2) {letter = plug1;}
else if (letter == plug3) {letter = plug4;}
else if (letter == plug4) {letter = plug3;}

//rotate
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