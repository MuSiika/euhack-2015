import React from "react/addons"

var brace  = require('brace');

require('brace/mode/javascript')
require('brace/theme/github')

const Card = require('material-ui/lib/card/card');
const CardTitle = require('material-ui/lib/card/card-title');
const CardText = require('material-ui/lib/card/card-text');
const CardHeader = require('material-ui/lib/card/card-header');

const ListDivider = require('material-ui/lib/lists/list-divider')

export default React.createClass({

  render: function() {
    return <div>

          <Card>
            <CardTitle title="Documentation"/>

            <CardText>
            <h4>addNote(note)</h4>
            <p><i>note</i>: a single note as string. For example "f" or "F"</p>
            Add a note to the song. For a flat note, use - ("F-") and for sharp note use # ("F#")
            </CardText>

            <ListDivider/>

            <CardText>
            <h4>addChord(chord)</h4>
            <p><i>chord</i>: an array of notes as string. For example ["c", "e", "g"]</p>

            Add a chord to the song. Notes in the array are the notes forming the chord.
            </CardText>

            <ListDivider/>

            <CardText>
            <h4>setOctave(newOctave)</h4>
            <p><i>newOctave</i>: an integer between -4 and 3 where 0 is the first octave.</p>
            Set octave for the notes being added after setting the octave.
            The octave stays until set otherwise.
            </CardText>

            <ListDivider/>

            <CardText>
            <h4>setDelay(newDelay)</h4>
            <p><i>newDelay</i>: time as integer in milliseconds</p>
            Set time waited between two notes.
            </CardText>

            <ListDivider/>

            <CardText>
            <h4>flatten(note)</h4>
            <p><i>note</i>: a string representing a singe note</p>
            Flatter all added notes that are the same as the note given as parameter after calling the function.
            Flattening lasts until set otherwise.
            </CardText>

            <ListDivider/>

            <CardText>
            <h4>sharpen(note)</h4>
            <p><i>note</i>: a string representing a singe note</p>
            Sharpen all added notes that are the same as the note given as parameter after calling the function.
            Sharpening lasts until set otherwise.
            </CardText>

            <ListDivider/>
            <CardText>
            <h4>resetFlatsAndSharpened()</h4>
            Reverts all flats and sharps to normal.
            </CardText>

            <ListDivider/>
            <CardText>
            <h4>addBreak()</h4>
            Adds a break with length of one note to the song.
            </CardText>

            <ListDivider/>

            <CardText>
            <h4>setDelay(newDelay)</h4>
            <p><i>newDelay</i>: time as integer in milliseconds</p>
            Set time waited between two notes.
            </CardText>
            <ListDivider/>

            <CardText>
            <h4>play()</h4>
            Play the song.
            </CardText>

      </Card>
    </div>
  }
});
