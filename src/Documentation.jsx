import React from "react/addons"

var brace  = require('brace');

require('brace/mode/javascript')
require('brace/theme/github')
const Card = require('material-ui/lib/card/card');
const CardTitle = require('material-ui/lib/card/card-title');

const List = require('material-ui/lib/lists/list');
const ListDivider = require('material-ui/lib/lists/list-divider')
const ListItem = require('material-ui/lib/lists/list-item');

export default React.createClass({

  render: function() {
    return <div>
      <Card>
        <CardTitle title="Documentation"/>
        <List>
          <ListItem
          disabled={true}
          primaryText="addNote(note)"
          secondaryText={
            <p>
            note on note
            </p>
          }/>

          <ListDivider/>
          <ListItem 
          disabled={true}
          primaryText="addChord(chord)"
          secondaryText={
            <p>
            note on note
            </p>
          }/>

          <ListDivider/>
          <ListItem
          disabled={true} 
          primaryText="setOctave(newOctave)"
          secondaryText={
            <p>
            note on note
            </p>
          }/>

          <ListDivider/>
          <ListItem 
          disabled={true}
          primaryText="setDelay(newDelay)"
          secondaryText={
            <p>
            note on note
            </p>
          }/>

          <ListDivider/>
          <ListItem
          disabled={true} 
          primaryText="flatten(note)"
          secondaryText={
            <p>
            note on note
            </p>
          }/>
          <ListDivider/>
          <ListItem
          disabled={true} 
          primaryText="sharpen(note)"
          secondaryText={
            <p>
            note on note
            </p>
          }/>

          <ListDivider/>
          <ListItem 
          disabled={true}
          primaryText="play()"
          secondaryText={
            <p>
            note on note
            </p>
          }/>
        </List>
      </Card>
    </div>
  }
});