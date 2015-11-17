window.$ = window.jQuery = require('jquery')
require('semantic-ui-css/semantic')
React = require('react/addons')
ReactDOM = require('react-dom')
reactRouter = require('react-router')
Header = require('./header')
CodeEditor = require('./CodeEditor')

{Router, Route, IndexRoute} = reactRouter

Home = React.createClass
  render: ->
    <div className="column">
      <div classNakme="ui segment">
        <h1 className="ui header">
          <div className="sub header">
            <CodeEditor />
          </div>
        </h1>
      </div>
    </div>

About = React.createClass
  render: ->
    <div className="column">
      <div className="ui segment">
        <h4 className="ui black header"> Creative teaching with MuSiika </h4>


        MuSiika is a tool that combines music education with development of
        pupils' eskills.

        Why use Musiika?
        Musiika supports colaboration skills, creative thinking,

        How is that all possibly? Let us share an example
        Piece known as "Pachelbel's Canon" was composed by Johann Pachelbel in
        17th century. It belongs fundamentally to the history of music
        representing the Baroque era. Moreover, it's elements can be found in
        many pop music songs e.g. from chord progression. In respect of music
        theory Pachelbel's Canon introduces the technique of canon and ground
        bass.

        We can use MuSiika to introduce this great piece of music in a manner
        that the pupils can really dive in the logics of music. The teacher can
        divide the class in groups. This supports peer learning and develops
        collaboration skills. Each group will compose Pachelbel's canon of
        their own. MuSiika has been designed so that each pupil have their own
        editor where they can compose melodies independently. Composing occurs
        in terms of simple commands. One can program a set of notes and
        test it by listening the melody created. it test it and when it's ready sent it to the teacher.   


         This provides an environment of learning logical thinking,  programming conditions function

        Music production is strongly connected to technology. As the Even more in Music As the music techThe purpose of MuSiika is to enlarge the variety of teaching methods

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
