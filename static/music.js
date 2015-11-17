const DEFAULT_OCTAVE = 3;
const DEFAULT_DELAY = 1000;
const DEFAULT_INSTRUMENT = 1;

// Array of notes played in function play
var notes = [];

// Delay between two notes
var delay = DEFAULT_DELAY;

var octave = DEFAULT_OCTAVE;
var instrument = DEFAULT_INSTRUMENT;

var noteArray = {
    'c'     :   0,
    'c#'    :   1,
    'd'     :   2,
    'd#'    :   3,
    'e'     :   4,
    'f'     :   5,
    'f#'    :   6,
    'g'     :   7,
    'g#'    :   8,
    'a'     :   9,
    'a#'    :   10,
    'b'     :   11
};

var isFlattedOrSharpened = {
    'c'     :   0,
    'c#'    :   0,
    'd'     :   0,
    'd#'    :   0,
    'e'     :   0,
    'f'     :   0,
    'f#'    :   0,
    'g'     :   0,
    'g#'    :   0,
    'a'     :   0,
    'a#'    :   0,
    'b'     :   0
};

// Add note to noteArray
function addNote(note){
    note = note.toLowerCase();
    var noteNumber = noteArray[note] + ((octave + 1)*12);
    if(noteNumber == 127 && isFlattedOrSharpened[note] > 0){
        alert("KÄÄÄK");
    }else if(noteNumber == 0 && isFlattedOrSharpened[note] < 0){
        alert("GAAH");
    }else{
        noteNumber += isFlattedOrSharpened[note];
        notes.push(noteNumber);
    }
}

function flatten(note){
    isFlattedOrSharpened[note.toLowerCase()]--;
}

function sharpen(note){
    isFlattedOrSharpened[note.toLowerCase()]++;
}

function setDelay(newDelay){
    delay = newDelay;
}

function setOctave(newOctave){
    // Normalize the octave
    octave = newOctave + 3;
}

function setInstrument(newInstrument){
    instrument = newInstrument;
}

// Play one note using soundfont
function soundfontPlay(note){
    T.soundfont.play(note);
}

// Play the song
function play(){
    T.soundfont.setInstrument(instrument);
    for(var i = 0; i < notes.length; i++){
        setTimeout(soundfontPlay, i*delay, notes[i]);
    }
}

// Reset parametres
function reset(){
    notes = [];
    delay = DEFAULT_DELAY;
    octave = DEFAULT_OCTAVE;
    instrument = DEFAULT_INSTRUMENT;
    isFlattedOrSharpened = {
    'c'     :   0,
    'c#'    :   0,
    'd'     :   0,
    'd#'    :   0,
    'e'     :   0,
    'f'     :   0,
    'f#'    :   0,
    'g'     :   0,
    'g#'    :   0,
    'a'     :   0,
    'a#'    :   0,
    'b'     :   0
    };
}