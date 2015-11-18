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
    <div className="lahna">
      //<div className="two column row">
        <div className="leftColumn">
          <CodeEditor />
        </div>
        <div className="docu">
          <Documentation />
        //</div>
      </div>
    </div>

Teacher = React.createClass
  render: ->
    <div className="column">
      <Master />
    </div>

About = React.createClass
  render: ->
    <div className="column">
      <div className="ui segment">
        <h2 className="ui black header"> Creative teaching with MuSiika </h2>


        <p>MuSiika is a tool that combines the music education with a development
        of pupils' programming skills.</p>

        <h3>Why use Musiika?</h3>
        <p>Musiika supports collaboration skills, creative thinking and logical reasoning.</p>

        <h3>How is that all possibly? Let us share an example</h3>

        <p>Piece known as "Pachelbel's Canon" was composed by Johann Pachelbel in
        17th century. It belongs fundamentally to the history of music
        representing the Baroque era. Moreover, it's elements (especially the
        chord progression) can be found in many pop music song. In respect of
        music theory Pachelbel's Canon introduces the technique of canon and
        ground bass.</p>

        <p>We can use MuSiika to introduce this great piece of music in a manner
        that the pupils can really dive in the logics of music. The teacher can
        divide the class in groups. This supports peer learning and develops
        collaboration skills. Each group will compose Pachelbel's canon of
        their own. MuSiika has been designed so that each pupil have an
        editor where they can compose a part of their own independently. This
        can be compared to an orchestra, one group member representing violins
        another cellos. Composing occurs in terms of simple commands. One can
        program a set of notes and listen the melody created. Ready version is
        sent to the teacher. Teacher can combine different parts and play them
        simultaneously. The symphony is ready!</p>

        <p>The task can be performed at many levels.</p>

        <p>1) Routine practice of musical notations and programming structures:
          pupils can converts straight a sheet of music to commands that play
          the music</p>
        <p>2) pupils can create melodies of their own. Like in Pachelbel's canon
        the teacher can set a chord progression that must be followed. That also
        ensures that separately composed parts will play in harmony.</p>

        <p>to  Each member has their own responsibility of their own part.
        Divide and conquer.
        This provides an environment of learning logical thinking,  programming conditions function</p>

        <p>Music production is strongly connected to technology. The purpose of MuSiika is to enlarge the variety of teaching methods </p>

        <h3>Lesson plan: Music 60 min</h3>
        <p>Exercise given last week: find a piece that represents the Baroque style)</p>

        <p>5 min</p>
        <p>- Check the exercises</p>
        <p>- Introduce of Pachelbel's canon in terms of Baroque music</p>
        <p>15 min</p>
        <p>- Introduce of the MuSiika tool</p>
        <p>- Explanation of the basic commands and how does the cooperating work</p>
        <p>10 min</p>
        <p>- set up the groups</p>
        <p> - Each group member should have a part of their own to compose</p>
        <p>15 min</p>
        <p>- Group working</p>
        <p>10 min</p>
        <p>- Pointing out the chord progression and ground bass, demonstration of
          the use in pop music (e.g. Oasis - "Don't look back in Anger" )</p>
        <p>5 min</p>
        <p>- Exercise: Compose a new part to Pachelbel's Canon</p>
      </div>
    </div>

Main = React.createClass
  render: ->
    <div>
      <Header/>
      <div id="mainpage" className="ui page grid">
        { @props.children }
      </div>
    </div>

routes =
  <Route path="/" component={Main}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="master" component={Teacher}/>
  </Route>

$ ->
  ReactDOM.render(<Router>{routes}</Router>, document.body)
