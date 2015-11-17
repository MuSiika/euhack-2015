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
    'c-'    :   -1,
    'c'     :   0,
    'c#'    :   1,
    'd-'    :   1,
    'd'     :   2,
    'd#'    :   3,
    'e-'    :   3,
    'e'     :   4,
    'f-'    :   4,
    'f'     :   5,
    'f#'    :   6,
    'g-'    :   6,
    'g'     :   7,
    'g#'    :   8,
    'a-'    :   8,
    'a'     :   9,
    'a#'    :   10,
    'b-'    :   10,
    'b'     :   11,
    'b#'    :   12
};

var isFlattedOrSharpened = {
    'c-'    :   0,
    'c'     :   0,
    'c#'    :   0,
    'd-'    :   0,
    'd'     :   0,
    'd#'    :   0,
    'e-'    :   0,
    'e'     :   0,
    'f-'    :   0,
    'f'     :   0,
    'f#'    :   0,
    'g-'    :   0,
    'g'     :   0,
    'g#'    :   0,
    'a-'    :   0,
    'a'     :   0,
    'a#'    :   0,
    'b-'    :   0,
    'b'     :   0,
    'b#'    :   0
};

function convertNoteToNumber(note){
    note = note.toLowerCase();
    console.log(note);
    var noteNumber = noteArray[note] + ((octave + 1)*12);
    console.log(noteNumber);
    noteNumber += isFlattedOrSharpened[note];
    if(noteNumber > 127){
        alert("KÄÄÄK");
    }else if(noteNumber < 0){
        alert("GAAH");
    }

    return noteNumber;
}

// Add note to noteArray
function addNote(note){
    note = convertNoteToNumber(note);
    if(note <= 127 && note >= 0){
        notes.push([[note], instrument]);
    }
    console.log(notes);
}

function __addNote(line, note){
    note = convertNoteToNumber(note);
    if(note <= 127 && note >= 0){
        notes.push([[note], instrument]);
        console.log("Playing line " + line );
    }
    console.log(notes);
}

function addBreak(){
    notes.push([]);
}

function addChord(chord){
    var broken = false;
    for(var i = 0; i < chord.length; i++){
        chord[i] = convertNoteToNumber(chord[i]);
        if(chord[i] > 127 || chord[i] < 0){
            broken = true;
        }
    }
    if(!broken){
        notes.push([chord, instrument]);
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
    console.log(note);
    for(var i = 0; i < note[0].length; i++){
        T.soundfont.setInstrument(note[1]);
        T.soundfont.play(note[0][i]);
    }
}

// Play the song
function play(){
    T.soundfont.setInstrument(instrument);
    for(var i = 0; i < notes.length; i++){
        for(var j = 0; j < notes[i][0].length; j++){
            if(notes[i][0][j].length != 0){
                setTimeout(soundfontPlay, i*delay, notes[i]);
            }
        }
    }
}

function resetFlatsAndSharps(){
    isFlattedOrSharpened = {
    'c-'    :   0,
    'c'     :   0,
    'c#'    :   0,
    'd-'    :   0,
    'd'     :   0,
    'd#'    :   0,
    'e-'    :   0,
    'e'     :   0,
    'f-'    :   0,
    'f'     :   0,
    'f#'    :   0,
    'g-'    :   0,
    'g'     :   0,
    'g#'    :   0,
    'a-'    :   0,
    'a'     :   0,
    'a#'    :   0,
    'b-'    :   0,
    'b'     :   0,
    'b#'    :   0
};
}

// Reset parametres
function reset(){
    notes = [];
    delay = DEFAULT_DELAY;
    octave = DEFAULT_OCTAVE;
    instrument = DEFAULT_INSTRUMENT;
    isFlattedOrSharpened = {
    'c-'    :   0,
    'c'     :   0,
    'c#'    :   0,
    'd-'    :   0,
    'd'     :   0,
    'd#'    :   0,
    'e-'    :   0,
    'e'     :   0,
    'f-'    :   0,
    'f'     :   0,
    'f#'    :   0,
    'g-'    :   0,
    'g'     :   0,
    'g#'    :   0,
    'a-'    :   0,
    'a'     :   0,
    'a#'    :   0,
    'b-'    :   0,
    'b'     :   0,
    'b#'    :   0
};
}
