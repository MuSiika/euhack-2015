window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic')
React = require('react/addons')
ReactDOM = require('react-dom')
reactRouter = require('react-router')
Header = require('./header')
CodeEditor = require('./CodeEditor')
Documentation = require('./Documentation')
Master = require('./Master')

{Router, Route, IndexRoute} = reactRouter

Home = React.createClass
  render: ->
    <div className="ui vertically divided grid">
      <div className="two column row">
        <div className="column">
          <CodeEditor />
        </div>
        <div className="column">
          <Documentation />
        </div>
      </div>
    </div>

About = React.createClass
  render: ->
    <div className="column">
      <div className="ui segment">
        <h4 className="ui black header"> Creative teaching with MuSiika </h4>

        <span>
        MuSiika is a tool that combines the music education with a development
        of pupils' eskills.<br>

        Why use Musiika?
        Musiika supports colaboration skills, creative thinking,

        How is that all possibly? Let us share an example

        Piece known as "Pachelbel's Canon" was composed by Johann Pachelbel in
        17th century. It belongs fundamentally to the history of music
        representing the Baroque era. Moreover, it's elements (especially the
        chord progression) can be found in many pop music song. In respect of
        music theory Pachelbel's Canon introduces the technique of canon and
        ground bass.

        We can use MuSiika to introduce this great piece of music in a manner
        that the pupils can really dive in the logics of music. The teacher can
        divide the class in groups. This supports peer learning and develops
        collaboration skills. Each group will compose Pachelbel's canon of
        their own. MuSiika has been designed so that each pupil have an
        editor where they can compose a part of their own independently. This
        can be compared to an orchestra, one group member representing violins
        another cellos. Composing occurs in terms of simple commands. One can
        program a set of notes and listen the melody created. Ready version is
        sent to the teacher. Teacher can combine different parts and play them
        simultaneously. The symphony is ready!

        The task can be performed at many levels.
        1) Routine practice of musical notations and programming structures:
          pupils can converts straight a sheet of music to commands that play
          the music
        2) pupils can create melodies of their own. Like in Pachelbel's canon
        the teacher can set a chord progression that must be followed. That also
        ensures that separately composed parts will play in harmony.

        to  Each member has their own responsibility of their own part.




         This provides an environment of learning logical thinking,  programming conditions function

        Music production is strongly connected to technology. As the Even more in Music As the music techThe purpose of MuSiika is to enlarge the variety of teaching methods

        Lesson plan: Music 60 min
        Exercise given last week: find a piece that represents the Baroque style)

        5 min
        - Check the exercises
        - Introduce of Pachelbel's canon in terms of Baroque music
        15 min
        - Introduce of the MuSiika tool
          - Explanation of the basic commands and how does the cooperating work
        10 min
        - set up the groups
          - Each group member should have a part of their own to compose
        15 min
        - Group working
        10 min
        - Pointing out the chord progression and ground bass, demonstration of
          the use in pop music (e.g. Oasis - "Don't look back in Anger" )
        5 min
        - Exercise: Compose a new part to Pachelbel's Canon







        </span>
      </div>
    </div>

Main = React.createClass
  render: ->
    <div>
      <Header/>
      <div className="ui page grid">
        { @props.children }
      </div>
    </div>

routes =
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
  </Route>

$ ->
  ReactDOM.render(<Router>{routes}</Router>, document.body)
